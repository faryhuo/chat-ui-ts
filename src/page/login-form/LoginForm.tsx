import React from 'react';
import { Button,Input,Form,message,Space} from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IUserProflie} from '../../store/UserProfile';
import {IAppConfig} from '../../store/AppConfig';
import { UserOutlined,LockOutlined } from '@ant-design/icons';

import './LoginForm.css'
type IProps={
  login:(userId:string,pwd:string)=>Promise<any>;
  handleCancel:()=>void;
  store:IMessage;
  userProfile:IUserProflie;
  config:IAppConfig;
}

const LoginForm : React.FC<IProps>= observer(({login,handleCancel,config,store,userProfile})=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [codeSend, setCodeSend] = React.useState(false);
    const [enableSMSCode, setEnableSMSCode] = React.useState(false);
    const [formTitle, setFormTitle] = React.useState("Login");
    const [loginBtnTitle, setLoginBtnTitle] = React.useState("Login");
    const [signUpSlowFlag, setSignUpSlowFlag] = React.useState(false);
    const [sentSmsTitle, setSentSmsTitle] = React.useState("Sent SMS code");


    

    let userId = Form.useWatch('userId', form);
    let password = Form.useWatch('password', form);
    let code = Form.useWatch('code', form);

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Login success',
      });
    };


    const successLogout = () => {
      messageApi.open({
        type: 'success',
        content: 'Logout success',
      });
    };

    const fail = (msg:string) => {
      messageApi.open({
        type: 'error',
        content: msg,
      });
    };

    const onLogin = () => {
      if(signUpSlowFlag){
        userProfile.signup(userId,password,code).then(()=>{
          store.getChatHistory()
          handleCancel();
          success();
        },(msg)=>{
          fail(msg);
        });
      }else{
        login(userId,password).then(()=>{
          store.getChatHistory()
          handleCancel();
          success();
        },(msg)=>{
          fail(msg);
        })
      }
    };

    const onLogout= () =>{
      userProfile.logout();
      store.loadDataFromlocalStore();
      handleCancel();
      successLogout()
    }

    const onSignUp= () =>{
      setFormTitle("Sign up")
      setLoginBtnTitle("Sign up")
      setSignUpSlowFlag(true);
      setEnableSMSCode(true);
    }

    const onForgetPwd= () =>{
      setFormTitle("Forget password")
      setLoginBtnTitle("Reset")
      setSignUpSlowFlag(true);
      setEnableSMSCode(true);
    }


    const onSentSMSCode=(e:any)=>{
      setCodeSend(true);
      userProfile.sentSMSCode(userId).then((response)=>{
        const data=response.data.data;
        console.log(data);
        if(data.message){
          fail(data.message);
        }
      })
      let sec= 60;
      const timer= setInterval(()=>{
        sec--;
        setSentSmsTitle(`resent after ${sec}s`);
        if(sec===0){
          setCodeSend(false);
          setSentSmsTitle("Sent SMS code");
          clearInterval(timer);
        }
      },1000);
      e.preventDefault();
    }

    const ruleMessage={
      "required":t('This is a required field')
    }
    
    return (
      <div>
        {contextHolder}      
      <h2>{t(formTitle)}</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onLogin}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("User name / Phone number")} name="userId"
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
          <Input       prefix={<UserOutlined className="site-form-item-icon" />}
          ></Input>
        </Form.Item>

        <Form.Item label={t("Password")} name="password" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Input.Password  prefix={<LockOutlined></LockOutlined>}
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        </Form.Item>
        
        {enableSMSCode && <Form.Item label={t("SMS Code")} name="code" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Space.Compact>
            <Input style={{marginRight:20}}></Input>
            <Button style={{width:120,float:"right"}} onClick={onSentSMSCode} disabled={codeSend}>{t(sentSmsTitle)}</Button>
         </Space.Compact>
        </Form.Item>}
        
        <Form.Item className="login-form-btn-list">
          <Button type="primary" htmlType="submit">{t(loginBtnTitle)}</Button>
          {!userProfile.isLogin && !signUpSlowFlag &&  <Button  onClick={onSignUp}>{"Sign up"}</Button>}
          {!userProfile.isLogin && !signUpSlowFlag && <Button  onClick={onForgetPwd}>{t("Forget password")}</Button>}
          {userProfile.isLogin && <Button  onClick={onLogout}>{t("Logout")}</Button>}
          <Button  onClick={handleCancel}>{t("Cancel")}</Button>
        </Form.Item>
      </Form>
      </div>
    );
})

export default LoginForm;