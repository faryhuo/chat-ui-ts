import './main.css'
import './MessageItem.css'
import React, { useEffect,useRef,useState } from 'react';
import {MessageItem} from '../index';
import { observer } from "mobx-react"
import { Card } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList' 
import ChatConfigList from '../chat-config-list/ChatConfigList'
import {IAppConfig} from '../../store/AppConfig';
import {IMessage,ISessiondata} from '../../store/MessageData';

type IProps={
  config:IAppConfig;
  store:IMessage;
  renderMessage:(item:ISessiondata,type:string,key:number)=> JSX.Element;
}
const MessageItemChat : React.FC<IProps> = observer(({store,config,renderMessage}) => {

  const messagesEndRef =useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const scrollMessageTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(()=>{
    const scrollMessage=()=>{
      scrollMessageTimeout.current = null; 
      if(messagesEndRef && messagesEndRef.current && open===false){
        messagesEndRef.current.scrollIntoView();
      }
    }
  
    if(!scrollMessageTimeout.current){
      scrollMessageTimeout.current = setTimeout(scrollMessage,200);
    }

  },[store.latestMessage,open])




  return (<div className="message-list-wrapper-chat" style={{height:'100%'}}>
      <Card title={store.currentChatName}   className="antd-card-wrapper"
      extra={<ActionBtnList onOpen={onOpen} store={store} config={config}></ActionBtnList>} style={{ width: '100%',height:'100%'}}>
      <ScrollToBottom >
        <div>
          {store.data.map((item,key)=>{
          return item.isSys?(<MessageItem index={key} store={store} item={item} type={"system"} key={key} content={renderMessage(item,store.type,key)}></MessageItem>):
          (<MessageItem store={store} type={"user"} key={key} index={key}  text={item.text} content={renderMessage(item,store.type,key)}></MessageItem>)
          })}
          </div>
          <div ref={messagesEndRef}/>
      </ScrollToBottom>
      <ChatConfigList config={config} open={open} onClose={onClose}></ChatConfigList>
      </Card>
      <div></div>
  </div>)
});
export default MessageItemChat;