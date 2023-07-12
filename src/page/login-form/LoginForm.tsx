import React from 'react';
import { Button,Input,Form,message,Space,Checkbox} from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IUserProflie} from '../../store/UserProfile';
import {IAppConfig} from '../../store/AppConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield,faKey } from '@fortawesome/free-solid-svg-icons'
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
    const [loginBtnTitle, setLoginBtnTitle] = React.useState("Login");
    const [sentSmsTitle, setSentSmsTitle] = React.useState("Sent SMS code");
    const [forgetFlag, setForgetFlag] = React.useState(false);


    

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
      if(forgetFlag){
        userProfile.resetPwd(userId,password,code).then(()=>{
          store.getChatHistory()
          handleCancel();
          success();
        },(msg)=>{
          fail(msg);
        })
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



    const onForgetPwd= () =>{
      setForgetFlag(true);
      setLoginBtnTitle("Reset Password")
      setEnableSMSCode(true);
    }


    const onSentSMSCode=(e:any)=>{
      setCodeSend(true);
      userProfile.sentSMSCode(userId).then((response)=>{
        const data=response.data.data;
        if(data.success){
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
        }else if(data.message){
          setCodeSend(false);
          fail(data.message);
        }
      });
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
        <Form.Item label={t<string>("User name / Phone number")} name="userId"
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
          <Input       prefix={<FontAwesomeIcon icon={faUserShield} className="site-form-item-icon" />}
          ></Input>
        </Form.Item>

        <Form.Item label={t<string>("Password")} name="password" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Input.Password  prefix={<FontAwesomeIcon icon={faKey}/>}
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        </Form.Item>
        
        {enableSMSCode && <Form.Item label={t<string>("SMS Code")} name="code" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Space.Compact>
            <Input style={{marginRight:20}}></Input>
            <Button style={{width:120,float:"right"}} onClick={onSentSMSCode} disabled={codeSend}>{t(sentSmsTitle)}</Button>
         </Space.Compact>
        </Form.Item>}
        {!forgetFlag && <Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <span className="login-form-forgot"   onClick={onForgetPwd}>
          Forgot password
        </span>
      </Form.Item>}

        <Form.Item className="login-form-btn-list">
          <Button type="primary" htmlType="submit">{t(loginBtnTitle)}</Button>
          {userProfile.isLogin && !forgetFlag &&<Button  onClick={onLogout}>{t<string>("Logout")}</Button>}
        </Form.Item>
      </Form>
      </div>
    );
})

export default LoginForm;