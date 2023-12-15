import { useRef } from 'react';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { Input, Space, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faBroom, faMicrophone, faThumbTack, faRecordVinyl, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import './SendButton.css'
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import {  getMediaStream, playAudio, stopAudio } from '../../utils/AudioUtils';
import Upload from '../upload/Upload';

type IProps = {
  config: IAppConfig;
  store: IMessage;
  setBtnHeight: (height: number) => void;
}


const { TextArea } = Input;

const SendButton: React.FC<IProps> = observer(({ store, config, setBtnHeight }) => {
  const [message, setMessage] = useState("");
  const [minRow, setMinRow] = useState(2);

  const [isStart, setStart] = useState(false);

  const { t } = useTranslation();
  const btnRef = useRef(null);
  const resizeHeight = () => {
    setBtnHeight((btnRef?.current as any)?.getBoundingClientRect()?.height + 5);

  }
  const [audioObj, setAudioObj] = useState(null);
  const [timeObj, setTimeobj] = useState(null);
  const [inputModel, setInputModel] = useState("keyborad");
  const [recordStartime, setRecordStartime] = useState(null);
  const [recordEndTime, setRecordEndTime] = useState(null);
  let timerObj=null;

  const closeAudio=()=>{
    stopAudio(audioObj);
    setStart(false);
    setAudioObj(null);
  }

  const convertMsg = () => {

    if (isStart) {
      if(timeObj){
        clearTimeout(timeObj);
        setTimeobj(null);
      }
      clearInterval(timerObj);
      closeAudio();
    } else {
      setRecordStartime(new Date());
      setStart(true);
      timerObj=setInterval(()=>{
        setRecordEndTime(new Date());
      },100)
      getMediaStream().then((stream)=>{
        setAudioObj(stream);
        playAudio(stream,(data)=>{
          //setMessage(data.text);
          if(data.text){
            sentMsgToChat(data.text);
          }else{

          }
        },closeAudio)
      })
    }
    
  }


  // const playAudio=()=>{
  //   setStart(true);
  //   getMediaStream().then((stream)=>{
  //     setAudioObj(stream);
  //     playAudio(stream,(data)=>{
  //       //setMessage(data.text);
  //       if(data.text){
  //         sentMsgToChat(data.text);
  //       }else{

  //       }
  //     },closeAudio)
  //   })
  // }

  const convertInputModel=()=>{
    if(inputModel==='keyborad'){
      setMinRow(2);
      setTimeout(() => {
        setInputModel('audio');
      });
    }else{
      setInputModel('keyborad');
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
   
  seconds=seconds/1000;
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

  const sentMsgToChat=(message)=>{
    let chatId = store.activeSession + "";
    chatId = store.checkChatId(chatId);
    store.addData({
      text: message
    }, chatId)
    if (store.type === "image") {
      store.callImageAPI(chatId, message)
    } else {
      store.callChatAPI(chatId);
    }
    store.disableType(chatId);
    setTimeout(() => {
      setMessage("");
    })
  }

  const typeMsg = (e: any) => {
    setMessage(e.target.value)
  }


  const resizeInput = () => {
    setMinRow(minRow === 2 ? 9 : 2)
  }

  const handleMouseDown = () => {
    setStart(true);
    convertMsg();
  };

  const handleMouseUp = () => {
    setStart(false);
    convertMsg();
  };

  return (<div ref={btnRef}>
    <Space.Compact style={{ width: '100%' }}>
      <div className="upload-btn-wrapper">
      {/* <Button className='upload-btn'  disabled={store.isType===false}  shape="circle"
          icon={
            <Upload store={store} config={config}   ></Upload>
          }/> */}
      </div>
      {inputModel==='keyborad'?<TextArea
        value={message}
        placeholder={t("Type here... (Shift + Enter = Line break)") as string}
        size="large"
        onChange={(e) => typeMsg(e)}
        autoSize={{ minRows: minRow, maxRows: 8 }}
        onPressEnter={sendMsg}
        onResize={resizeHeight}
        spellCheck={true}
        allowClear
      />:<div className='recorder-input-wrapper'>
        {isStart && <span className='recorder-timer'><FontAwesomeIcon icon={faRecordVinyl}/>{recordStartime && recordEndTime && secondsToHMS(recordEndTime.getTime()-recordStartime.getTime())}</span>}
      <Button size='large' icon={<FontAwesomeIcon size='lg' icon={faMicrophone}/>} 
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp} // 处理鼠标在按钮上按住然后离开按钮的情况
      style={{width:'100%',height:'65px',color:isStart?'red':'black'}} 
    >{t('Press and hold the button to record')}</Button></div>}
      <div className="sent-btn-actions"  >
        <Button disabled={store.isType === false} shape="circle" onClick={convertInputModel}
          icon={isStart ? <FontAwesomeIcon icon={faKeyboard} /> : <FontAwesomeIcon icon={faMicrophone} />} />
        
        <Button className="resize-btn" shape="circle" icon={<FontAwesomeIcon icon={faBroom} />}
          onClick={() => { store.addChat() }}></Button>
      </div>
      <div className="sent-btn-actions"  >
        <Button disabled={store.isType === false} type="primary" shape="circle" onClick={sendMsg}
          icon={<FontAwesomeIcon icon={faPaperPlane} />} />
        <Button className="resize-btn" shape="circle" onClick={resizeInput} icon={<FontAwesomeIcon icon={faThumbTack} />} />
      </div>
    </Space.Compact>
  </div>);
});

export default SendButton;