import { useEffect, useRef } from 'react';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { Input, Space, Button, message as messageApi } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faBroom, faMicrophone, faThumbTack, faRecordVinyl, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import './SendButton.css'
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import { callTranscations, getMediaStream, mediaRecorder, playAudio, stopAudio } from '../../utils/AudioUtils';
import Upload from '../upload/Upload';

type IProps = {
  config: IAppConfig;
  store: IMessage;
  setBtnHeight: (height: number) => void;
}


const { TextArea } = Input;
let audioObj=null;
let isCancel=false;
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

  const closeAudio = () => {
    mediaRecorder && mediaRecorder.stop();
    audioObj && stopAudio(audioObj);
  }


  const convertInputModel = () => {
    if (inputModel === 'keyboard') {
      setMinRow(2);
      setTimeout(() => {
        setInputModel('audio');
      });
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


  const handleAudio = (isStart) => {
    if (!isStart) {
      if (timeObj.current) {
        clearTimeout(timeObj.current);
        timeObj.current=null;
      }
      fetchAudio.current=false;
      setFetchAudioSate(false);
      closeAudio();
    } else {
      if (fetchAudio.current) {
        return;
      }
      const startTime = new Date();
      fetchAudio.current=true;
      setFetchAudioSate(true);
      getMediaStream().then((stream) => {
        audioObj=stream;
        playAudio(stream).then((audio: any) => {
          if (isCancel) {
            isCancel=false;
            fetchAudio.current=false;
            setFetchAudioSate(false);
            return;
          }
          if (new Date().getTime() - startTime.getTime() < 3000) {
            messageFun.error(t('audio cannot less than 3s. please hold on button to record.'));
            fetchAudio.current=false;
            setFetchAudioSate(false);
            return;
          }
          callTranscations(audio).then((data) => {
            const json = JSON.parse(data.data);
            if (json.text) {
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
        }).finally(() => {
          closeAudio();
        })
        timeObj.current=setTimeout(() => {
          mediaRecorder && mediaRecorder.stop();
          stopAudio(stream);
        },60000);
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

  const handleMouseDown = () => {
    if (store.isType === false) {
      return
    }
    if (fetchAudio.current) {
      return
    }
    if(isStart===false){
      setStart(true);
      handleAudio(true);
    }
  };

  const handleMouseUp = () => {
    if(isStart===true){
      setStart(false);
      handleAudio(false);
    }
  };

  return (<div ref={btnRef}>
    <Space.Compact style={{ width: '100%' }}>
      {inputModel === 'keyboard' && <div className="upload-btn-wrapper">
        <Button className='upload-btn' disabled={store.isType === false} shape="circle"
          icon={
            <Upload store={store} config={config}   ></Upload>
          } />
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
        {isStart && <span className='recorder-timer'><FontAwesomeIcon icon={faRecordVinyl} />{recordStartime && recordEndTime && secondsToHMS(recordEndTime.getTime() - recordStartime.getTime())}</span>}
        <Button disabled={store.isType === false || fetchAudioState} size='large' icon={<FontAwesomeIcon size='lg' icon={faMicrophone} />}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseUp={handleMouseUp}
          onClick={(e)=>e.preventDefault()}
          // onMouseLeave={handleMouseUp} // 处理鼠标在按钮上按住然后离开按钮的情况
          style={{ width: '100%', height: '65px', borderRadius: 20, color: isStart ? 'red' : 'black' }}
        >{t('Press and hold the button to record')}</Button></div>}
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
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      className='audio-wrapper'>
      <div className="canvas-wrapper">
        <canvas id='canvas'></canvas>
      </div>
      <div className="audio-inputs">
        <Button shape='circle'
          onMouseEnter={() => { isCancel=true; }}
          onMouseLeave={() => { isCancel=false;}}
        >{t('Cancel')}</Button>
        <Button shape='circle'>{t('Text')}</Button>
      </div>
    </div>}
  </div>);
});

export default SendButton;