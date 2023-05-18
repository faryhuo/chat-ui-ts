import React from 'react';
import { Button,Input,Form,message } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";

type IProps={
  login:(userId:string,pwd:string)=>Promise<any>;
  handleCancel:()=>void;
}

const LoginForm : React.FC<IProps>= observer(({login,handleCancel})=>{

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

    const fail = (msg:string) => {
      messageApi.open({
        type: 'error',
        content: msg,
      });
    };

    const onLogin = () => {
      login(userId,password).then(()=>{
        handleCancel();
        success();
      },(msg)=>{
        fail(msg);
      })
    };


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
        
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{marginRight:10}}>{t("Login")}</Button>
          <Button  onClick={handleCancel}>{t("Cancel")}</Button>
        </Form.Item>
      </Form>
      </div>
    );
})

export default LoginForm;