import RecordRTC from 'recordrtc';

function successCallback(stream) {
  const recordRTC = RecordRTC(stream, { type: 'audio' });
  recordRTC.startRecording();
}

function stopCallback(stream) {
  const recordRTC = RecordRTC(stream, { type: 'audio' });
  recordRTC.stopRecording(function(audioURL) {
    // audioURL为生成音频的URL地址，通过window.open(audioURL)可以实时预览
    var recordedBlob = recordRTC.getBlob();
     
  });
  const audioTracks = stream.getTracks();
  audioTracks.forEach((track) => {
    track.stop();
  });
}

function errorCallback(error) {
  // maybe another application is using the device
}

class AudioUtils {



  start(){
    const mediaConstraints = { video: false, audio: true };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
  }

  stop(){
    const mediaConstraints = { video: false, audio: true };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(stopCallback).catch(errorCallback);
  }
 
}
const audioUtils=new AudioUtils();
export default audioUtils;