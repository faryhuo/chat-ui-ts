import  { Component } from 'react';
import { observer } from "mobx-react"
import { Image } from 'antd';
import './MessageList.css';
import Markdown from '../markdown/Markdown'
import MessageItem2 from '../message-list-antd/MessageItem';
import MessageItemChat from '../message-list-chat/MessageItem';
import {IAppConfig} from '../../store/AppConfig';
import {Ichoices, IMessage,ISessiondata} from '../../store/MessageData';
import classNames from 'classnames';

type IProps={
  config:IAppConfig;
  store:IMessage;
}


class MessageList extends Component<IProps> {


    renderMessage(item:ISessiondata,type:string,key:number){
        const classs=classNames({"chat-row":true,"chat-row-hide":item?.isDetails===false && item?.hasShowDetails===true});
        if(item.text){
            return <div className={classs}><pre style={{maxWidth:700,margin:0,whiteSpace:'break-spaces'}}>{item.text}</pre>
            </div>
        }else if(item.code){
            return <div className={classs}>
                <div className="chat-code-content">
                        <Markdown content={item.code}></Markdown>            
                </div>
            </div>
        }
        if(type==="image" || type==="image_edit"){
            return this.renderSysImage(item.image);
        }else if(type==="code"){
            let newChoices: { message: { content: string; }; }[]=[];
            if(item.choices && item.choices.length){
                item.choices.map((subItem)=>{
                    newChoices.push({
                        message:{content:"```"+subItem.message.content+"```"}
                    });
                    return true;
                });
            }
            return this.renderSysChat(newChoices,classs);
        }else{
            return this.renderSysChat(item.choices,classs);
        }
    }

    renderSysChat(choices: Ichoices[] | null | undefined,classs: string | undefined){
        if(!choices || !choices.length){
            return <div></div>
        }
        let list=this.getMessage(choices);
        let i=0;
        return <div className={classs}>{list.map((item)=>{
            return (<div key={i}>{item}
            </div>);
        })}</div>;
    }

    renderSysImage(image: { width: string | number | undefined; height: string | number | undefined; uri: string | undefined; }){
        if(!image){
            return <div></div>
        }
        return <div><Image width={image.width} height={image.height} 
        src={image.uri}></Image></div>;
    }


    getMessage(arr: any[]){
        let choices=arr.concat();
        let repList=[choices.pop()];
        let list=[];
        if (choices && repList.length > 0) {
            for(let i=0;i<repList.length;i++){
                let msg=repList[i].message.content;
                list.push(<Markdown key={i} content={msg}></Markdown>)
            }
        }
        return list;
    }

    getMessageItem(){
        const {store,config} = this.props;
        const props={
            store,
            config,
            renderMessage:(item: any,type: any,key: any)=>{return this.renderMessage(item,type,key)}
            
        }
        if(this.props.config.style==="chat"){
            return <MessageItemChat {...props} key={1}></MessageItemChat>
        }else if(this.props.config.style==="antd"){
            return <MessageItem2 {...props} key={2}></MessageItem2>
        }
    }

 
    

    render(){        
        return (<div className='message-list-wrapper' style={{ width: '100%',height:'100%',padding:5,boxSizing:'border-box' }} ref="messages">
            {this.getMessageItem()}
        </div>)
    }
}


export default observer(MessageList);
