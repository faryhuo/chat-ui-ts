import React from 'react';
import {Button} from 'antd';
import './NewChat.css';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import RoleConfigPage from '../role-config/RoleConfig';
import { useTranslation } from 'react-i18next';

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const NewChat: React.FC<IProps> = ({store,config})=>{

  const addChat=()=>{
    store.changeType("chat");
    store.addChat();
    window.location.hash="#/chat"
  }

  const {t} = useTranslation();

    return (
    <div className="new-chat-page">

      <div  className="new-chat-title">
        <h1>{t<string>('Choose a conversation style and role to start')}</h1>
      </div>

        <div className="just-start">
          <Button onClick={addChat} type="primary" size="large">{t<string>('Just Start')}</Button>
        </div>
        <div className="role-list">
          <RoleConfigPage config={config} store={store}></RoleConfigPage>
        </div>
    </div>)
}

export default NewChat;