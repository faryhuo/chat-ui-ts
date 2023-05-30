import React from 'react';
import { Switch,Select,Button, Segmented ,Popconfirm} from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './SessionActionList.css';
type IProps={
  config:IAppConfig;
  store:IMessage;
  onOpen?:()=>void;
}
const SessionAtcionList : React.FC<IProps> = observer(({store,config,onOpen})=>{

    const {t} =useTranslation();
    const options = [
      t('Precise'),
      t('Balanced'),
      t('Creative')
    ];

    const imageSizeList = [
      t('256x256'),
      t('512x512'),
      t('1024x1024')
    ];


    const roleList:any[]=[];
    store.roles.forEach(item => {
        roleList.push({
            label:config.textLanguage==="zh"?item.roleNameCN:item.roleName,
            value: item.roleId
        });
    })
    const clear= (e: any) =>{
      store.clear(store.activeSession);
      e.stopPropagation();
    }
  

    const getSelectedItem=()=>{
      if(config.chatConfig.temperature>0.7){
        return options[2];
      }else if(config.chatConfig.temperature<0.5){
        return options[0];
      }else {
        return options[1];
      }
    }

    const changeType=(e:any)=>{
      const index=options.indexOf(e);
      const temperatureList=[0,0.6,1];
      if(index>=0){
        config.chatConfig.temperature=temperatureList[index];
      }
    }

    const getActionButtonList=()=>{
      const list=[];
      if(store.type==='chat'){
        list.push(<Button className="option-btn" key={1}  onClick={onOpen}>More</Button>);
        !config.isMobile && list.push(<Segmented key={2}  value={getSelectedItem()} onChange={changeType}  style={{marginRight:10}}  options={options} />);
        list.push(<Select key={3} style={{minWidth:150}}
          placement="bottomLeft"
          className="option-btn" 
          value={store.role} onChange={(value)=>{
              store.changeRole(store.activeSession,value)
          }}
          placeholder="Select a role"
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={roleList.map((item) => ({ label: item.label, value: item.value }))}
        />);
        list.push(<Switch key={4}  className="option-btn" 
            onClick={()=>{config.switchStream()}}
          checkedChildren={t("Stream")}
          unCheckedChildren={t("Full")}
          defaultChecked={config.chatConfig.stream}
        />);
      }else if(store.type==='image'){
        list.push(<Select key={5} style={{minWidth:80}}
          placement="bottomLeft"
          className="option-btn" 
          value={config.imageSize} onChange={(value)=>{
            config.changeImageSize(value);
          }}
          options={imageSizeList.map((item,index) => ({ label: item, value: item }))}
        />);
      }
      list.push(<Popconfirm
        key={6}
        placement="bottom"
        title={t('Message')}
        description={t('Are you want to delete the chat.')}
        onConfirm={(e)=>clear(e)}
        okText={t("Yes")}
        cancelText={t("No")}
      >
         <Button 
        icon={<FontAwesomeIcon icon={faTrashCan} />} size ="small"/>
      </Popconfirm>
      )
      return list;
    }


    
    return (<div className="session-action-list-wrapper">
          {getActionButtonList()}
        </div>)
})

export default SessionAtcionList;