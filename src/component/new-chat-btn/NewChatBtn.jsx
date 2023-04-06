import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { AppstoreOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";

const NewChatBtn = observer(({store})=>{

    const {t} =useTranslation();

    return (<div>           
    <Button type="primary" shape="round" icon={<AppstoreOutlined />} size="large" 
    onClick={()=>{store.addChat()}}>{t('New Chat')}</Button></div>)
})

export default NewChatBtn;