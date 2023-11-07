import React, { useEffect } from 'react';
import { observer } from "mobx-react"
import { Card,Collapse} from 'antd';
import {BaseConfigForm,ChatConfigForm,ConfigActionBtn} from '../../component';
import { useTranslation } from 'react-i18next';
import "./Config.css";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import { useParams } from 'react-router-dom';
import RoleConfigPage from '../role-config/RoleConfig';
type IProps={
  config:IAppConfig;
  store:IMessage;
}

const ConfigPage:React.FC<IProps> = observer(({config,store})=>{

  const { Panel } = Collapse;
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Setting";
  },[]);
  
  const {id}=useParams();
    return (
      <div className="config-container" >
          <div className="config-left-content">
          
          </div>
          <div className="config-right-content">
          <Collapse defaultActiveKey={id}>
            <Panel header={t<string>("Base Configuration")} key="1">
            <Card>
              <BaseConfigForm config={config}></BaseConfigForm>
              </Card>
            </Panel>
            <Panel header={t<string>("Chat API Configuration")} key="2">
              <Card>
              <ChatConfigForm config={config}></ChatConfigForm>
              </Card>
            </Panel>
            <Panel header={t<string>("Roles management")} key="4">
              <RoleConfigPage readonly={false}  config={config} store={store}></RoleConfigPage>
            </Panel>
            <div>
              <ConfigActionBtn store={store}></ConfigActionBtn>
            </div>
          </Collapse>
          </div>
    </div>
    );
});

export default ConfigPage;