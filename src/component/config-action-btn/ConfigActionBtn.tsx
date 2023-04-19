import React from 'react';
import { Button,Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { ExportOutlined ,ImportOutlined,RedoOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import './ConfigActionBtn.css';
import {IMessage} from '../../store/MessageData';
import { useRef } from 'react';
import config from '../../store/AppConfig';
type IProps={
  store:IMessage;
}
const ConfigActionBtn:React.FC<IProps> = observer(({store})=>{

    const {t} =useTranslation();
    const fileRef = useRef(null);
    const [modal, contextHolder] = Modal.useModal();

    const importData = (e: React.ChangeEvent<HTMLInputElement>)=>{
      if(e.target && e.target.files && e.target.files.length){
        store.loadDataFromFile(e.target.files[0]);
      }
    }

    const showFilePage = ()=>{
      if(fileRef && fileRef.current){
        (fileRef.current as unknown as HTMLInputElement).click();
      }
    }

    const clear=()=>{
      modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure to clear all config and chat history',
        okText: 'Yes',
        cancelText: 'No',
        onOk:()=>{
          config.clearHistory();
        }
      });
    }

    return (<div className="config-action-btn-list">           
     {contextHolder}
    <Button type="primary"  icon={<ExportOutlined />}  
    className="config-action-btn"
    onClick={()=>{store.saveDataToFile()}}>{t('Export')}</Button>
     <Button type="primary"  icon={<ImportOutlined />}  
         className="config-action-btn"
    onClick={()=>{showFilePage()}}>{t('Import')}</Button>
        <Button danger  icon={<RedoOutlined />} 
            className="config-action-btn"
         
    onClick={clear}>{t('Reset')}</Button>   
    <input style={{display:'none'}} ref={fileRef} type="file" name="export" onChange={(e)=>{importData(e)}}></input>
    </div>)
})

export default ConfigActionBtn;