import React from 'react';
import {

    MessageList,
    SendButton
} from '../../component';


const Chat = ({store,config})=>{

    return (
    <div className="message-page">
    <div className="message-list">                
        <MessageList  config={config} store={store}></MessageList>
    </div>
    <div className="send-button">
        <SendButton store={store}  config={config}></SendButton>
    </div>
</div>)
}

export default Chat;