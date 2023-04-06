import React, { Component } from 'react';
import config from '../../store/AppConfig';
import './MessageItem.css';

type IProps={
    content: any;
    title?:string;
    type?:string;
}
class MessageItem extends Component<IProps, {}> {


    userInput(content: any){
        return (<div className="rce-container-mbox message-item-user">
        <div className="rce-mbox rce-mbox-right" style={{background:config.colorPrimary}}><div className="rce-mbox-body">
            <div className="rce-mbox-title rce-mbox-title--clear">
                <span>{this.props.title?this.props.title:"User"}</span></div><div className="rce-mbox-text right">{content}</div>
                <div  className="rce-mbox-time non-copiable"></div></div>
                <svg  className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path style={{fill:config.colorPrimary}} d="M0 0v20L20 0"></path></svg></div></div>)
    }

    render(){    
        let type=this.props.type;    
        if(type==="user"){
            return this.userInput(this.props.content);
        }
        return (
            <div className="rce-container-mbox"><div className="rce-mbox"><div className="rce-mbox-body">
            <div className="rce-mbox-title rce-mbox-title--clear"><span>{this.props.title?this.props.title:"AI"}</span></div>
            <div className="rce-mbox-text left">{this.props.content}</div>
            <div className="rce-mbox-time non-copiable"></div></div>
            <div><svg className="rce-mbox-left-notch" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"><defs><filter id="filter1" x="0" y="0">
                 <feOffset result="offOut" in="SourceAlpha" dx="-2" dy="-5"></feOffset>
                 <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3">
                     </feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M20 0v20L0 0" filter="url(#filter1)"></path></svg></div></div></div>
        )
    }
}


export default MessageItem;
