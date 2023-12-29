import {useEffect, useState} from 'react';
import {

    MessageList,
    SendButton
} from '../../component';
import {Button} from 'antd';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import './Chat.css'
import { observer } from "mobx-react-lite"
import { useParams } from 'react-router-dom';

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const Chat: React.FC<IProps> = ({store,config})=>{

    const [btnHeight,setBtnHeight]=useState(48);
    const {chatId}=useParams();
    useEffect(()=>{
        if(chatId && chatId!==store.activeSession){
            store.selectChat(chatId);
        }
    },[chatId,store])
    useEffect(() => {
        document.title = "AI Chat";
      }, []);

    return (
    <div className="message-page">
    <div className="message-list" style={{bottom:btnHeight}}>                
        <MessageList  config={config} store={store}></MessageList>
        {store.needStream && <div className="message-stop-btn"
        style={{bottom:btnHeight+28}}>
            <Button type="primary" danger onClick={()=>{store.endStream(store.activeSession+"")}}>Stop Response</Button>
        </div>}

    </div>
    <div className="send-button" >
        <SendButton store={store}  config={config} setBtnHeight={setBtnHeight}></SendButton>
    </div>
</div>)
}

export default observer(Chat);