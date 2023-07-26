import React from 'react';
import { Button,Input,Form,message,Space,Select} from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IUserProflie} from '../../store/UserProfile';
import {IAppConfig} from '../../store/AppConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
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
    const [sentSmsTitle, setSentSmsTitle] = React.useState("Sent SMS code");

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
      userProfile.signup(userId,password,code).then(()=>{
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


    const onSentSMSCode=(e:any)=>{
      userProfile.checkUserIfExisting(userId).then((result)=>{
        if(result===false){
          fail(t<string>("The phone no. is exsiting, please go to login."));
          return;
        }
        setCodeSend(true);
        userProfile.sentSMSCode(userId).then((response)=>{
          const data=response.data.data;
          console.log(data);
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
      })
      e.preventDefault();
    }

    const ruleMessage={
      "required":t('This is a required field')
    }

    const prefixSelector = (
      <Form.Item name="prefix" noStyle initialValue="86">
        <Select style={{ width: 70 }}>
          <Select.Option  value="86">+86</Select.Option>
          <Select.Option value="87">+87</Select.Option>
        </Select>
      </Form.Item>
    );


    return (
      <div>
        {contextHolder}      
      <Form
        form={form}
        layout="vertical"
        onFinish={onLogin}
        style={{padding:"10px"}}
      >
        <Form.Item label={t<string>("Phone number")} name="userId"
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
          <Input       addonBefore={prefixSelector}
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

        <Form.Item label={t<string>("Re-Password")} name="password2" 
        rules={[{ required: true },({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error(t<string>('The two passwords that you entered do not match!')));
          },
        })]}
        tooltip={ruleMessage.required}>
        <Input.Password  prefix={<FontAwesomeIcon icon={faKey}/>}
          placeholder={t<string>("re-input password")}
          visibilityToggle={{ visible: passwordVisible2, onVisibleChange: setPasswordVisible2 }}
        />
        </Form.Item>

        
        <Form.Item label={t<string>("SMS Code")} name="code" 
        rules={[{ required: true }]}
        tooltip={ruleMessage.required}>
        <Space.Compact>
            <Input style={{marginRight:20}}></Input>
            <Button style={{width:120,float:"right"}} onClick={onSentSMSCode} disabled={codeSend}>{t(sentSmsTitle)}</Button>
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