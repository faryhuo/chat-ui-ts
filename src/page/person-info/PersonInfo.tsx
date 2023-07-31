import { Descriptions, Divider, Table } from 'antd';
import React, { useEffect } from 'react';
import './PersonInfo.css';
import { useTranslation } from 'react-i18next';
import userProflie from '../../store/UserProfile';
import { ColumnsType } from 'antd/es/table';
import UserInfo, { ITokenUsage } from '../../store/UserInfo';
import userInfo from '../../store/UserInfo';
import { observer } from 'mobx-react-lite';
type IProps={
}

const PersonInfo:React.FC<IProps> = ()=>{

  const { t } = useTranslation();


  const getTokenTemplate=(val:number,price:number)=>{
    return (<><span>{(val/1000).toFixed(2)} K</span> &nbsp;&nbsp;&nbsp; <span>({t('price')} : ${price} / 1K tokens)</span></>)
  }

  const columns: ColumnsType<ITokenUsage>  = [
    {
      title: t('Model Name'),
      key:'modelName',
      dataIndex: 'modelName',
    },
    {
      title: t('Input Token Usage'),
      dataIndex: 'inputTokenUsage',
      key:'inputTokenUsage',
      responsive: ['lg'],
      render: (val:number,record:ITokenUsage) => getTokenTemplate(val,record.inputTokenPrice),
    },
    {
      title: t('Output Token Usage'),
      dataIndex: 'outputTokenUsage',
      key:'outputTokenUsage',
      responsive: ['lg'],
      render: (val:number,record:ITokenUsage) => getTokenTemplate(val,record.outputTokenPrice),
    },
    {
      title: t('Total'),
      dataIndex: 'total',
      key:'total',
      render: (total:number) => <span>$ {total.toFixed(4)}</span>,
    }
  ];


  useEffect(()=>{
    userInfo.fetchTokenUsage();
  },[]);


  const getTotal=()=>{
    const data=UserInfo.tokenUsage;
    if(data && data.length>0){
      let total=0;
      data.forEach(item=>{
        total+=item.total;
      })
      return total.toFixed(4);
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
        <h3>{t('Token Usage')}</h3>
        <Table columns={columns} dataSource={userInfo.tokenUsage} pagination={false} bordered={true}/>
        <div className="total">
        <span>{t('Sum')} :   $ {getTotal()}</span>
        </div>
      </div>
    </div>)
}

export default observer(PersonInfo);