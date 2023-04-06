import React from 'react';
import {
    MessageList,
    SendInput
} from '../../component';
import './Code.css'


const Code = ({store,config})=>{

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