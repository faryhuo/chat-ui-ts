import React from 'react';
import { observer } from "mobx-react";
import {RoleList} from '../../component';
import "./RoleConfig.css";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
  readonly?:boolean
}


const RoleConfig:React.FC<IProps> = observer(({config,store,readonly})=>{
  return (
  <div className="role-config-page">
    <RoleList readonly={!!readonly} config={config} store={store}></RoleList>
  </div>)
});

export default RoleConfig;