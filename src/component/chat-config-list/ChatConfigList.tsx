import React from 'react';
import { Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IAppConfig} from '../../store/AppConfig';
import ChatConfigSimpleForm from '../chat-config-simple-form/ChatConfigSimpleForm'
type IProps={
  config:IAppConfig;
  open:boolean;
  onClose:()=>void;
}
const ChatConfigList:React.FC<IProps> = observer(({config,open,onClose})=>{

    const {t} =useTranslation();

    return (<div>           
          <Drawer
        title={t("API configuration")}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <ChatConfigSimpleForm config={config} onClose={onClose}></ChatConfigSimpleForm>
      </Drawer></div>)
})

export default ChatConfigList;