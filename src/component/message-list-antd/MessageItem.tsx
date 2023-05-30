import { Avatar, List,Card,Button,Input} from 'antd';
import './MessageItem.css';
import icon from './favicon-32x32.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faClose,faCheck } from '@fortawesome/free-solid-svg-icons';
import { observer } from "mobx-react-lite";
import React, { useEffect,useRef,useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList' 
import {IAppConfig} from '../../store/AppConfig';
import {IMessage,ISessiondata} from '../../store/MessageData';
import ChatConfigList from '../chat-config-list/ChatConfigList'

type IProps={
  config:IAppConfig;
  store:IMessage;
  renderMessage:(item:ISessiondata,type:string,key:number)=> JSX.Element;
}
const { TextArea } = Input;

const messageItem2: React.FC<IProps> = observer(({store,config,renderMessage}) => {

  const messagesEndRef:any =useRef(null);
  const [open, setOpen] = useState(false);


  const scrollMessageTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(()=>{
    const scrollMessage=()=>{
      scrollMessageTimeout.current = null; 
      if(messagesEndRef && messagesEndRef.current && open===false){
        (messagesEndRef as any).current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    if(!scrollMessageTimeout.current){
      scrollMessageTimeout.current = setTimeout(scrollMessage,200);
    }

  },[store.latestMessage,open])


  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const editInput=(item: ISessiondata)=>{
    item.isEdit=true;
  }


  const cancel=(item: ISessiondata)=>{
    item.isEdit=false;
  }

  const editAndResent=(index: number,item: ISessiondata)=>{
    item.isEdit=false;
    if(store && index){
        store.reSentMsg(index,item.text);
    }
  }
  const changeContent=(e: { target: { value: any; }; },item: ISessiondata)=>{
    item.text=e.target.value;
  }

  const actionBtnList=(item: ISessiondata,key: number)=>{
    const list=[];
    list.push(<Button style={(item.isSys || item.isEdit)?{display:"none"}:{}} onClick={()=>{editInput(item)}}  shape="round" icon={<FontAwesomeIcon icon={faPaintbrush}  />}  ></Button>);
    list.push(<Button style={(item.isSys || !item.isEdit)?{display:"none"}:{}} onClick={()=>{editAndResent(key,item)}} shape="round" icon={<FontAwesomeIcon icon={faCheck}  />}  ></Button>);
    list.push(<Button style={(item.isSys || !item.isEdit)?{display:"none"}:{}} onClick={()=>{cancel(item)}}  shape="round" icon={<FontAwesomeIcon icon={faClose}  />}  ></Button>);
    return list;
  }

  return (<div className="message-list-wrapper-antd">
            <Card title={store.currentChatName} extra={
            <ActionBtnList onOpen={onOpen} store={store} config={config}></ActionBtnList>} style={{ width: '100%',height:'100%'}}>
          <ScrollToBottom>
          <List
            className="message-item-list-antd"
            itemLayout="horizontal"
            >
              {store.data.map((item,key)=>{
            return <List.Item key={key} className={item.isSys?"message-item-sys-antd":"message-item-user-antd"}
                actions={actionBtnList(item,key)}
              >
                <span className="message-item-sys-icon">{item.isSys?(<Avatar src={icon} size="large"/>):(<Avatar           
                style={{
                  backgroundColor: config.colorPrimary,
                  verticalAlign: 'middle',
                }}
                size="large" >User</Avatar>)}</span>
                <div className="message-item-content-antd">{item.isEdit?<TextArea
                  value={item.text}
                  size="large"
                  style={{maxWidth:700}}
                  onChange={(e: { target: { value: any; }; })=>{changeContent(e,item)}}
                  autoSize={{ minRows: 2, maxRows: 8 }}
                  maxLength={2000}
                  spellCheck={true}
                  allowClear
                />               
                :renderMessage(item,store.type,key)}</div>
              </List.Item>
              })}
            </List>
            <div ref={messagesEndRef}/>
            </ScrollToBottom>
            <ChatConfigList config={config} open={open} onClose={onClose}></ChatConfigList>
      </Card>
    </div>
  );
});
export default messageItem2;