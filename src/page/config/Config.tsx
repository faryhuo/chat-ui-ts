import React  from 'react';
import { observer } from "mobx-react"
import { Card,Collapse} from 'antd';
import {BaseConfigForm,ChatConfigForm,CodeEditConfigForm} from '../../component';
import { useTranslation } from 'react-i18next';
import "./Config.css";
import {IAppConfig} from '../../store/AppConfig';

type IProps={
  config:IAppConfig;
}
const ConfigPage:React.FC<IProps> = observer(({config})=>{

  const { Panel } = Collapse;
  const { t } = useTranslation();


    return (
      <div className="config-container" >
          <div className="config-left-content">
          
          </div>
          <div className="config-right-content">
          <Collapse>
            <Panel header={t("Base Configuration")} key="1">
            <Card>
              <BaseConfigForm config={config}></BaseConfigForm>
              </Card>
            </Panel>
            <Panel header={t("Chat API Configuration")} key="2">
              <Card>
              <ChatConfigForm config={config}></ChatConfigForm>
              </Card>
            </Panel>
            <Panel header={t("Code edits API Configuration")} key="3">
              <Card>
              <CodeEditConfigForm config={config}></CodeEditConfigForm>
              </Card>
            </Panel>
          </Collapse>
          </div>
    </div>
    );
});

export default ConfigPage;