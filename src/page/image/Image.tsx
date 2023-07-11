import {useEffect, useState} from 'react';
import {

    MessageList,
    SendButton
} from '../../component';
import {Button} from 'antd';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import './Chat.css'
import { observer } from "mobx-react"
import { useParams } from 'react-router-dom';

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const Image: React.FC<IProps> = ({store,config})=>{
    return (
    <div className="ai-image-page">
    </div>)
}

export default observer(Image);