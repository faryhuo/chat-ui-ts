import './main.css'
import React, { useEffect,useRef } from 'react';
import {MessageItem} from '../index';
import { observer } from "mobx-react"
import { Card } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList' 

const MessageItemChat = observer(({store,config,renderMessage}) => {

  const messagesEndRef =useRef(null);

  useEffect(()=>{
    if(messagesEndRef && messagesEndRef.current){
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  })




  return (<div className="message-list-wrapper-chat">
      <Card title={store.currentChatName} 
      extra={<ActionBtnList store={store} config={config}></ActionBtnList>} style={{ width: '100%',background:"#f0f0f0"}}>
      <ScrollToBottom>
          {store.data.map((item,key)=>{
          return item.isSys?(<MessageItem type={item.isUser?"user":"system"} key={key} content={renderMessage(item,store.type,key)}></MessageItem>):
          (<MessageItem type={"user"} key={key} content={renderMessage(item,store.type,key)}></MessageItem>)
          })}
          <div ref={messagesEndRef}/>
      </ScrollToBottom>
      </Card>
  </div>)
});
export default MessageItemChat;