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
  index:number;
}
const MsgActionBtn:React.FC<IProps> = observer(({store,item,index})=>{

    const {t} =useTranslation();


    const isSlowRegenerateBtn=()=>{
     return (store.data.indexOf(item)===store.data.length-1) && item.isDefault!==true && (item.stream?item.end:true )
    }

    const showDetails=()=>{
      item.isDetails=!!!item.isDetails;
    }

    return (
      <div className="msg-action-btn">
      {/* {<div className="msg-show-btn">
        <Button type="link" block onClick={showDetails}>
        {item.isDetails===false?t('Show'):t<string>("Hide")}
      </Button>
      </div>} */}
      <div className="msg-page-btn">
      {(store.hasHistory(item.history))?<Pagination 
      hideOnSinglePage
      size="small" total={item?.history?.length} pageSize={1} 
      style={{marginBottom:5}}
      current={(item.currentIndex?item.currentIndex:0)+1} onChange={(page)=>{store.changeMessage(index,page-1)}}/>
      :<></>}</div><div className="msg-sent-btn">
      {isSlowRegenerateBtn()?<Button onClick={store.regenerateResponse}
       icon={<FontAwesomeIcon icon={faRefresh} style={{marginRight:5}}></FontAwesomeIcon>}>
        {t('Regenerate')}</Button>:<Button style={item.hasShowDetails===true?{}:{"display":"none"}} type="link" className="msg-link-btn"  onClick={showDetails}>
        {item.isDetails===false?t('Show All'):t<string>("Hide")}
        </Button>}
        </div>
      </div>);
})

export default MsgActionBtn;