import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import { Card, Collapse } from 'antd';
import { BaseConfigForm, ChatConfigForm, ConfigActionBtn } from '../../component';
import { useTranslation } from 'react-i18next';
import "./Config.css";
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import { useParams } from 'react-router-dom';
import RoleConfigPage from '../role-config/RoleConfig';
type IProps = {
  config: IAppConfig;
  store: IMessage;
}

const ConfigPage: React.FC<IProps> = observer(({ config, store }) => {

  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Setting";
  }, []);

  const pageItems=[
    {
      key: '1',
      label: t("Base Configuration"),
      children: <Card>
        <BaseConfigForm config={config}></BaseConfigForm>
      </Card>
    },
    {
      key: '2',
      label: t("Chat Model Setting"),
      children: <Card>
        <ChatConfigForm config={config}></ChatConfigForm></Card>
    },
    {
      key: '4',
      label: t("Roles management"),
      children: <RoleConfigPage all={false} readonly={false} config={config} store={store}></RoleConfigPage>
    }
  ]

  const { id } = useParams();
  return (
    <div className="config-container" >
      <div className="config-left-content">

      </div>
      <div className="config-right-content">
        <Collapse defaultActiveKey={id} items={pageItems}>
        </Collapse>
        <div>
          <ConfigActionBtn store={store}></ConfigActionBtn>
        </div>
      </div>
    </div>
  );
});

export default ConfigPage;