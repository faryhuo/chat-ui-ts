import React from 'react';
import { Switch,Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";

const SessionAtcionList = observer(({store,config})=>{

    const {t} =useTranslation();


    const roleList=[];
    store.roles.map(item => {
        roleList.push({
            label:config.textLanguage==="zh"?item.roleNameCN:item.roleName,
            value: item.roleId
        });
    })


    
    return (<div>
        {store.tyoe==='chat' && <Select style={{minWidth:80,marginRight:10}}
                value={store.role} onChange={(value)=>{
                    store.changeRole(store.activeSession,value)
                }}
                options={roleList.map((item) => ({ label: item.label, value: item.value }))}
              />}
        {store.tyoe==='chat' && <Switch style={{marginRight:10}}
            onClick={()=>{config.switchStream()}}
          checkedChildren={t("Stream")}
          unCheckedChildren={t("Full")}
          defaultChecked={config.chatConfig.stream}
        />}
          <DeleteOutlined onClick={()=>{store.clear()}}/>
        </div>)
})

export default SessionAtcionList;