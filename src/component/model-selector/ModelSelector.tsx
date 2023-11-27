import React from 'react';
import{ Avatar, Button, Divider, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import chatConfig from '../../store/ChatConfig';
import { useState } from 'react';
import gptIcon from '../../icon/gpt-icon.svg';
import baiduIcon from '../../icon/baidu-icon.png';
import xunfeiIcon from '../../icon/xunfei-icon.png';
import aliyunIcon from '../../icon/aliyun-icon.svg';
import googleIcon from '../../icon/google-icon.png';

type IProps={
  store?:IMessage;
  onChange?:(e:any)=>void;
  value?:string;
  isPayment?:boolean
}
const ModelSelector:React.FC<IProps> = observer(({store,onChange,value,isPayment})=>{
  const [moreModules, setMoreModules] = useState(false);

    const {t} =useTranslation();

    const getIcon=(text:string,src:string)=>{
      return <div><Avatar size='small' src={src} />&nbsp;{text}</div>
    }

    const getModulesDataSource = () => {
      let datasource;
      if (moreModules) {
        datasource = chatConfig.chatModelList.filter(item=>{
          if(isPayment===true){
            return item.callTimerPrice>0;
          }else{
            return true;
          }
        });
      } else {
        datasource= chatConfig.chatModelList.filter(item=>{
          if(isPayment===true){
            return item.callTimerPrice>0 && item.isMain;
          }else{
            return item.isMain;
          }
        });
      }
      const options=[{
        label:getIcon(t('gpt'),gptIcon),
        options: datasource.filter(item=>item.channle==="gpt")
      },{
        label:getIcon(t('baidu'),baiduIcon),
        options: datasource.filter(item=>item.channle==="baidu")
      },{
        label:getIcon(t('google'),googleIcon),
        options: datasource.filter(item=>item.channle==="google")
      },{
        label:getIcon(t('xunfei'),xunfeiIcon),
        options: datasource.filter(item=>item.channle==="xunfei")
      },{
        label:getIcon(t('aliyun'),aliyunIcon),
        options: datasource.filter(item=>item.channle==="aliyun")
      }]
      return options;
    }


    const changeEvent=(model:string)=>{
      if(isPayment!==true){
        store?.setChatApiConfig("model", model);
      }
    }
  
    return (<Select  style={{ width: 180 }}
      className="option-btn" onChange={(e) => onChange?onChange(e):changeEvent(e as string)}
      options={getModulesDataSource()}
      value={value?value:store?.chatApiConfig.model}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Button onClick={() => setMoreModules(!moreModules)} style={{ width: '100%' }} icon={<FontAwesomeIcon
            icon={faSearch} />} type="text">
            &nbsp;{t<string>(!moreModules ? "All" : "Main")}
          </Button>
        </>)}>
        </Select>)
})

export default ModelSelector;