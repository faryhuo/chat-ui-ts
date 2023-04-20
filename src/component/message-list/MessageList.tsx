import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { observer } from "mobx-react"
import { Image } from 'antd';
import copy from 'copy-to-clipboard';
import './MessageList.css';
import { Button } from 'antd';
import {CopyOutlined} from '@ant-design/icons'
import * as CodeStyle  from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'github-markdown-css';
import Markdown from '../markdown/Markdown'
import MessageItem2 from '../message-list-antd/MessageItem';
import MessageItemChat from '../message-list-chat/MessageItem';
import { autorun } from 'mobx';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage,ISessiondata} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
}
type IStates={
    scrollTo:number;
    pos:{
        x:number;
        y:number;
    }
    showCursor:boolean;
    latestText:string;
}

class MessageList extends Component<IProps,IStates> {
    messagesEndRef: any;
    textNode: HTMLSpanElement;
    constructor(props:IProps) {
      super(props);
  
      this.state = {
        scrollTo:0,
        pos:{
            x:0,
            y:0
        },
        showCursor:false,
        latestText:""
      };
      this.messagesEndRef = null
      this.textNode=document.createElement('span');
      this.textNode.className="cursor"
    }


    getLastTextNode(dom: Element | undefined):any  {
        if(!dom){
            return;
        }

        const childNodes=dom.childNodes;
        if(!childNodes){
            return;
        }
        for(let i= childNodes.length -1;i>=0; i--){
            const node = childNodes[i];
            if(node.nodeType === Node.TEXT_NODE && 
                node.nodeValue && node.nodeValue.trim() && /\s/.test(node.nodeValue)){
                node.nodeValue = node.nodeValue.replace(/\s+$/,'');
                return node;
            }else if(node.nodeType === Node.ELEMENT_NODE){
                let last= this.getLastTextNode(node as Element);
                if(last){
                    return last;
                }
            }
        }
        return null;
    }


    componentDidMount(){
        autorun(() => {
            const { store } = this.props;
            this.setState({latestText:store.latestText})
        });
    }

    getLatestRow(){
        let domlist=document.getElementsByClassName("markdown-body");
        if(domlist && domlist.length){
            let latestDom = domlist[domlist.length-1];
            return latestDom;
        }
    }

    updateCursor(){
        const {store}=this.props;
        let latestDom=null;
        let timer=null;
        if(!store.isType){
            this.textNode.className="element-show";
            if(latestDom===null){
                latestDom=this.getLatestRow()
            }
            let lastNode=this.getLastTextNode(latestDom);
            if(lastNode){
                lastNode.parentElement.appendChild(this.textNode);
            }
            timer && clearTimeout(timer);
            timer=setTimeout(()=>{
                if(store.isType){
                    this.textNode.className="element-hide";
                    latestDom=null;
                }
            },1000)
        }else{
            timer && clearTimeout(timer);
            this.textNode.className="element-hide";
            latestDom=null;
        }
    }

    

    componentDidUpdate(){
        if(this.messagesEndRef){
            this.messagesEndRef.scrollIntoView({ behavior: 'smooth' });
        }
        this.updateCursor();        
    }

    setCallbackRef(instKey: string ) {
        return (ref: any) => {
          // 将函数赋予 ref 属性时，对应的 DOM 节点、类组件实例作为函数参数返回。
          // 作用于函数组件，将不符合任何参数，即 ref 为 undefined。
          (this as any)[instKey] = ref
        }
      }


    renderMessage(item:ISessiondata,type:string,key:number){
        if(item.text){
            return <div className="chat-row"><pre style={{maxWidth:700,margin:0,whiteSpace:'break-spaces'}}>{item.text}</pre>
            </div>
        }else if(item.code){
            return <div className="chat-row">
                <div className="chat-code-content">
                            <span className="copy-button">
                            <Button type="primary" 
                            onClick={()=>{copy(item.code)}} icon={<CopyOutlined />} size="small" >copy</Button></span>
                             <SyntaxHighlighter style={(CodeStyle as any)[this.props.config.codeStyle]} language={"java"} >{item.code}</SyntaxHighlighter>
                        </div>
            </div>
        }
        if(type==="image" || type==="image_edit"){
            return this.renderSysImage(item.image);
        }else if(type==="code"){
            let newChoices: { message: { content: string; }; }[]=[];
            if(item.choices && item.choices.length){
                item.choices.map((subItem: { text: string; })=>{
                    newChoices.push({
                        message:{content:"```"+subItem.text+"```"}
                    });
                    return true;
                });
            }
            return this.renderSysChat(newChoices);
        }else{
            return this.renderSysChat(item.choices);
        }
    }

    renderSysChat(choices: any[]){
        if(!choices || !choices.length){
            return <div></div>
        }
        let list=this.getMessage(choices);
        return <div className="chat-row">{list.map((item,key)=>{
            return (<div key={key}>{item}
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
                list.push(<Markdown content={msg}></Markdown>)
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
            return <MessageItemChat {...props}></MessageItemChat>
        }else if(this.props.config.style==="antd"){
            return <MessageItem2 {...props}></MessageItem2>
        }
    }

 
    

    render(){        
        return (<div className='message-list-wrapper' style={{ width: '100%',height:'100%',padding:5,boxSizing:'border-box' }} ref="messages">
            {this.getMessageItem()}
        </div>)
    }
}


export default observer(MessageList);
