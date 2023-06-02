import React from 'react';
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IUserProflie} from '../../store/UserProfile';
import {IAppConfig} from '../../store/AppConfig';
import AccountManageTab from '../../component/account-manage-tab/AccountManageTab';
import LoginForm from '../login-form/LoginForm';
import SignUpForm from '../sign-up-form/SignUpForm';

type IProps={
  login:(userId:string,pwd:string)=>Promise<any>;
  handleCancel:()=>void;
  store:IMessage;
  userProfile:IUserProflie;
  config:IAppConfig;
}

const Account : React.FC<IProps>= observer(({login,handleCancel,config,store,userProfile})=>{

  const loginForm=<LoginForm config={config} store={store} userProfile={userProfile}  login={login} handleCancel={handleCancel}></LoginForm>;
  const signUpForm=<SignUpForm config={config} store={store} userProfile={userProfile}  login={login} handleCancel={handleCancel}></SignUpForm>;

    return (
      <div>
        <AccountManageTab loginForm={loginForm}
        signUpForm={signUpForm}/>
      </div>
    )
});
export default Account;