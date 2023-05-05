import React from 'react';
import { Button,Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage, ISessiondata} from '../../store/MessageData';
import './MsgActionBtn.css';
type IProps={
  store:IMessage;
  item:ISessiondata;
}
const MsgActionBtn:React.FC<IProps> = observer(({store,item})=>{

    const {t} =useTranslation();


    const isSlowRegenerateBtn=()=>{
     return (store.data.indexOf(item)===store.data.length-1) && item.isDefault!==true && (item.stream?item.end:true )
    }

    return (
      <div className="msg-action-btn">
      <div className="msg-page-btn">
      {(store.hasHistory(item.history))?<Pagination 
      hideOnSinglePage
      size="small" total={item?.history?.length} pageSize={1} 
      style={{marginBottom:5}}
      current={(item.currentIndex?item.currentIndex:0)+1} onChange={(page)=>{store.changeMessage(store.data.length-1,page-1)}}/>
      :<></>}</div><div className="msg-sent-btn">
      <Button onClick={store.regenerateResponse}
      style={isSlowRegenerateBtn()?{}:{display:'none'}} icon={<FontAwesomeIcon icon={faRefresh} style={{marginRight:5}}></FontAwesomeIcon>}>
        {t('Regenerate')}</Button></div>
      </div>);
})

export default MsgActionBtn;