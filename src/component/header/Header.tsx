import { AppstoreOutlined, MailOutlined, SettingOutlined,MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
import { Menu,Button,Avatar,Modal } from 'antd';
import { observer } from "mobx-react-lite";
import './Header.css';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import userProfile from '../../store/UserProfile';
import LoginForm from '../login-form/LoginForm';
import { Link } from 'react-router-dom';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
}

const Header: React.FC<IProps> = observer(({store,config}) => {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const items = [
    {
      label: <Link to="/chat">{t('Chat')}</Link>,
      key: 'chat',
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/image">{t('Image')}</Link>,
      key: 'image',
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/code">{t('Code')}</Link>,
      key: 'code',
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/image_edit">{t('Image Edit')}</Link>,
      key: 'image_edit',
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/tips">{t('Tips')}</Link>,
      key: 'tips',
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/config">{t('Config')}</Link>,
      key: 'config',
      icon: <SettingOutlined />,
    }
  ];


  const getItems = ()=>{
    return items.filter((item)=>{
      return userProfile.premission.includes(item.key);
    });
  }

  const onClick = (e: { key: string; }) => {
    store.changeType(e.key);
  };

  const login = (userId: string,password: string) => {
    userProfile.login(userId,password);
  };

  const handleCancel=()=>{
    setOpen(false);
  }

  const showModal = () => {
    setOpen(true);
  };

  const getUserName=()=>{
    if(!userProfile.isLogin){
      return t("Login")
    }else{
      return userProfile.currentUser;
    }
  }


  return (
  <div className="menu-header">
    <div className="action-list">
      {!store.hideMenuTypeList.includes(store.type) &&
      <Button
          icon={config.isSlowLeftMenu?<MenuFoldOutlined />:<MenuUnfoldOutlined />}
          onClick={()=>{config.triggerMenu()}}
        />}
    </div>
    <div className="menu-list">
      <Menu onClick={onClick} selectedKeys={[store.type]} mode="horizontal"
      items={getItems()} >
        </Menu>
    </div>
    <div className="login-user">
      <Avatar
          onClick={showModal}
          style={{
            backgroundColor: config.colorPrimary,
            verticalAlign: 'middle',
          }}
          size="large"
        >{getUserName()}</Avatar>
              <Modal
        open={open}
        title={t("Login")}
        onCancel={handleCancel}
        footer={false}
      >
        <LoginForm  login={login} handleCancel={handleCancel}></LoginForm>
      </Modal>
    </div>
  </div>
  );
});
export default Header;