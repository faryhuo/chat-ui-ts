import React from 'react';
import { Button,Input,Form,message } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IUserProflie} from '../../store/UserProfile';
import './LoginForm.css'
type IProps={
  login:(userId:string,pwd:string)=>Promise<any>;
  handleCancel:()=>void;
  store:IMessage;
  userProfile:IUserProflie;
}

const LoginForm : React.FC<IProps>= observer(({login,handleCancel,store,userProfile})=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    let userId = Form.useWatch('userId', form);
    let password = Form.useWatch('password', form);

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
      login(userId,password).then(()=>{
        store.getChatHistory()
        handleCancel();
        success();
      },(msg)=>{
        fail(msg);
      })
    };

    const onLogout= () =>{
      userProfile.logout();
      store.loadDataFromlocalStore();
      handleCancel();
      successLogout()
    }

    const onSignUp= () =>{
      userProfile.logout();
      store.loadDataFromlocalStore();
      handleCancel();
      successLogout()
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
        <Form.Item label={t("User Id")} name="userId"
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
          <Input ></Input>
        </Form.Item>

        <Form.Item label={t("Password")} name="password" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Input.Password
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        </Form.Item>

        <Form.Item label={t("SMS Code")} name="code" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
         <Input ></Input><Button  htmlType="submit">{t("Sent SMS code")}</Button>
        </Form.Item>



        
        <Form.Item className="login-form-btn-list">
          <Button type="primary" htmlType="submit">{t("Login")}</Button>
          <Button  onClick={handleCancel}>{t("Cancel")}</Button>
          {userProfile.isLogin && <Button  onClick={onSignUp}>{t("Forget password")}</Button>}
          {!userProfile.isLogin && <Button  onClick={onSignUp}>{t("Sign up")}</Button>}
          {userProfile.isLogin && <Button  onClick={onLogout}>{t("Logout")}</Button>}
        </Form.Item>
      </Form>
      </div>
    );
})

export default LoginForm;