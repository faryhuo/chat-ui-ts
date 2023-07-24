import React from 'react';
import { Button,List,Radio,Divider,Modal,Input,Space,message } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import roleData,{IRole} from "../../store/RoleData";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import RoleDetails from '../role-details/RoleDetails';
import RoleListItem from '../role-list-item/RoleListItem';
import './RoleList.css'
import { useState } from 'react';
import userProfile from '../../store/UserProfile';


type IProps={
  config:IAppConfig;
  store:IMessage;
  readonly:boolean;
}
const RoleList:React.FC<IProps> = observer(({config,store,readonly})=>{

  const {t} =useTranslation();
  const [open,setOpen]=useState(false);
  const [roleDetails,setRoleDetails]=useState<IRole | undefined>(undefined);
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize,setPageSize]=useState(10);
  const [token,setToken]=useState("");

  const data = roleData.currentRoles;

  const [messageApi, contextHolder] = message.useMessage();


  const handleCancel=()=>{
    setOpen(false);
  }

  const edit=(role:IRole)=>{
    if(!userProfile.isLogin){
      userProfile.openPage();
      return;
    }
    roleData.getToken().then((response)=>{
      const token=response.data.data;
      setToken(token);
      setRoleDetails(role)
      setOpen(true);
    })
  }

  const addRole=()=>{
    if(!userProfile.isLogin){
      userProfile.openPage();
      return;
    }
    roleData.getToken().then((response)=>{
      const token=response.data.data;
      setToken(token);
      setRoleDetails(undefined)
      setOpen(true);
    })
  }

  const onSearch=(name:string)=>{
    roleData.search(name);
    setCurrentPage(1);
  }

  const clearCondition=()=>{
    roleData.search("");
    setCurrentPage(1);
  }


  const changeTag=(tag: string)=>{
    setCurrentPage(1);
    roleData.changeTag(tag)
  }

  const listLayout = {
    gutter: 16,
    xs: 1,
    sm: 1,
    md: 2,
    lg: 2,
    xl: 3,
    xxl: 4,
  };
  return (<div className="role-list-wrapper">           
    <Radio.Group value={roleData.currentTag} buttonStyle="solid" 
    onChange={(e)=>{changeTag(e.target.value)}}>
      {
        roleData.currentTags.map((tag,index)=>(
          <Radio.Button  key={index} value={tag}>{t<string>("tags."+tag)}</Radio.Button>)
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
        <Button   onClick={clearCondition}>{t('Clear')}</Button>
      </Space>
    </div>
    <div style={{height:20}}>
      <Divider />
    </div>
    <List
    grid={listLayout}
    pagination={{ position:"bottom", align:"center",hideOnSinglePage:true,current:currentPage,pageSize,onChange(page, pageSize) {
      setCurrentPage(page);
      setPageSize(pageSize)
    }}}
    dataSource={data}
    renderItem={(item,index) => (
      <List.Item>
        <RoleListItem key={index}  readonly={readonly} config={config} store={store} role={item} edit={edit}></RoleListItem>
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
      <RoleDetails messageApi={messageApi} handleCancel={handleCancel} role={roleDetails} config={config} store={store} token={token}></RoleDetails>
    </Modal>
    {contextHolder}
    </div>)
})

export default RoleList;