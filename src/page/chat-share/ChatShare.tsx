import axios from 'axios'
import {Button} from 'antd'
import { ReactElement, useEffect, useState } from 'react'
import SharePage from '../../component/chat-history-sharer-page/ChatHistorySharerPage'
import apiSetting from '../../store/APISetting'
import { ISession } from '../../store/MessageData'
import './ChatShare.css'
import '../../component/message-list/MessageList.css'
import '../../component/message-list-chat/main.css'

type IProps={
}

const ChatShare: React.FC<IProps> = ()=>{
    
    const [content,setContent] =useState<ReactElement | null>(null); 
    const [uuid,setUUID] =useState<string | null>(null); 

    const start=()=>{
        window.location.href=`${window.location.origin}/share/${uuid}`
    }

    useEffect(()=>{
        const uuidFromUrl=window.location.search.replace("?uuid=","")
        axios(apiSetting.sharingUrl+"/"+uuidFromUrl,{
            method:"get"
        }).then((response)=>{
            const data:ISession=response.data.data;
            if(data){
                setUUID(uuidFromUrl);
                const sharePage=<SharePage chatApiConfig={data.chatConfig} topic={data.chatName?data.chatName:""} 
                data={data.data} time={data.updateDate?data.updateDate:new Date()}></SharePage>
                setContent(sharePage);
            }else{
                alert('The link is expired.');
                window.location.href=window.location.origin;
            }
        }).catch(()=>{
            alert('The link is expired.');
            window.location.href=window.location.origin;
        })
    },[]);

    const language=(window?.navigator?.language==='en-US'?"Start a new session":"开始新的聊天");

    return (
    <div className="message-share-page">            
        {content}
        <div className="action-btn" >
            {!!uuid && <Button onClick={start} type='primary'>{language}</Button>}
        </div>
    </div>)
}

export default ChatShare;