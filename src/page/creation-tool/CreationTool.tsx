import React from 'react';
import { IAppConfig } from '../../store/AppConfig';
import { IMessage } from '../../store/MessageData';
import './CreationTool.css'
type IProps={
  config: IAppConfig;
  store: IMessage
}

const CreationTool:React.FC<IProps> = ({config,store})=>{
    return (
    <div className="creation-tool-container">
    </div>)
}

export default CreationTool;