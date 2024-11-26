import React from 'react';
import {
    MessageList,
    SendInput
} from '../../component';
import './Code.less'
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
}


const Code: React.FC<IProps>  = ({store,config})=>{

    return (
    <div className="code-page">
    <div className="message-list">                
        <MessageList  config={config} store={store}></MessageList>
    </div>
    <div className="send-button">
        <SendInput store={store}  config={config}></SendInput>
    </div>
</div>)
}

export default Code;