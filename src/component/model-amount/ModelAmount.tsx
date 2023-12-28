import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from "mobx-react-lite";
import userModelLimit from '../../store/UserModelLimit';
import { faAdd, faWallet } from '@fortawesome/free-solid-svg-icons';
import Payment from '../../page/payment/Payment';
import './ModelAmount.css'
type IProps = {
}
const ModelAmount: React.FC<IProps> = observer(() => {

  const { t } = useTranslation();

  const [paymentOpen, setPaymentOpen] = useState(false);
  const handlePaymentCancel = () => {
    setPaymentOpen(false);
  }

  return (<div className="model-amount">
    <div className="amount-content">
      <div className="amount-left">
        <span><FontAwesomeIcon style={{ color: "#faad14" }} icon={faWallet} /> {
          t(userModelLimit.usage.modelName) + " " + t('Amount')}</span>
      </div>
      <div className="amount-right">
        <div className="amount-item">
          <div className="amount-title">
            <span>{t('Used')} : </span>
          </div>
          <div className="amount-value">
            {userModelLimit.usage.usedAmount}
          </div>
        </div>
        <div className="amount-item">
          <div className="amount-title">
            <span>{t('Remaining')} : </span>
          </div>
          <div className="amount-value">
            {userModelLimit.usage.remainingAmount}
            <Button onClick={() => { setPaymentOpen(true) }} style={{ marginLeft: 5 }} size='small' icon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>} />
          </div>
        </div>
      </div>

    </div>
    <Modal
      open={paymentOpen}
      title={false}
      onCancel={handlePaymentCancel}
      footer={false}
      destroyOnClose={true}
      width={900}
    >
      <Payment type='chat'></Payment>
    </Modal>
  </div>)
})

export default ModelAmount;