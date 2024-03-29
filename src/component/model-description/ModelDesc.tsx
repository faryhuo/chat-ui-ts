import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Radio, Table } from 'antd';
import chatConfig from '../../store/ChatConfig';
type IProps={
}
const ModelDesc:React.FC<IProps> = ()=>{

    const {t} =useTranslation();
    
    const columns = [
      {
        title: t('Model'),
        dataIndex: 'model'
      },
      {
        title: t('Description'),
        dataIndex: 'desc'
      },
      // {
      //   title: t('Max Support Lenght'),
      //   dataIndex: 'length',
      //   responsive: ['lg']
      // },
      {
        title: t('Training Date'),
        dataIndex: 'date',
        responsive: ['lg']
      }
    ];

    const [dataSource,setDataSource] = useState<any>([]);
    const [channel,setChannel] = useState<any>({});

    useEffect(()=>{
      const channelObj:any={};
      const data:any=[];
      chatConfig.chatModelList.forEach(item =>{
        const obj={model:item.label,length:chatConfig.getMaxTokenByModel(item.value),
        channel:item.channel,desc:item.description,
        date:chatConfig.getTrainingDate(item.value)}
        data.push(obj);
        channelObj[item.channel]=t(item.channel);
      })
      setDataSource(data.filter((item:any)=>{
        return item.channel==="gpt";
      }) as any)
     setChannel(channelObj);
    },[t])

    const onChange=(key:any)=>{
      const data:any=[];
      chatConfig.chatModelList.forEach(item =>{
        const obj={model:item.label,length:chatConfig.getMaxTokenByModel(item.value),
          channel:item.channel,date:chatConfig.getTrainingDate(item.value),
        desc:item.description}
        data.push(obj);
      })
      setDataSource(data.filter((item: { channel: any; })=>{
        return item.channel===key;
      }) as any)
    }
    
    
    return (<div className="model-desc-page">
      <Card>
      <Radio.Group defaultValue="gpt">
          {
            Object.keys(channel).map((key,index)=>{
              return <Radio.Button key={index} value={key} onChange={(e)=>onChange(e.target.value)}>{channel[key]}</Radio.Button>
            })
          }
        </Radio.Group>
      </Card>
      <Card>
        <Table rowKey={"model"} columns={columns as any} dataSource={dataSource}  pagination={false}/>
      </Card>
    </div>)
}

export default ModelDesc;