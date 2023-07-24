import React from 'react';
import { Button,Select,Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
      placeholder={t<string>("Select a role")}
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={roleList.map((item) => ({ label: item.label, value: item.value }))}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Button onClick={addRole} style={{width:'100%'}} icon={<FontAwesomeIcon 
          icon={faSearch} />} type="text">
              &nbsp;{t<string>("More Details")}
            </Button>
        </>)}
      
    />)
})

export default RoleSelector;