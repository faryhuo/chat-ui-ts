import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
type IProps={
  store:IMessage;
}
const Deposit:React.FC<IProps> = observer(({store})=>{

    const {t} =useTranslation();

    return (<div className='deposit-page'>           
            
    </div>)
})

export default Deposit;