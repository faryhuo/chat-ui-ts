import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import { useNavigate } from 'react-router-dom';
type IProps={
  store:IMessage;
}
const NewChatBtn:React.FC<IProps> = observer(({store})=>{

    const {t} =useTranslation();
    const navigate = useNavigate();
    return (<div>           
    <Button type="primary" shape="round" icon={<FontAwesomeIcon icon={faBroom} size="lg" />} size="large" 
    onClick={()=>{store.newChat(navigate)}}>{t('New Chat')}</Button></div>)
})

export default NewChatBtn;