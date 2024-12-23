import React from 'react';
import { Button, Card, Form, InputNumber, message, Radio } from 'antd';
import { useEffect } from 'react';
import apiSetting from '../../store/APISetting';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import userProflie from '../../store/UserProfile';
import { isMobile } from 'react-device-detect';
import ModelSelector from '../../component/model-selector/ModelSelector';
import chatConfig from '../../store/ChatConfig';

type IProps={
  type:'chat' | 'image';
}

const Payment:React.FC<IProps> = ({type})=>{

   const { t } = useTranslation();
   const [form] = Form.useForm();
   const [messageApi, contextHolder] = message.useMessage();
   let goods = Form.useWatch('goods', form);

   useEffect(() => {
     document.title = "Payment";
   }, []);
 
   const submit = () => {
     form.validateFields().then(() => {
       const requestJson = form.getFieldsValue();
       if(!userProflie.token){
         messageApi.error(t("please login first."));
         userProflie.openPage();
          return;
       }
       if(requestJson.type==="zhifubao"){
          axios.get(apiSetting.paymentUrl+`?goodsName=${requestJson.goods}&num=${requestJson.num}&isMobile=${isMobile}`,{
            headers: {
               'token': userProflie.token,
           } 
         }).then((response)=>{
            console.log(response)
            if(response.data && response.data && response.data.statusCode===0){
               window.open()?.document.write(response.data.data);
            }
            
          })
       }else{
          messageApi.error("Not support this method.")
       }
     })
   }
 
   return (
     <div className="payment-page-container">
       <Card>
         <Form
           form={form}
           initialValues={{type:"zhifubao",num:10}}
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 16 }}
         >
           <Form.Item label={t("Goods")} rules={[{ required: true }]}
             name="goods"  >
              {type==='chat' && <ModelSelector isPayment={true}></ModelSelector>}
              {type==='image' &&  <Radio.Group>
               <Radio key={1} value="mj">{t('Standard mode')}</Radio>
               {/* <Radio key={2} value="fast">{t('Fast mode')}</Radio> */}
             </Radio.Group>}
           </Form.Item>

           <Form.Item name="price"  wrapperCol={{ offset: isMobile?0:8, span: 16 }}>
            <label>{t('Price : ')}{type==='chat'?chatConfig.getCallTimerPrice(goods):0.15}{t('/count')}</label>
           </Form.Item>

           <Form.Item label={t("count")} rules={[{ required: true }]}
             name="num">
              <InputNumber min={1} max={1000}  step={1}/>
           </Form.Item>
 
           <Form.Item label={t("pay method")} rules={[{ required: true }]}
             name="type">
             <Radio.Group>
               <Radio key={1} value="zhifubao">{t('zhifubao')}</Radio>
               <Radio key={2} value="weixin">{t('weixin')}</Radio>
               <Radio key={3} value="paypal">{t('paypal')}</Radio>
             </Radio.Group>
           </Form.Item>
            
           <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
             <Button type="primary" onClick={submit}>{t('Submit')}</Button>
           </Form.Item>
         </Form>
         {contextHolder}
       </Card>
     </div>)
}

export default Payment;