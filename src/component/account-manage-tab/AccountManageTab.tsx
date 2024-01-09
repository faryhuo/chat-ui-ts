import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import QRCode from '../wx-qr-code/QRCode';
import appConfig from '../../store/AppConfig';

type IProps={
  loginForm:any;
  signUpForm:any;
}
const AccountManageTab:React.FC<IProps> = observer(({loginForm,signUpForm})=>{

    const {t} =useTranslation();
    const items: TabsProps['items'] = [
      appConfig.textLanguage==='zh'&& {
        key: '1',
        label: t("WeChat Login"),
        children:<QRCode/>  
      },
      {
        key: '2',
        label: t("Account Login"),
        children: loginForm,
      },
      {
        key: '3',
        label: t("Sign Up"),
        children: signUpForm,
      }
    ];

    return <Tabs defaultActiveKey="2" items={items}  centered  />
})

export default AccountManageTab;