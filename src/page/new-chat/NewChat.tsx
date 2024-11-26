import React, { useEffect, useState } from 'react';
import { Button, Modal, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './NewChat.less';
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import RoleConfigPage from '../role-config/RoleConfig';
import ModelSelector from '../../component/model-selector/ModelSelector';
import ModelDesc from '../../component/model-description/ModelDesc';
import Loading from '../../component/loading/Loading';
import chatConfig from '../../store/ChatConfig';
import roleData from '../../store/RoleData';
import loadingObj from '../../store/Loading';
import GPTs from '../gpts/gpts';

interface IProps {
  config: IAppConfig;
  store: IMessage;
}

const NewChat: React.FC<IProps> = ({ store, config }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isGPTsOpen, setIsGPTsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "AI Chat";
  }, []);

  const handleAddChat = async () => {
    store.changeType("chat");
    const chatId = await store.addChat();
    navigate(`/chat/${chatId}`);
  };

  const handleModelChange = (value: string) => {
    chatConfig.changeModel(value);
  };

  const questionButton = (
    <Button
      shape="circle"
      onClick={() => setModalOpen(true)}
      style={{ backgroundColor: "#f0f0f0", marginLeft: 10 }}
      size="small"
      icon={<FontAwesomeIcon icon={faQuestion} />}
    />
  );

  return (
    <div className="new-chat-page">
      <div className="new-chat-title">
        <h1>{t('Choose a conversation style and role to start')}</h1>
      </div>

      <div className="new-chat-model">
        <div className="label-wrapper">{t("Model")} : </div>
        <div className="input-wrapper">
          <ModelSelector 
            store={store} 
            value={chatConfig.apiConfig.model}
            onChange={handleModelChange}
          />
          {questionButton}
          
          <Modal 
            title="Model Description" 
            open={isModalOpen}
            onCancel={() => setModalOpen(false)}
            footer={false}
          >
            {chatConfig.enableSpeciousModel && <ModelDesc />}
          </Modal>
        </div>
      </div>

      <div className="just-start">
        <Button onClick={handleAddChat} type="primary" size="large">
          {t('Just Start')}
        </Button>
        {chatConfig.enableSpeciousModel && (
          <Button onClick={() => setIsGPTsOpen(true)} size="large">
            {t('GPTs')}
          </Button>
        )}
      </div>

      <div className="role-list">
        <Spin spinning={roleData.loading} size='large'>
          <RoleConfigPage 
            all={true} 
            readonly={true} 
            config={config} 
            store={store}
          />
        </Spin>
      </div>

      {loadingObj.loading && <Loading />}

      <Modal
        open={isGPTsOpen}
        width={window.innerWidth}
        title="选择一个GPTs"
        onCancel={() => setIsGPTsOpen(false)}
        footer={false}
      >
        <GPTs />
      </Modal>
    </div>
  );
};

export default observer(NewChat);