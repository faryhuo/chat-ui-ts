import React from 'react';
import { Button,Card,Space,Popconfirm,Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash,faLightbulb,faStar} from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import roleData,{IRole} from "../../store/RoleData";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import './RoleListItem.css'
import userProfile from '../../store/UserProfile';


type IProps={
  role:IRole;
  config:IAppConfig;
  store:IMessage;
  edit:(role:IRole)=>void;
  readonly:boolean
}
const RoleList:React.FC<IProps> = observer(({config,role,store,edit,readonly})=>{

    const {t} =useTranslation();

    const useRole=(role:IRole)=>{
      const chatId=store.addChatWithRole(role);
      window.location.hash=`#/chat/${chatId}`;
    }

    const onDelete=(roleId: number)=>{
      if(!userProfile.isLogin){
        userProfile.openPage();
        return;
      }
      roleData.deleteRole(roleId);
    }


    const buttonStyle={
      width:"100%",
      fontSize:"16px"
    }

  const actionButtons = [
    <Button icon={<FontAwesomeIcon icon={faLightbulb} />}
      style={buttonStyle} type="link" onClick={() => { useRole(role); } }>
      &nbsp;{t('Use')}</Button>,
    <Button icon={<FontAwesomeIcon icon={faEdit} />}
      onClick={() => { edit(role); } }
      style={buttonStyle} type="link">&nbsp;{t('Edit')}</Button>,
  ];

  const headerBtn = <div>
    <Button shape="circle" icon={<FontAwesomeIcon icon={faStar} />}
      style={{ marginRight: 10 }} onClick={() => roleData.triggerFavorite(role)}
      type={role.favorite ? "primary" : "default"} />

    <Popconfirm
      placement="bottom"
      title={t('Message')}
      description={t('Are you want to delete the role.')}
      onConfirm={(e) => onDelete(role.roleId)}
      onCancel={(e) => e?.stopPropagation()}
      okText={t<string>("Yes")}
      cancelText={t<string>("No")}
    >
      <Button shape="circle" icon={<FontAwesomeIcon icon={faTrash} />} />
    </Popconfirm>
  </div>;

    return (<div className="role-list-item-wrapper">           
               <Card title={<h4 className='role-title'>
               {config.isChinese?role.roleNameCN:role.roleName}</h4>}
          extra={
            readonly?false:headerBtn
         }
         onClick={()=>{readonly &&  useRole(role)}}
         hoverable={readonly}
              actions={readonly?[]:actionButtons}
          >
            <div className="role-description">
              {config.isChinese?role.descriptionCN:role.description}
            </div>
            <div className="role-tags">
              <Space size={[0, 8]} wrap>
                {role.tags.map((tag,index)=>
                <Tag  key={index} color="cyan">{t("tags."+tag)}</Tag>
                )}
              </Space>
            </div>
          </Card>
      </div>)
})

export default RoleList;