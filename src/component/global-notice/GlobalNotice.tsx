import React, { useEffect, useState } from 'react';
import { Card, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import apiSetting from '../../store/APISetting';
import dayjs from 'dayjs';
import Markdown from '../markdown/Markdown';
type IProps={
}
const GlobalNotice:React.FC<IProps> = observer(()=>{

    const {t} =useTranslation();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("Message");
    const [content, setContent] = useState("Message");

    const handleCancel= ()=>{
      setOpen(false);
    }
    const handleOk= ()=>{
      setOpen(false);    
      const dateStr=dayjs(new Date()).add(3,'day').format('YYYY-MM-DD');
      localStorage.setItem("notice",JSON.stringify({
        enable:true,
        date:dateStr
      }));
    }

    const getNoticeMsg=async ()=>{
      const data=await fetch(apiSetting.noticeUrl).then(
        res=>res.json()).then(res=>res.data); 
      if(data.enable){
        setOpen(true);
        setTitle(data.title);
        setContent(data.content);
      }else{
        setOpen(false);
      }
    }

    useEffect(()=>{
      if(localStorage.getItem("notice")){
        try{
          const notice= localStorage.getItem("notice");
          const obj=JSON.parse(notice);
          if(obj.enable && dayjs(new Date()).isBefore(dayjs(obj.date,"YYYY-MM-DD"))){
            setOpen(false);
          }else{
            localStorage.removeItem("notice");
          }
        }catch(e){
          localStorage.removeItem("notice");
          getNoticeMsg();
        }
      }else{
        getNoticeMsg();
      }
    },[])
    
    return (<div className='global-notice'>           
        <Modal
        title={t(title)}
        centered
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText={t('Close')}
        okText={t('No longer displayed within 3 days')}
        destroyOnClose={true}
      >
        <Card>
          <Markdown content={content}></Markdown>
        </Card>
      </Modal>
    </div>)
})

export default GlobalNotice;