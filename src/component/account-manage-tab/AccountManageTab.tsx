import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import QRCode from '../wx-qr-code/QRCode';

type IProps={
  loginForm:any;
  signUpForm:any;
}
const AccountManageTab:React.FC<IProps> = observer(({loginForm,signUpForm})=>{

    const {t} =useTranslation();
    const items: TabsProps['items'] = [
      {
        key: '1',
        label: t<string>("WeChat Login"),
        children:<QRCode/>  
      },
      {
        key: '2',
        label: t<string>("Account Login"),
        children: loginForm,
      },
      {
        key: '3',
        label: t<string>("Sign Up"),
        children: signUpForm,
      }
    ];

    return <Tabs defaultActiveKey="2" items={items}  centered  />
})

export default AccountManageTab;