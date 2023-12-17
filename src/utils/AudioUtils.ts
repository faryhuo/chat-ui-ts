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
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      if(new Date().getTime()-currentDate.getTime()<3000){
        msgFun('audio cannot less than 3s. please hold on button to record.')
        return;
      }
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