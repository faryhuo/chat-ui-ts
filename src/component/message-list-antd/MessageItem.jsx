import { Avatar, List,Card} from 'antd';
import './MessageItem.css';
import icon from './favicon-32x32.png';
import {EditOutlined} from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import React, { useEffect,useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList' 

const messageItem2 = observer(({store,config,renderMessage}) => {

  const messagesEndRef =useRef(null);

  useEffect(()=>{
    if(messagesEndRef && messagesEndRef.current){
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  })




  return (<div className="message-list-wrapper-antd">
            <Card title={store.currentChatName} extra={
            <ActionBtnList store={store} config={config}></ActionBtnList>} style={{ width: '100%'}}>
          <ScrollToBottom>
          <List
            className="message-item-list-antd"
            itemLayout="horizontal"
            >
              {store.data.map((item,key)=>{
            return <List.Item key={key} className={item.isSys?"message-item-sys-antd":"message-item-user-antd"}
                actions={[<EditOutlined style={item.isSys?{display:'none'}:{}}/>]}
              >
                <span className="message-item-sys-icon">{item.isSys?(<Avatar src={icon} size="large"/>):(<Avatar           
                style={{
                  backgroundColor: config.colorPrimary,
                  verticalAlign: 'middle',
                }}
                size="large" >User</Avatar>)}</span>
                <div className="message-item-content-antd">{renderMessage(item,store.type,key)}</div>
              </List.Item>
              })}
            </List>
            <div ref={messagesEndRef}/>
            </ScrollToBottom>
      </Card>
    </div>
  );
});
export default messageItem2;