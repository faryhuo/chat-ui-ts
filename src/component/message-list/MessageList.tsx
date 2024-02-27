import { observer } from "mobx-react-lite"
import { Image } from 'antd';
import './MessageList.css';
import Markdown from '../markdown/Markdown'
import MessageItem2 from '../message-list-antd/MessageItem';
import MessageItemChat from '../message-list-chat/MessageItem';
import { IAppConfig } from '../../store/AppConfig';
import { Ichoices, IMessage, ISessiondata } from '../../store/MessageData';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

type IProps = {
    config: IAppConfig;
    store: IMessage;
}

export const renderMessage=(item: ISessiondata)=> {
    const classs = classNames({ "chat-row": true, "chat-row-hide": item?.isDetails === false && item?.hasShowDetails === true });
    if (item.translateText && item.showTranslateText) {
        return <div className={classs}><Markdown content={item.translateText}></Markdown></div>
    }else if (item.text) {
        let arr=item.text.split("\n");
        let fileIndex=0;
        let files=[];
        let displayText;
        if(arr.length){
            arr.forEach(arrItem=>{
                if(arrItem.startsWith("https://mj.fary.chat")){
                    fileIndex++;
                    displayText=item.text.replace(arrItem,"");
                    files.push(<a href={arrItem} target="_blank" rel="noreferrer" >file {fileIndex}</a>);
                }
            })
        }
        if(fileIndex>0 && files.length){
            return <div className={classs}>{files.map(file=>file)}<pre style={{ maxWidth: 700, margin: 0, whiteSpace: 'break-spaces' }}>{displayText}</pre></div>
        }else{
            return <div className={classs}><pre style={{ maxWidth: 700, margin: 0, whiteSpace: 'break-spaces' }}>{item.text}</pre></div>
        }
    }if (item.content) {
        return renderSysChat4Content(item.content, classs);
    }if (item.messageContent) {
        return renderSysChat4MsgContent(item.messageContent, classs);
    }  else {
        return renderSysChat(item.choices, classs);
    }
}
 const renderSysChat4MsgContent=(content: any[], classs: string | undefined)=> {
    if (!content || !content.length) {
        return <div></div>
    }
    let list = getMessageByMessageContent(content);
    let i = 0;
    return <div className={classs}>{list.map((item) => {
        return (<div key={i++}>{item}
        </div>);
    })}</div>;
}
const renderSysChat4Content=(content: any[], classs: string | undefined)=> {
    if (!content || !content.length) {
        return <div></div>
    }
    let list = getMessageByContent(content);
    let i = 0;
    return <div className={classs}>{list.map((item) => {
        return (<div key={i++}>{item}
        </div>);
    })}</div>;
}

const renderSysChat=(choices: Ichoices[] | null | undefined, classs: string | undefined)=> {
    if (!choices || !choices.length) {
        return <div></div>
    }
    let list = getMessage(choices);
    let i = 0;
    return <div className={classs}>{list.map((item) => {
        return (<div key={i++}>{item}
        </div>);
    })}</div>;
}



const getMessageByMessageContent=(arr: any[])=> {
    let contents = arr.concat();
    let list = [];
    const width=isMobile?256:512;
    if (contents && contents.length > 0) {
        for (let i = 0; i < contents.length; i++) {
            const item=contents[i];
            if(item.type==="text"){
                list.push(<Markdown key={i} content={item.text}></Markdown>)
            }else if(item.type==="image_url"){
                list.push(<Image key={i}  width={width} height={width} src={item.image_url.url}></Image>)
            }
        }
    }
    return list;
}

const getMessageByContent=(arr: any[])=> {
    let contents = arr.concat();
    let list = [];
    const width=isMobile?256:512;
    if (contents && contents.length > 0) {
        for (let i = 0; i < contents.length; i++) {
            const item=contents[i];
            if(item.type==="text"){
                list.push(<Markdown key={i} content={item.text.value}></Markdown>)
            }else if(item.type==="image_file"){
                list.push(<Image  width={width} height={width}  key={i} src={item.image_file.url}></Image>)
            }
        }
    }
    return list;
}


const getMessage=(arr: any[])=> {
    let choices = arr.concat();
    let repList = [choices.pop()];
    let list = [];
    if (choices && repList.length > 0) {
        for (let i = 0; i < repList.length; i++) {
            let msg = repList[i].message.content;
            list.push(<Markdown key={i} content={msg}></Markdown>)
        }
    }
    return list;
}


const MessageList: React.FC<IProps> = observer(({ store, config }) => {

    const getMessageItem=()=> {
        const props = {
            store,
            config,
            renderMessage: (item: ISessiondata) => { return renderMessage(item) }
    
        }
        if (props.config.style === "chat") {
            return <MessageItemChat {...props} key={1}></MessageItemChat>
        } else if (props.config.style === "antd") {
            return <MessageItem2 {...props} key={2}></MessageItem2>
        }
    }

    return (<div className='message-list-wrapper' style={{ width: '100%', height: '100%', padding: 5, boxSizing: 'border-box' }}>
        {getMessageItem()}
    </div>)
    
});


export default MessageList
