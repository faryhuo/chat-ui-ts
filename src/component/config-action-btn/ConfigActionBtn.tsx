import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { ExportOutlined ,ImportOutlined,RedoOutlined} from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import './ConfigActionBtn.css';
import {IMessage} from '../../store/MessageData';
import { useRef } from 'react';
type IProps={
  store:IMessage;
}
const ConfigActionBtn:React.FC<IProps> = observer(({store})=>{

    const {t} =useTranslation();
    const fileRef = useRef(null);

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

    return (<div className="config-action-btn-list">           
    
    <Button type="primary"  icon={<ExportOutlined />}  
    className="config-action-btn"
    onClick={()=>{store.saveDataToFile()}}>{t('Export')}</Button>
     <Button type="primary"  icon={<ImportOutlined />}  
         className="config-action-btn"
    onClick={()=>{showFilePage()}}>{t('Import')}</Button>
        <Button danger  icon={<RedoOutlined />} 
            className="config-action-btn"
         
    onClick={()=>{}}>{t('Reset')}</Button>   
    <input style={{display:'none'}} ref={fileRef} type="file" name="export" onChange={(e)=>{importData(e)}}></input>
    </div>)
})

export default ConfigActionBtn;