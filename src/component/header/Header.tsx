import { Menu,Button,Avatar,Modal, Dropdown,message} from 'antd';
import { observer } from "mobx-react-lite";
import './Header.css';
import { useTranslation } from 'react-i18next';
import React  from 'react';
import userProfile from '../../store/UserProfile';
import Account from '../../page/account-manager/Account';
import { Link, useNavigate } from 'react-router-dom';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,faGear,faOutdent, faLinesLeaning,faImages,faPerson,faSignOut,faBook } from '@fortawesome/free-solid-svg-icons'
import userProflie from '../../store/UserProfile';
import Notice from '../notice/Notice';

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const Header: React.FC<IProps> = observer(({store,config}) => {

  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate(); // 获取 navigate 函数

  const items = [
    {
      label: <Link to="/chat">{t('Chat')}</Link>,
      key: 'chat',
      icon: <FontAwesomeIcon icon={faComments} />
    },
    {
      label: <Link to="/knowledge">{t('Knowledge Repo')}</Link>,
      key: 'knowledge',
      icon: <FontAwesomeIcon icon={faBook} />
    },
    {
      label: <Link to="/image">{t('Image')}</Link>,
      key: 'image',
      icon: <FontAwesomeIcon icon={faImages} />
    },
    // {
    //   label: <Link to="/painting_square">{t('Painting Square')}</Link>,
    //   key: 'painting_square',
    //   icon: <FontAwesomeIcon icon={faImages} />
    // },
    // {
    //   label: <Link to="/creation">{t('Creation')}</Link>,
    //   key: 'creation',
    //   icon: <FontAwesomeIcon icon={faImages} />
    // },
    // {
    //   label: <Link to="/code">{t('Code')}</Link>,
    //   key: 'code',
    //   icon: <FontAwesomeIcon icon={faLaptopCode} />,
    // },
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
    config.setCurrentPath(e.key);
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
    return userProfile.currentUser;
  }

  const successLogout = () => {
    userProflie.logout();
    messageApi.open({
      type: 'success',
      content: t('Logout success'),
    });
  };

  const goToPersonPage = () => {
    navigate("/person");
  };

  const getButtonList=()=>{
    return [
      {
        key: '1',
        label: (  <Button  style={{width:120}}
          icon={<FontAwesomeIcon icon={faPerson} />} 
          onClick={goToPersonPage}
        >&nbsp;{t('Information')}</Button>),
      },
      {
        key: '2',
        label: (<Button style={{width:120}}
          icon={<FontAwesomeIcon icon={faSignOut} />} 
          onClick={successLogout}
          >&nbsp;{t('Logout')}</Button>),
      }]
  }


  return (
  <div className="menu-header">
    <div className="action-list">
      {config.currentPath==="chat" &&
      <Button
          icon={config.isSlowLeftMenu?<FontAwesomeIcon icon={faOutdent} />:<FontAwesomeIcon rotation={180} icon={faOutdent}  />}
          onClick={()=>{config.triggerMenu()}}
        />}
    </div>
    <div className="menu-list">
      <Menu onClick={onClick} selectedKeys={[config.currentPath]} mode="horizontal"
      items={getItems()} >
        </Menu>
    </div>
    <div className="feedback">
      <Link to="/feedback"><FontAwesomeIcon icon={faComments} />{t('Feedback')}</Link>
    </div>
    <div className="notices">
      <Notice></Notice>
    </div>
    <div className="login-user">
      {userProflie.isLogin?(
       <Dropdown trigger={['click']} menu={{ items:getButtonList()}} placement="bottomLeft">
       <Avatar
          style={{
            backgroundColor: config.colorPrimary,
            verticalAlign: 'middle',
          }}
          shape="square"
          size="large"
        >{getUserName()}</Avatar>
     </Dropdown>  
      ):(<Avatar
          onClick={showModal}
          style={{
            backgroundColor: config.colorPrimary,
            verticalAlign: 'middle',
          }}
          shape="square"
          size="large"
        >{getUserName()}</Avatar>)}

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
      {contextHolder}
    </div>
  </div>
  );
});
export default Header;