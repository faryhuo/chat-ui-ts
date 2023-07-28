import { Descriptions, Divider, Table } from 'antd';
import React, { useEffect } from 'react';
import './PersonInfo.css';
import { useTranslation } from 'react-i18next';
import userProflie from '../../store/UserProfile';
import { ColumnsType } from 'antd/es/table';
import UserInfo, { ITokenUsage } from '../../store/UserInfo';
import userInfo from '../../store/UserInfo';
type IProps={
}

const PersonInfo:React.FC<IProps> = ()=>{

  const { t } = useTranslation();

  const columns: ColumnsType<ITokenUsage>  = [
    {
      title: 'Model Name',
      dataIndex: 'modelName',
    },
    {
      title: 'Input Token Usage',
      dataIndex: 'inputTokenUsage',
    },
    {
      title: 'Output Token Usage',
      dataIndex: 'outputTokenUsage',
    },
    {
      title: 'Total',
      dataIndex: 'total'
    }
  ];


  useEffect(()=>{
    userInfo.fetchTokenUsage();
  },[]);

  const data:ITokenUsage[]=UserInfo.tokenUsage;

  const getTotal=()=>{
    const data=UserInfo.tokenUsage;
    if(data && data.length>0){
      return data.reduce((prev,item)=>{
        prev.total=prev.total+item.total;
        return prev;
      }).total;
    }else{
      return 0;
    }
  }


  return (
    <div className="person-info-container">
      <Descriptions title={t("User Info")} bordered>
      <Descriptions.Item label={t("Phone No")}>{userProflie.userName}</Descriptions.Item>
      <Descriptions.Item label={t("Balance")}>{userInfo.balance}</Descriptions.Item>
      </Descriptions>

      <Divider></Divider>
      <div className="token-usage">
        <h3>Token Usage</h3>
        <Table columns={columns} dataSource={data} pagination={false} bordered={true}/>
        <div className="total">
        <span>Sum :   {getTotal()}</span>
        </div>
      </div>
    </div>)
}

export default PersonInfo;