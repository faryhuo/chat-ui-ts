import React from 'react';
import { Button,List,Card,Radio,Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faChartLine } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import roleData,{IRole} from "../../store/RoleData";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import './RoleList.css'
type IProps={
  config:IAppConfig;
  store:IMessage;
}
const RoleList:React.FC<IProps> = observer(({config,store})=>{

    const {t} =useTranslation();
    const data = roleData.currentRolesByTag;
    const useRole=(role:IRole)=>{
      store.addChatWithRole(role);
      window.location.hash="/chat";
    }




    const buttonStyle={
      width:"100%",
      fontSize:"16px"
    }

    return (<div className="role-list-wrapper">           
      <Radio.Group defaultValue="favorite" buttonStyle="solid" 
      onChange={(e)=>{roleData.changeTag(e.target.value)}}>
        {
          roleData.currentTags.map((tag)=>(
            <Radio.Button  value={tag}>{t("tags."+tag)}</Radio.Button>)
          )
        }
      </Radio.Group>

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
              actions={[
                 <Button icon={<FontAwesomeIcon icon={faChartLine} />} 
                 style={buttonStyle} type="link" onClick={()=>{useRole(item)}}>
                   &nbsp;{t('Use')}</Button>,
                 <Button icon={<FontAwesomeIcon icon={faEdit} />} 
                 style={buttonStyle} type="link">&nbsp;{t('Edit')}</Button>,
              ]}
          >
            {config.isChinese?item.descriptionCN:item.description}
            </Card>
        </List.Item>
      )}/>
      
      </div>)
})

export default RoleList;