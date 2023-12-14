import apiSetting from "../store/APISetting";
export function getMediaStream() {
    return navigator.mediaDevices.getUserMedia({ audio: true, video: false });
}

export function playAudio(stream,fun:(data)=>void,stopEvent:()=>void){
    const audioChunks = [];
    let mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      // 使用Blob将音频片段转成一个音频文件
      console.log(audioChunks);
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      // 音频文件处理，例如上传或者本地保存
      console.log(audioBlob);
      const formData = new FormData();
      formData.append('file', audioBlob,'recording.webm');
      formData.append('language', "zh");
      fetch(apiSetting.transcriptionsUrl,{
        method: 'POST',
        body: formData
      }).then(response => response.json()).then(data => {
        if(data.status===0){
            const json=JSON.parse(data.data);
            fun(json);
        }else{
            alert("Fail to call audio transcriptions API");
        }
      })
      
    };
    mediaRecorder.start(); // 开始录音
    
    setTimeout(() => {
        mediaRecorder.stop();
        stopAudio(stream);
        stopEvent()
    },6000);
}
export function stopAudio(stream){
    if (stream) {
        // 关闭所有轨迹以停止使用麦克风
        stream.getTracks().forEach(track => track.stop());
    }
}