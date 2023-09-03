import { useState } from 'react';
import {  Badge, List, Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import noticeData from '../../store/NoticeData';
import { formatShortDate } from '../../utils/dateUtils';
import './Notice.css'
type IProps = {
}
const Notice: React.FC<IProps> = observer(() => {

  const [open, setOpen] = useState(false);


  const getAvatorByType = (type: string) => {
    const icon = type === "success" ? faCircleCheck : faCircleExclamation;
    return <FontAwesomeIcon
      className={type === "success" ? "success-item" : "error-item"}
      icon={icon} size={'2xl'}></FontAwesomeIcon>
  }


  const content = (
    <div className="notice-messages">
      <List dataSource={noticeData.messages.slice().reverse()} renderItem={(message, index) => {
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