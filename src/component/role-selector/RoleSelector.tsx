import React from 'react';
import { Button,Select,Divider,Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
type IProps={
  store:IMessage;
  roleList:any[];
}
const RoleSelector:React.FC<IProps> = observer(({store,roleList})=>{

    const {t} =useTranslation();


    const addRole=()=>{
      window.location.hash="/config/4";
    }


    return (<Select  style={{minWidth:150}}
      placement="bottomLeft"
      className="option-btn" 
      value={store.role} onChange={(value)=>{
          store.changeRole(store.activeSession,value)
      }}
      placeholder={t("Select a role")}
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={roleList.map((item) => ({ label: item.label, value: item.value }))}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>

            <Button onClick={addRole} style={{width:'100%'}} icon={<FontAwesomeIcon icon={faAdd} />} type="text">
              &nbsp;{t("More Details")}
            </Button>
          </Space>
        </>)}
      
    />)
})

export default RoleSelector;