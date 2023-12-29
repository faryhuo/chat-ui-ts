import { observer } from "mobx-react-lite";
import { ISessiondata, Ichoices } from '../../store/MessageData';
import "./ChatHistorySharerPage.css";
import MessageItem from "../message-item/MessageItem";
import Markdown from "../markdown/Markdown";
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import chatConfig, { IChatAPIConfig } from "../../store/ChatConfig";
import apiSetting from "../../store/APISetting";
import config from "../../store/AppConfig";
import classNames from "classnames";
import { Image } from 'antd';

type IProps = {
  data: ISessiondata[];
  topic: string;
  time: Date;
  chatApiConfig?: IChatAPIConfig;
}

const ChatHistorySharer: React.FC<IProps> = observer(({ data, topic, time }) => {

  const { t } = useTranslation();

 
  const renderMessage=(item: ISessiondata)=> {
    const classs = classNames({ "chat-row": true, "chat-row-hide": item?.isDetails === false && item?.hasShowDetails === true });
    if (item.text) {
        return <div className={classs}><pre style={{ maxWidth: 700, margin: 0, whiteSpace: 'break-spaces' }}>{item.text}</pre>
        </div>
    }if (item.content) {
        return renderSysChat4Content(item.content, classs);
    }if (item.messageContent) {
        return renderSysChat4MsgContent(item.messageContent, classs);
    }  else {
        return renderSysChat(item.choices, classs);
    }
}

const getMessageByMessageContent=(arr: any[])=> {
  let contents = arr.concat();
  let list = [];
  const width=config.isMobile?256:512;
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
const  renderSysChat4MsgContent=(content: any[], classs: string | undefined)=> {
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
const getMessageByContent=(arr: any[])=> {
  let contents = arr.concat();
  let list = [];
  const width=config.isMobile?256:512;
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

  return (<div className="sharer-review-page-content" id="sharer-review-page-content">
    <div className="sharer-review-page-summary">
      <div className="sharer-summary">
        <div className="sharer-summary-web-info">
          <h2 style={{ margin: 5 }}>ChatGPT Web</h2>
          <span style={{ margin: 10 }}>
            Url : <a href={apiSetting.host}style={{ color: '#fff' }}>fary.chat</a></span>
        </div>
        <div className="sharer-summary-params">
          <table>
            <tbody>
              {/* {chatConfig.apiConfig && <tr><td>{t('Model')} : </td><td> {chatConfig.apiConfig.model}</td></tr>} */}
              <tr><td>{t('count')} : </td><td> {data.length}</td></tr>
              <tr><td>{t('topic')} : </td><td> {topic}</td></tr>
              <tr><td>{t('time')} : </td><td> {dayjs(time).format("DD/MM/YYYY")}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="sharer-review-page-message message-list-wrapper">
      {data.map((item, key) => {
        return item.isSys ? (<MessageItem index={key} item={item} type={"system"} key={key}
          content={renderMessage(item)}></MessageItem>) :
          (<MessageItem type={"user"} key={key} index={key} readonly={true}
            content={item.text}></MessageItem>)
      })}
    </div>
  </div>)
})


export default ChatHistorySharer;