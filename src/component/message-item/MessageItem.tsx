import  { Component } from 'react';
import {Button,Input} from 'antd'
import config from '../../store/AppConfig';
import './MessageItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faTrashCan,faCheck } from '@fortawesome/free-solid-svg-icons';
import {IMessage} from '../../store/MessageData';

type IProps={
    content: any;
    title?:string;
    type?:string;
    text:string;
    index:number;
    store:IMessage;
}
type IStats={
    isEdit: boolean;
    content: any;
}
const { TextArea } = Input;
class MessageItem extends Component<IProps, IStats> {

    constructor(props: IProps | Readonly<IProps>){
        super(props);
        this.state={
            isEdit:false,
            content:props.text
        }
    }
    
    editInput(){
        this.setState({
            isEdit:true
        })
    }

    
    cancel(){
        this.setState({
            isEdit:false,
            content:this.props.text
        })
    }

    editAndResent(){
        this.setState({
            isEdit:false
        })
        this.props.store.reSentMsg(this.props.index,this.state.content);
    }

    changeContent(e: { target: { value: any; }; }){
        this.setState({content:e.target.value})
    }

    userInput(content: any){
        return (<div className="rce-container-mbox message-item-user">
        <div className="rce-mbox rce-mbox-right" style={{background:config.colorPrimary}}>
            <div className="rce-mbox-body">
            <div className="rce-mbox-title rce-mbox-title--clear">
                <span>{this.props.title?this.props.title:"User"}</span>
                </div><div className="rce-mbox-text right">{this.state.isEdit?<TextArea
          value={this.state.content}
          size="large"
          style={{maxWidth:700}}
          onChange={(e)=>{this.changeContent(e)}}
          autoSize={{ minRows: 2, maxRows: 8 }}
        //   onPressEnter={()=>this.editAndResent()}
          maxLength={2000}
        />:<div className="chat-row"><pre style={{margin:0}}>{this.props.content}</pre>
        </div>}</div>
                <div  className="rce-mbox-time non-copiable"></div></div>
                <svg  className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path style={{fill:config.colorPrimary}} d="M0 0v20L20 0"></path></svg></div>
                <div style={{float:'right'}}>
                {!this.state.isEdit && <Button onClick={()=>{this.editInput()}}  shape="round" icon={<FontAwesomeIcon icon={faPaintbrush}  />}  ></Button>}
                {this.state.isEdit && <Button style={{display:'block',marginBottom:5}} onClick={()=>{this.editAndResent()}} shape="round" icon={<FontAwesomeIcon icon={faCheck}  />}  ></Button>}
                {this.state.isEdit && <Button onClick={()=>{this.cancel()}}  shape="round" icon={<FontAwesomeIcon icon={faTrashCan}  />}  ></Button>}
                </div>                   
                </div>)
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
