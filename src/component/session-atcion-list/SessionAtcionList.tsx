import React from 'react';
import { Switch,Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
  config:IAppConfig;
  store:IMessage;
}
const SessionAtcionList : React.FC<IProps> = observer(({store,config})=>{

    const {t} =useTranslation();


    const roleList:any[]=[];
    store.roles.map(item => {
        roleList.push({
            label:config.textLanguage==="zh"?item.roleNameCN:item.roleName,
            value: item.roleId
        });
    })


    
    return (<div>
        {store.type==='chat' && <Select style={{minWidth:80,marginRight:10}}
                value={store.role} onChange={(value)=>{
                    store.changeRole(store.activeSession,value)
                }}
                options={roleList.map((item) => ({ label: item.label, value: item.value }))}
              />}
        {store.type==='chat' && <Switch style={{marginRight:10}}
            onClick={()=>{config.switchStream()}}
          checkedChildren={t("Stream")}
          unCheckedChildren={t("Full")}
          defaultChecked={config.chatConfig.stream}
        />}
          <DeleteOutlined onClick={()=>{store.clear(store.activeSession)}}/>
        </div>)
})

export default SessionAtcionList;