import apiSetting from "../store/APISetting";
import i18n from "./i18n";
export function getMediaStream() {
    return navigator.mediaDevices.getUserMedia({ audio: true, video: false });
}

export let fetchAudio=null;

export function playAudio(stream,msgFun,fun:(data)=>void,stopEvent:()=>void){
    const audioChunks = [];
    const currentDate=new Date();
    let mediaRecorder = new MediaRecorder(stream);
    let audioContext= new AudioContext();
    const source=audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    const canvas = document.createElement("canvas") as HTMLCanvasElement;

    document.appendChild(canvas)
    const canvasContext = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function draw() {
      // 获取音频数据
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);
    
      // 清空Canvas
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    
      // 绘制音频动画
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
    
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
    
        canvasContext.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
        canvasContext.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    
        x += barWidth + 1;
      }
    
      // 循环绘制动画
      requestAnimationFrame(draw);
    }
    draw();
    mediaRecorder.ondataavailable = (event) => {
      analyser.fftSize=512;
      const buffers=new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(buffers);
      console.log(buffers);
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      if(new Date().getTime()-currentDate.getTime()<3000){
        msgFun('audio cannot less than 3s. please hold on button to record.')
        return;
      }
      source.disconnect();
      // 使用Blob将音频片段转成一个音频文件
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      // 音频文件处理，例如上传或者本地保存
      const formData = new FormData();
      formData.append('file', audioBlob,'recording.webm');
      formData.append('language', "zh");
      fetchAudio=fetch(apiSetting.transcriptionsUrl,{
        method: 'POST',
        body: formData
      }).then(response => response.json()).then(data => {
        fetchAudio=null;
        if(data.status===0){
            const json=JSON.parse(data.data);
            fun(json);
        }else{
          msgFun(i18n.t("Fail to call audio transcriptions API"));
        }
      })
      
    };
    mediaRecorder.start(); // 开始录音
    
    setTimeout(() => {
        mediaRecorder.stop();
        stopAudio(stream);
        stopEvent()
    },60000);
}
export function stopAudio(stream){
    if (stream) {
        // 关闭所有轨迹以停止使用麦克风
        stream.getTracks().forEach(track => track.stop());
    }
}
