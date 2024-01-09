import { useEffect, useRef } from 'react';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { Input, Space, Button, message as messageApi, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faBroom, faMicrophone, faThumbTack, faRecordVinyl, faKeyboard, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import './SendButton.css'
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import { callTranscations, getMediaStream, playAudio, stopAudio } from '../../utils/AudioUtils';
import Upload from '../upload/Upload';

type IProps = {
  config: IAppConfig;
  store: IMessage;
  setBtnHeight: (height: number) => void;
}


const { TextArea } = Input;
let isCancel=false;
let isText=false;

const SendButton: React.FC<IProps> = observer(({ store, config, setBtnHeight }) => {
  const [message, setMessage] = useState("");
  const [minRow, setMinRow] = useState(2);
  const [messageFun, contextHolder] = messageApi.useMessage();
  const [isStart, setStart] = useState(false);

  const { t } = useTranslation();
  const btnRef = useRef(null);
  const resizeHeight = () => {
    setBtnHeight((btnRef?.current as any)?.getBoundingClientRect()?.height + 5);

  }
  const timeObj = useRef(null);
  const [inputModel, setInputModel] = useState<'keyboard' | 'audio'>("keyboard");
  const [recordStartime, setRecordStartime] = useState(null);
  const [recordEndTime, setRecordEndTime] = useState(null);
  let fetchAudio = useRef(false);
  let [fetchAudioState,setFetchAudioSate] = useState(false);

  let timerObj = useRef(null);



  const convertInputModel = () => {
    if (inputModel === 'keyboard') {
      setMinRow(2);
      setTimeout(() => {
        setInputModel('audio');
      });
      getMediaStream();
    } else {
      setInputModel('keyboard');
    }
  }

  const sendMsg = (event: any) => {
    if (event.shiftKey && event.keyCode === 13) {
      return;
    }
    if (store.isType === false) {
      return
    }
    if (!message) {
      return;
    }
    if (isStart) {
      return;
    }
    sentMsgToChat(message)
  }

  function secondsToHMS(seconds) {

    seconds = seconds / 1000;
    // 计算小时、分钟和秒
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = Math.floor(seconds % 60);

    // 格式化成两位数
    var formattedHours = ('0' + hours).slice(-2);
    var formattedMinutes = ('0' + minutes).slice(-2);
    var formattedSeconds = ('0' + remainingSeconds).slice(-2);

    // 构造时间字符串
    var timeString = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

    return timeString;
  }


  const sentMsgToChat = (message) => {
    let chatId = store.activeSession + "";
    chatId = store.checkChatId(chatId);
    if(store.getChatInfoByChatId(chatId)?.chatConfig?.model==="gemini-pro-vision" && store.files.length===0){
      messageApi.error(t('Must be upload one image in current model.'));
      return;
    }
    if(store.files.length){
      const msgArr=[];
      store.files.forEach(file=>{
        if(!file.response.data){
          messageApi.error(t('please wait all files be uploaded'));
          return;
        }
          msgArr.push({
              image_url:{
                  url:file.response.data
              },
              type:"image_url"
          });
      });
      msgArr.push({
        type:"text",
        text:message
      })
      store.addData({
        messageContent: msgArr
      }, chatId);
      store.setFiles([]);
    }else{
      store.addData({
        text: message
      }, chatId)
    }
    store.callChatAPI(chatId);
    
    store.disableType(chatId);
    setTimeout(() => {
      setMessage("");
    })
  }


  const handleAudio = (isStart) => {
    if (!isStart) {
      if (timeObj.current) {
        clearTimeout(timeObj.current);
        timeObj.current=null;
      }
      fetchAudio.current=false;
      setFetchAudioSate(false);
      stopAudio();
    } else {
      if (fetchAudio.current) {
        return;
      }
      isCancel=false;
      isText=false;
      fetchAudio.current=true;
      setFetchAudioSate(true);
      getMediaStream().then((stream) => {
        const startTime = new Date();
        ((startTime)=>{
          playAudio(stream).then((audio: any) => {
            if (isCancel) {
              isCancel=false;
              fetchAudio.current=false;
              setFetchAudioSate(false);
              return;
            }
            if (new Date().getTime() - startTime.getTime() < 3000) {
              //messageFun.error(t('audio cannot less than 3s. please hold on button to record.'));
              fetchAudio.current=false;
              setFetchAudioSate(false);
              return;
            }
            callTranscations(audio).then((data) => {
              const json = data.data;
              if (json.text) {
                if (isText) {
                  isText=false;
                  setInputModel('keyboard');
                  setMessage(json.text);
                  return;
                }
                sentMsgToChat(json.text);
              } else {
                messageFun.error(t('Audio to text failed'));
              }
            }).finally(() => {
              fetchAudio.current=false;
              setFetchAudioSate(false);
            })
          }, (errMsg) => {
            fetchAudio.current=false;
            setFetchAudioSate(false);
            if (isCancel) {
              isCancel=false;
              return;
            }
            if (errMsg) {
              messageFun.error(errMsg);
            }
          })
          if(!timeObj.current){
            clearTimeout(timeObj.current)
          }
          timeObj.current=setTimeout(() => {
            setStart(false);
            stopAudio();
          },60000);
        })(startTime)
      })
    }
  }

  useEffect(()=>{
    if(isStart){
      const startTime=new Date();
      setRecordStartime(startTime)
      setRecordEndTime(new Date());
      if (timerObj.current === null) {
        timerObj.current = setInterval(() => {
          setRecordEndTime(new Date());
        }, 100)
      }
    }else{
      if(timerObj.current){
        clearInterval(timerObj.current);
        timerObj.current=null;
      }
    }
  },[isStart])


  const typeMsg = (e: any) => {
    setMessage(e.target.value)
  }


  const resizeInput = () => {
    setMinRow(minRow === 2 ? 9 : 2)
  }

  const startAudio = () => {

    if (store.isType === false) {
      return
    }
    if (fetchAudio.current) {
      return
    }
    console.log("start duio")
    if(isStart===false){
      setStart(true);
      handleAudio(true);
    }
  };

  const endAuio = () => {
    console.log("end duio")
    if(isStart===true){
      setStart(false);
      handleAudio(false);
    }
  };

  return (<div ref={btnRef}>

    <Space.Compact style={{ width: '100%' }}>
      {inputModel === 'keyboard' &&    <div className="upload-btn-wrapper">
        <Upload store={store} config={config}>
        <Tooltip placement="top" title={t('Only support those models.') + store.getSupportModelsText()}>
          <Button className='upload-btn' disabled={store.isType === false || !store.checkIsImageModel(store.activeSession)} shape="circle"
          onClick={(e)=>{console.log(e)}}
          icon={<FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>}></Button>
         </Tooltip>
        </Upload>
      </div>}
      {inputModel === 'keyboard' ? <TextArea
        value={message}
        placeholder={t("Type here... (Shift + Enter = Line break)") as string}
        size="large"
        onChange={(e) => typeMsg(e)}
        autoSize={{ minRows: minRow, maxRows: 8 }}
        onPressEnter={sendMsg}
        onResize={resizeHeight}
        spellCheck={true}
        allowClear
      /> : <div className='recorder-input-wrapper'>
        {isStart && <span className='recorder-timer audio-hold-btn'><FontAwesomeIcon icon={faRecordVinyl} />{recordStartime && recordEndTime && secondsToHMS(recordEndTime.getTime() - recordStartime.getTime())}</span>}
        <Button className='audio-hold-btn'  size='large' icon={<FontAwesomeIcon size='lg' icon={faMicrophone} />}
          onClick={()=>isStart?endAuio():startAudio()}
          // onMouseLeave={handleMouseUp} // 处理鼠标在按钮上按住然后离开按钮的情况
          style={{ width: '100%', height: '65px', borderRadius: 20,background:(store.isType === false || fetchAudioState)?"#f0f0f0":"#fff", color: isStart ? 'red' : 'black' }}
        >{isStart?t('End'):t('Start')}</Button></div>}
      <div className="sent-btn-actions"  >
        <Button disabled={store.isType === false} shape="circle" onClick={convertInputModel}
          icon={inputModel !== 'keyboard' ? <FontAwesomeIcon icon={faKeyboard} /> : <FontAwesomeIcon icon={faMicrophone} />} />

        <Button className="resize-btn" shape="circle" icon={<FontAwesomeIcon icon={faBroom} />}
          onClick={() => { store.addChat() }}></Button>
      </div>
      <div className="sent-btn-actions"  >
        <Button disabled={store.isType === false} type="primary" shape="circle" onClick={sendMsg}
          icon={<FontAwesomeIcon icon={faPaperPlane} />} />
        <Button className="resize-btn" shape="circle" onClick={resizeInput} icon={<FontAwesomeIcon icon={faThumbTack} />} />
      </div>
    </Space.Compact>
    {contextHolder}
    {isStart && <div
      onClick={endAuio}
      className='audio-wrapper'>
      <div className="canvas-wrapper">
        <canvas id='canvas'></canvas>
      </div>
      <div className="audio-inputs">
        <Button shape='circle'
          onTouchStart={()=>isCancel=true}
          onMouseEnter={() => { isCancel=true; }}
          onMouseLeave={() => { isCancel=false;}}
        >{t('Cancel')}</Button>
        <Button shape='circle'
         onTouchStart={()=>isText=true}
         onMouseEnter={() => { isText=true; }}
         onMouseLeave={() => { isText=false;}}
        >{t('Text')}</Button>
      </div>
    </div>}
  </div>);
});

export default SendButton;