import React from 'react';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";

type IProps={
  loginForm:any;
  signUpForm:any;
}
const AccountManageTab:React.FC<IProps> = observer(({loginForm,signUpForm})=>{

    const {t} =useTranslation();
    const items: TabsProps['items'] = [
      {
        key: '1',
        label: t("Login"),
        children: loginForm,
      },
      {
        key: '2',
        label: t("Sign Up"),
        children: signUpForm,
      }
    ];

    return <Tabs defaultActiveKey="1" items={items}  centered/>
})

export default AccountManageTab;