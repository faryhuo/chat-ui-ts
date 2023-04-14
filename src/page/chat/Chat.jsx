import {useState} from 'react';
import {

    MessageList,
    SendButton
} from '../../component';


const Chat = ({store,config})=>{

    const [btnHeight,setBtnHeight]=useState(48);



    return (
    <div className="message-page">
    <div className="message-list" style={{bottom:btnHeight}}>                
        <MessageList  config={config} store={store}></MessageList>
    </div>
    <div className="send-button" >
        <SendButton store={store}  config={config} setBtnHeight={setBtnHeight}></SendButton>
    </div>
</div>)
}

export default Chat;