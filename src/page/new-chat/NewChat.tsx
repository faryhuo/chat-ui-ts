import React, { useEffect } from 'react';
import {Button} from 'antd';
import './NewChat.css';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import RoleConfigPage from '../role-config/RoleConfig';
import { useTranslation } from 'react-i18next';
import ModelSelector from '../../component/model-selector/ModelSelector';
import chatConfig from '../../store/ChatConfig';
import { observer } from 'mobx-react-lite';

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const NewChat: React.FC<IProps> = ({store,config})=>{

  const addChat=()=>{
    store.changeType("chat");
    const chatId=store.addChat();
    window.location.hash=`#/chat/${chatId}`;
  }

  useEffect(() => {
    document.title = "AI Chat";
  }, []);


  const addRole=()=>{
    window.location.hash="/config/4";
  }
  const {t} = useTranslation();

    return (
    <div className="new-chat-page">

      <div  className="new-chat-title">
        <h1>{t<string>('Choose a conversation style and role to start')}</h1>
      </div>
      <div className="new-chat-model">
        <div className="label-wrapper">{t("Model")} : </div>
        <div className="input-wrapper">
        <ModelSelector store={store} value={chatConfig.apiConfig.model}
        onChange={(e)=>chatConfig.changeModel(e)}></ModelSelector>
        </div>
      </div>
        <div className="just-start">
          <Button onClick={addChat} type="primary"   size="large">{t<string>('Just Start')}</Button>
          <Button onClick={addRole} size="large">{t<string>('Go to Role Management')}</Button>
        </div>
        <div className="role-list">
          <RoleConfigPage readonly={true} config={config} store={store}></RoleConfigPage>
        </div>
    </div>)
}

export default observer(NewChat);