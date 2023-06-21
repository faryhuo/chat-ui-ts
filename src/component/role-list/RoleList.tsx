import React from 'react';
import { Button,List,Card,Radio,Divider,Modal,Input,Space,Popconfirm } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash,faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import roleData,{IRole} from "../../store/RoleData";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import RoleDetails from '../role-details/RoleDetails';
import './RoleList.css'
import { useState } from 'react';
type IProps={
  config:IAppConfig;
  store:IMessage;
}
const RoleList:React.FC<IProps> = observer(({config,store})=>{

    const {t} =useTranslation();
    const [open,setOpen]=useState(false);
    const [roleDetails,setRoleDetails]=useState<IRole | undefined>(undefined);

    const data = roleData.currentRoles;
    const useRole=(role:IRole)=>{
      store.addChatWithRole(role);
      window.location.hash="/chat";
    }


    const handleCancel=()=>{
      setOpen(false);
    }

    const edit=(role:IRole)=>{
      setRoleDetails(role)
      setOpen(true);
    }

    const addRole=()=>{
      setRoleDetails(undefined)
      setOpen(true);
    }

    const onSearch=(name:string)=>{
      roleData.search(name);
    }

    const onDelete=(roleId: string)=>{
      roleData.deleteRole(roleId);
    }

    const buttonStyle={
      width:"100%",
      fontSize:"16px"
    }

    return (<div className="role-list-wrapper">           
      <Radio.Group defaultValue="favorite" buttonStyle="solid" 
      onChange={(e)=>{roleData.changeTag(e.target.value)}}>
        {
          roleData.currentTags.map((tag,index)=>(
            <Radio.Button  key={index} value={tag}>{t("tags."+tag)}</Radio.Button>)
          )
        }
      </Radio.Group>

      <div style={{height:20}}>
        <Divider />
      </div>
      <div>
         <Space direction="horizontal">
          <Button type="primary" onClick={addRole}>{t('Add Role')}</Button>
          <Input.Search width={300} placeholder="input search text" onSearch={(e)=>{onSearch(e)}} enterButton  />
        </Space>
      </div>
      <div style={{height:20}}>
        <Divider />
      </div>
      <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={config.isChinese?item.roleNameCN:item.roleName}
          extra={
            <Popconfirm
            placement="bottom"
            title={t('Message')}
            description={t('Are you want to delete the role.')}
            onConfirm={(e)=>onDelete(item.roleId)}
            onCancel={(e)=>e?.stopPropagation()}
            okText={t("Yes")}
            cancelText={t("No")}
          >
          <Button shape="circle" icon={<FontAwesomeIcon icon={faTrash} />}/>
          </Popconfirm>
         }
              actions={[
                 <Button icon={<FontAwesomeIcon icon={faLightbulb} />} 
                 style={buttonStyle} type="link" onClick={()=>{useRole(item)}}>
                   &nbsp;{t('Use')}</Button>,
                 <Button icon={<FontAwesomeIcon icon={faEdit} />} 
                 onClick={()=>{edit(item)}}
                 style={buttonStyle} type="link">&nbsp;{t('Edit')}</Button>,
              ]}
          >
            {config.isChinese?item.descriptionCN:item.description}
          </Card>
            
        </List.Item>
      )}/>
       <Modal
        open={open}
        title={false}
        onCancel={handleCancel}
        footer={false}
        width={700}
        destroyOnClose={true}
      >
        <RoleDetails handleCancel={handleCancel} role={roleDetails} config={config} store={store}></RoleDetails>
      </Modal>
      </div>)
})

export default RoleList;