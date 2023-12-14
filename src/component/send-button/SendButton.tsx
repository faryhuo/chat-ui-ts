import { useRef } from 'react';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { Input, Space, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faBroom, faMicrophone, faCircleStop, faThumbTack } from '@fortawesome/free-solid-svg-icons'
import Upload from '../upload/Upload'
import { useTranslation } from 'react-i18next';
import './SendButton.css'
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import {  getMediaStream, playAudio, stopAudio } from '../../utils/AudioUtils';

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
      closeAudio();
    } else {
      setStart(true);
      getMediaStream().then((stream)=>{
        setAudioObj(stream);
        playAudio(stream,(data)=>{
          //setMessage(data.text);
          sentMsgToChat(data.text);
        },closeAudio)
      })
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

  return (<div ref={btnRef}>
    <Space.Compact style={{ width: '100%' }}>
      <TextArea
        value={message}
        placeholder={t("Type here... (Shift + Enter = Line break)") as string}
        size="large"
        onChange={(e) => typeMsg(e)}
        autoSize={{ minRows: minRow, maxRows: 8 }}
        onPressEnter={sendMsg}
        onResize={resizeHeight}
        spellCheck={true}
        allowClear
      />
      {/* <div className="sent-btn-actions">
      <Button  className="resize-btn" disabled={store.isType===false}  shape="circle"
          icon={
            <Upload store={store} config={config}   ></Upload>
          }/>
      </div> */}
      <div className="sent-btn-actions"  >
        <Button disabled={store.isType === false} shape="circle" onClick={convertMsg}
          icon={isStart ? <FontAwesomeIcon icon={faCircleStop} /> : <FontAwesomeIcon icon={faMicrophone} />} />
        <Button className="resize-btn" shape="circle" icon={<FontAwesomeIcon icon={faBroom} />} size="large"
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