import React from 'react';
import './Payment.css';
import PaymentStore from '../../store/Payment'
import { QRCode } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

type IProps={
}

const Payment:React.FC<IProps> = ()=>{

    const [qrcode,setQRCode] = useState("");

    useEffect(()=>{
       PaymentStore.getAlipayQRCode().then((qr)=>{
         setQRCode(qr);
       })

    },[])

    return (
    <div className="Payment-page-container">
       <QRCode value={qrcode}></QRCode>
    </div>)
}

export default Payment;