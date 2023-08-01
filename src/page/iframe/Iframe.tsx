import React from 'react';
import './iframe.css'
import Iframe from 'react-iframe';
type IProps={
  src:string
}

const Frame:React.FC<IProps> = ({src})=>{
  let height=window.innerHeight-88
    return (
    <div className="iframe-container">
            <Iframe src={src} url={src} width="100%" height={height+"px"} frameBorder={0}></Iframe>
    </div>)
}

export default Frame;