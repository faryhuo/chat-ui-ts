import apiSetting from "../store/APISetting";
import i18n from "./i18n";
export let streamPromise;
export function getMediaStream() {
  if(streamPromise){
    streamPromise.then(stream => stream.getTracks().forEach(track => {track.stop();})).catch(()=>{})
  }
  streamPromise=navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  return streamPromise;
}

// function draw(analyser,canvas) {
//   // 获取音频数据
//   const bufferLength = analyser.frequencyBinCount;
//   const dataArray = new Uint8Array(bufferLength);
//   analyser.getByteFrequencyData(dataArray);
//   const canvasContext = canvas.getContext('2d');
//   // 清空Canvas
//   canvasContext.clearRect(0, 0, canvas.width, canvas.height);

//   // 绘制音频动画
//   const barWidth = (canvas.width / bufferLength) * 2.5;
//   let barHeight;
//   let x = 0;

//   for (let i = 0; i < bufferLength; i++) {
//     barHeight = dataArray[i];

//     canvasContext.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
//     canvasContext.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

//     x += barWidth + 1;
//   }

//   // 循环绘制动画
//   requestAnimationFrame(()=>draw(analyser,canvas));
// }

export let mediaRecorder;

export function playAudio(stream){
  const promise=new Promise((resolve,reject)=>{
    const audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      //let audioContext= new AudioContext();
      // const source=audioContext.createMediaStreamSource(stream);
      // const analyser = audioContext.createAnalyser();
      // try{
      //   source.connect(analyser);
      //   const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      //   draw(analyser,canvas);
      // }catch(e){
      //   source.disconnect();
      // }
      mediaRecorder.ondataavailable = (event) => {
        //analyser.fftSize=512;
        //const buffers=new Uint8Array(analyser.frequencyBinCount);
        //analyser.getByteFrequencyData(buffers);
        audioChunks.push(event.data);
        console.log(event.data);
      };
      const startDate=new Date()
      mediaRecorder.onstop = () => {
        if(new Date().getTime()-startDate.getTime()<3000){
          reject(i18n.t('audio_too_short'));
          return;
        }
        //source.disconnect();
        // 使用Blob将音频片段转成一个音频文件
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        // 音频文件处理，例如上传或者本地保存
        resolve(audioBlob);
      };

      mediaRecorder.start(); // 开始录音
    })
    return promise;
}
export function stopAudio(){
    // if(mediaRecorder){
    //   mediaRecorder.stop();
    // }
    if (streamPromise) {
        // 关闭所有轨迹以停止使用麦克风
        streamPromise.then(stream =>{
          stream.getTracks().forEach(track => {track.stop();});
        });
    }
}

export function callTranscations(audioBlob:Blob){
  const formData = new FormData();
  formData.append('file', audioBlob,'recording.webm');
  formData.append('language', "zh");
  return fetch(apiSetting.transcriptionsUrl,{
    method: 'POST',
    body: formData
  }).then(response => response.json());
}