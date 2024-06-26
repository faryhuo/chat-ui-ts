import React, { useEffect } from 'react';
import {Button, Modal, Spin} from 'antd';
import './NewChat.css';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import RoleConfigPage from '../role-config/RoleConfig';
import { useTranslation } from 'react-i18next';
import ModelSelector from '../../component/model-selector/ModelSelector';
import chatConfig from '../../store/ChatConfig';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import ModelDesc from '../../component/model-description/ModelDesc';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../component/loading/Loading';
import roleData from '../../store/RoleData';
import loadingObj from '../../store/Loading';
import GPTs from '../gpts/gpts';
type IProps={
  config:IAppConfig;
  store:IMessage;
}

const NewChat: React.FC<IProps> = ({store,config})=>{


  const [isModalOpen,setModalOpen]= useState(false);
  const [isGPTsOpen,setIsGPTsOpen]= useState(false);

  const navigate = useNavigate(); // 获取 navigate 函数

  const questionBtn = (<Button
    shape="circle"
    onClick={()=>setModalOpen(true)}
    style={{ backgroundColor: "#f0f0f0", marginLeft: 10 }}
    size="small" icon={<FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>}></Button>);

  useEffect(() => {
    document.title = "AI Chat";
  }, []);


  const addChat=()=>{
    store.changeType("chat");
    store.addChat().then((chatId)=>{
      navigate(`/chat/${chatId}`);
  });
  }
  const addRole=()=>{
    navigate("/config/4");
  }


  const showGPTs=()=>{
    setIsGPTsOpen(true);
  }
  const {t} = useTranslation();

    return (
    <div className="new-chat-page">

      <div  className="new-chat-title">
        <h1>{t('Choose a conversation style and role to start')}</h1>
      </div>
      <div className="new-chat-model">
        <div className="label-wrapper">{t("Model")} : </div>
        <div className="input-wrapper">
        <ModelSelector store={store} value={chatConfig.apiConfig.model}
        onChange={(e)=>chatConfig.changeModel(e)}></ModelSelector>

      {questionBtn}   
      <Modal title="Model Description" open={isModalOpen} 
      onCancel={()=>setModalOpen(false)}
      footer={false}>
        {chatConfig.enableSpeciousModel && <ModelDesc/>}
      </Modal>
        </div>
      </div>
        <div className="just-start">
          <Button onClick={addChat} type="primary"   size="large">{t('Just Start')}</Button>
          {chatConfig.enableSpeciousModel && <Button onClick={showGPTs} size="large">{t('GPTs')}</Button>}
          {/* <Button onClick={addRole} size="large">{t('Go to Role Management')}</Button> */}
        </div>
        <div className="role-list">
          <Spin spinning={roleData.loading} size='large'>
          <RoleConfigPage all={true} readonly={true} config={config} store={store}></RoleConfigPage>
          </Spin>
        </div>
        {loadingObj.loading && <Loading></Loading>}
        <Modal open={isGPTsOpen}  width={window.innerWidth}
        title={"选择一个GPTs"} 
              onCancel={()=>setIsGPTsOpen(false)}
              footer={false}>
          <GPTs></GPTs>
        </Modal>
    </div>)
}

export default observer(NewChat);