import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs,QRCode } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";

type IProps={
  loginForm:any;
  signUpForm:any;
  url:string;
}
const AccountManageTab:React.FC<IProps> = observer(({url,loginForm,signUpForm})=>{

    const {t} =useTranslation();
    const items: TabsProps['items'] = [
      // {
      //   key: '1',
      //   label: t("WeChat Login"),
      //   children:<QRCode value={url || '-'} />        
      // },
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

    return <Tabs defaultActiveKey="2" items={items}  centered/>
})

export default AccountManageTab;