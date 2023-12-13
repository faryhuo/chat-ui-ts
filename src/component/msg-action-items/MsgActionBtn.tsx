import React, { useState } from 'react';
import { Button, Pagination, Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDeleteLeft, faPlay, faRefresh, faStop } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { IMessage, ISessiondata, getMessageFromContent } from '../../store/MessageData';
import './MsgActionBtn.css';
import { isMobile } from 'react-device-detect';
type IProps = {
  store: IMessage;
  item: ISessiondata;
}
const MsgActionBtn: React.FC<IProps> = observer(({ store, item }) => {

  const isSlowRegenerateBtn = () => {
    return (store.data.indexOf(item) === store.data.length - 1) && item.isDefault !== true && (item.stream ? item.end : true)
  }


  return (
    <>
    {isSlowRegenerateBtn() && <div className="message-item-action-buttons" >
      <Button shape='circle'
      onClick={store.regenerateResponse} icon={<FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>}></Button>
      <Button shape='circle' icon={<FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>}></Button>
      <Button shape='circle' icon={<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>}></Button>
      <Button shape='circle' icon={<FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>}></Button>
  </div>}
  </>
  );
})

export default MsgActionBtn;