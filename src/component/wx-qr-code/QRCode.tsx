import React from 'react';
import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import userProflie from '../../store/UserProfile';
type IProps={
}
const QRCode:React.FC<IProps> = observer(()=>{

    useEffect(()=>{
      setTimeout(()=>{
        userProflie.getQRCode();
      });
    })
    
    return (<div id="login_container">

    </div>)
})

export default QRCode;