import React, { Dispatch, SetStateAction } from 'react';
import { Switch,Select,Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
  onOpen?:()=>void;
}
const SessionAtcionList : React.FC<IProps> = observer(({store,config,onOpen})=>{

    const {t} =useTranslation();


    const roleList:any[]=[];
    store.roles.map(item => {
        roleList.push({
            label:config.textLanguage==="zh"?item.roleNameCN:item.roleName,
            value: item.roleId
        });
    })


    const getActionButtonList=()=>{
      const list=[];
      if(store.type==='chat'){
        list.push(<Button key={list.length}  onClick={onOpen}>More</Button>);
        list.push(<Select key={list.length} style={{minWidth:80,marginRight:10}}
          value={store.role} onChange={(value)=>{
              store.changeRole(store.activeSession,value)
          }}
          options={roleList.map((item) => ({ label: item.label, value: item.value }))}
        />);
        list.push(<Switch key={list.length}  style={{marginRight:10}}
            onClick={()=>{config.switchStream()}}
          checkedChildren={t("Stream")}
          unCheckedChildren={t("Full")}
          defaultChecked={config.chatConfig.stream}
        />);
      }
      list.push(<DeleteOutlined key={list.length} onClick={()=>{store.clear(store.activeSession)}}/>)
      return list;
    }


    
    return (<div>
          {getActionButtonList()}
        </div>)
})

export default SessionAtcionList;