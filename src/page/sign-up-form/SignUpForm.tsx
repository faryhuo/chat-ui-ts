import React from 'react';
import { Button,Input,Form,message,Space} from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IUserProflie} from '../../store/UserProfile';
import {IAppConfig} from '../../store/AppConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import './SignUpForm.css'

type IProps={
  login:(userId:string,pwd:string)=>Promise<any>;
  handleCancel:()=>void;
  store:IMessage;
  userProfile:IUserProflie;
  config:IAppConfig;
}

const SignUpForm : React.FC<IProps>= observer(({login,handleCancel,config,store,userProfile})=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [passwordVisible2, setPasswordVisible2] = React.useState(false);

    const [codeSend, setCodeSend] = React.useState(false);
    const [sentSmsTitle, setSentSmsTitle] = React.useState("Sent");

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Login success',
      });
    };
    

    let userId = Form.useWatch('userId', form);
    let password = Form.useWatch('password', form);
    let code = Form.useWatch('code', form);

    const onLogin = () => {
      userProfile.signup(userId,password,code,"email").then(()=>{
        store.clearHistoryResult();
        store.getChatHistory()
        handleCancel();
        success();
      },(msg)=>{
        fail(msg);
      });
    };

    const fail = (msg:string) => {
      messageApi.open({
        type: 'error',
        content: msg,
      });
    };


    const onSentCode=(e:any)=>{
      if(form.getFieldError("userId").length>0){
        return;
      }
      userProfile.checkUserIfExisting(userId).then((result)=>{
        if(result){
          fail(t("The account is exsiting, please go to login."));
          return;
        }
        setCodeSend(true);
        let sec= 60;
        const timer= setInterval(()=>{
          sec--;
          setSentSmsTitle(`resent after ${sec}s`);
          if(sec===0){
            setCodeSend(false);
            setSentSmsTitle("Sent");
            clearInterval(timer);
          }
        },1000);
        userProfile.sentCode(userId).then((response)=>{
          const data=response.data.data;
          if(data.statusCode===0){
            messageApi.success(t("Sent code to your email success"));
          }else if(data.message){
            setCodeSend(false);
            fail(data.message);
          }
        }).catch(()=>{
          setCodeSend(false);
        });
      })
      e.preventDefault();
    }

    const ruleMessage={
      "required":t('This is a required field')
    }

    return (
      <div>
        {contextHolder}      
      <Form
        form={form}
        layout="vertical"
        onFinish={onLogin}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("Email Address")} name="userId"
        rules={[{ required: true },{type:"email"}]}
        tooltip={ruleMessage.required}>
          <Input prefix={<FontAwesomeIcon icon={faMailBulk}/>}
           placeholder={t("input email address")} />
        </Form.Item>


        <Form.Item label={t("Password")} name="password" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Input.Password  prefix={<FontAwesomeIcon icon={faKey}/>}
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        </Form.Item>

        <Form.Item label={t("Re-Password")} name="password2" 
        rules={[{ required: true },({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error(t('The two passwords that you entered do not match!')));
          },
        })]}
        tooltip={ruleMessage.required}>
        <Input.Password  prefix={<FontAwesomeIcon icon={faKey}/>}
          placeholder={t("re-input password")}
          visibilityToggle={{ visible: passwordVisible2, onVisibleChange: setPasswordVisible2 }}
        />
        </Form.Item>

        
        <Form.Item label={t("Code")} name="code" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Space.Compact>
            <Input style={{marginRight:20}}></Input>
            <Button style={{width:120,float:"right"}} 
            onClick={onSentCode} disabled={codeSend}>{t(sentSmsTitle)}</Button>
         </Space.Compact>
        </Form.Item>
        
        <Form.Item className="login-form-btn-list">
          <Button type="primary" htmlType="submit">{t('Sign Up')}</Button>
        </Form.Item>
      </Form>
      </div>
    );
})

export default SignUpForm;