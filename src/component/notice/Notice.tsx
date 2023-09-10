import { useState } from 'react';
import {  Badge, Button, List, Popover, Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import noticeData, { INoticeMessage } from '../../store/NoticeData';
import { formatShortDate } from '../../utils/dateUtils';
import './Notice.css'
import { useTranslation } from 'react-i18next';
type IProps = {
}
const Notice: React.FC<IProps> = observer(() => {

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const [type, setType] = useState("success");

  const getAvatorByType = (type: string) => {
    const icon = type === "success" ? faCircleCheck : faCircleExclamation;
    return <FontAwesomeIcon
      className={type === "success" ? "success-item" : "error-item"}
      icon={icon} size={'2xl'}></FontAwesomeIcon>
  }


  const getDataSource=():INoticeMessage[]=>{
    return noticeData.messages.slice().reverse().filter(message=>message.type===type)
  }

  const content = (
    <div className="notice-messages">
      <Tabs
      onChange={(e)=>setType(e)}
      type="card"
      items={[{
        label:<Badge size="small" count={noticeData.messages.filter(message=>message.type==='success' && !message.isRead).length}><span style={{padding:5}}>{t("Message")}</span></Badge>,
        key:"success"
      },{
        label: <Badge size="small" count={noticeData.messages.filter(message=>message.type==='error' && !message.isRead).length}><span style={{padding:5}}>{t("Error message")}</span></Badge>,
        key:"error"
      }]}
    />
    <div className="notice-list-content">
    <List dataSource={getDataSource()} renderItem={(message, index) => {
        return (<List.Item className={"message-item"+ (message.isRead?" message-read":"")} key={index}
        onMouseMove={()=>{noticeData.read(index)}}
        >
          <List.Item.Meta
            avatar={getAvatorByType(message.type)}
          />
          <div className="content">
            <div className="message-content">{message.content}</div>
            <div className="message-date">{formatShortDate(message.date)}</div>
          </div>
        </List.Item>)
      }}>
      </List>
    </div> 
    <div className="action-btn-list">
      <Button onClick={() => { noticeData.readAll() }}>
        &nbsp;{t('Read all')}</Button>
        <Button onClick={() => { noticeData.clearAll() }}>
        &nbsp;{t('Clear all')}</Button>
      </div>
    </div>
  )

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (<div className="notices-wrapper">
    <Popover placement="bottom" title={false} content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}>
      <Badge size="default" count={noticeData.count}>
        <FontAwesomeIcon icon={faEnvelope} size={'xl'} />
      </Badge>
    </Popover>
  </div>)
})

export default Notice;