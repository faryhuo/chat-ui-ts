import React from 'react';
import { observer } from "mobx-react";
import { useTranslation } from 'react-i18next';
import { Card,Button} from 'antd';
import {RoleList} from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
import "./RoleConfig.css";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
}


const RoleConfig:React.FC<IProps> = observer(({config,store})=>{
  const addRole=()=>{}
  const {t} =useTranslation();
  return (
  <div className="role-config-page">
    <RoleList config={config} store={store}></RoleList>
    <div>
          <Button onClick={addRole}  icon={<FontAwesomeIcon icon={faAdd} />} type="primary">
            &nbsp;{t("Add Role")}
          </Button>
    </div>
  </div>)
});

export default RoleConfig;