import React from 'react';
import './iframe.css'
import Iframe from 'react-iframe';


const Frame = ({src})=>{
  let height=window.innerHeight-48
    return (
    <div className="iframe-container">
            <Iframe src={src} width="100%" height={height} frameBorder="0"></Iframe>
    </div>)
}

export default Frame;