import React from 'react';
import{ Button, Divider, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import chatConfig from '../../store/ChatConfig';
import { useState } from 'react';
type IProps={
  store:IMessage;
  onChange?:(e:any)=>void;
  value?:string;
}
const ModelSelector:React.FC<IProps> = observer(({store,onChange,value})=>{
  const [moreModules, setMoreModules] = useState(false);

    const {t} =useTranslation();
    const getModulesDataSource = () => {
      let datasource;
      if (moreModules) {
        datasource = chatConfig.chatModelList;
      } else {
        datasource= chatConfig.chatModelList.filter(item=>item.isMain);
      }
      const options=[{
        label:"GPT",
        options: datasource.filter(item=>item.channle==="gpt")
      },{
        label:"百度",
        options: datasource.filter(item=>item.channle==="baidu")
      },{
        label:"Google",
        options: datasource.filter(item=>item.channle==="google")
      },{
        label:"科大讯飞",
        options: datasource.filter(item=>item.channle==="xunfei")
      },{
        label:"阿里巴巴",
        options: datasource.filter(item=>item.channle==="aliyun")
      }]
      return options;
    }
  
    return (<Select  style={{ width: 180 }}
      className="option-btn" onChange={(e) => onChange?onChange(e):store.setChatApiConfig("model", e as any)}
      options={getModulesDataSource()}
      value={value?value:store.chatApiConfig.model}
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