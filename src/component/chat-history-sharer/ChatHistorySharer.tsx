import { Button  } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faShare } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {ISessiondata} from '../../store/MessageData';
import "./ChatHistorySharer.css";
import ChatHistorySharerPage from "../chat-history-sharer-page/ChatHistorySharerPage";
import saveAs from 'file-saver';
import { useRef } from 'react';

type IProps={
  data:ISessiondata[];
  selects:number[];
}

const ChatHistorySharer:React.FC<IProps> = observer(({data,selects})=>{

  const {t} = useTranslation();
  const pageRef:any =useRef(null);

  const download=()=>{
    import('html-to-image').then(({toJpeg})=>{
      const node=document.getElementById("sharer-review-page-content");
      if(node){
        toJpeg(node, { quality: 0.95}).then((blob)=>{
            saveAs(blob, 'chat.jpeg')
        })
      }
    })
  }

  return (<div className="sharer-review-page">
    <div className="sharer-action-btn">
      <Button onClick={download} icon={<FontAwesomeIcon icon={faDownload}/>}>{t('Download')}</Button>
      <Button icon={<FontAwesomeIcon icon={faShare}/>}>{t('Share Line')}</Button>
    </div>
    <div className="sharer-review-content" ref={pageRef}>
      <ChatHistorySharerPage data={data.filter((value,index)=>{
        return selects.includes(index);
      })}></ChatHistorySharerPage>
    </div>
  </div>)
})


export default ChatHistorySharer;