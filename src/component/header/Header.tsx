import { Menu,Button,Avatar,Modal } from 'antd';
import { observer } from "mobx-react-lite";
import './Header.css';
import { useTranslation } from 'react-i18next';
import React  from 'react';
import userProfile from '../../store/UserProfile';
import Account from '../../page/account-manager/Account';
import { Link } from 'react-router-dom';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,faLaptopCode,faGear,faOutdent, faLinesLeaning,faImages } from '@fortawesome/free-solid-svg-icons'

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const Header: React.FC<IProps> = observer(({store,config}) => {

  const { t } = useTranslation();

  const items = [
    {
      label: <Link to="/chat">{t('Chat')}</Link>,
      key: 'chat',
      icon: <FontAwesomeIcon icon={faComments} />
    },
    // {
    //   label: <Link to="/sd">{t('Stable Diffusion')}</Link>,
    //   key: 'sd',
    //   icon: <FontAwesomeIcon icon={faImages} />
    // },
    {
      label: <Link to="/image">{t('Image')}</Link>,
      key: 'image',
      icon: <FontAwesomeIcon icon={faImages} />
    },
    {
      label: <Link to="/code">{t('Code')}</Link>,
      key: 'code',
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    // {
    //   label: <Link to="/image_edit">{t('Image Edit')}</Link>,
    //   key: 'image_edit',
    //   icon: <FontAwesomeIcon icon={faPhotoFilm} />,
    // },
    {
      label: <Link to="/tips">{t('Tips')}</Link>,
      key: 'tips',
      icon: <FontAwesomeIcon icon={faLinesLeaning} />
    },
    {
      label: <Link to="/config/1">{t('Config')}</Link>,
      key: 'config',
      icon: <FontAwesomeIcon icon={faGear} />
    }
  ];


  const getItems = ()=>{
    return items;
  }

  const onClick = (e: { key: string; }) => {
    store.changeType(e.key);
  };

  const login = (userId: string,password: string) => {
    return userProfile.login(userId,password)
  };

  const handleCancel=()=>{
    userProfile.closePage();
  }

  const showModal = () => {
    userProfile.openPage();
  };

  const getUserName=()=>{
    if(!userProfile.isLogin){
      return t<string>("Login")
    }else{
      return userProfile.currentUser;
    }
  }


  return (
  <div className="menu-header">
    <div className="action-list">
      {!config.hideMenuTypeList.includes(store.type) &&
      <Button
          icon={config.isSlowLeftMenu?<FontAwesomeIcon icon={faOutdent} />:<FontAwesomeIcon rotation={180} icon={faOutdent}  />}
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
        open={userProfile.pageOpen}
        title={false}
        onCancel={handleCancel}
        footer={false}
        width={400}
        destroyOnClose={true}
      >
        <Account config={config} store={store} userProfile={userProfile}  login={login} handleCancel={handleCancel}></Account>
      </Modal>
    </div>
  </div>
  );
});
export default Header;