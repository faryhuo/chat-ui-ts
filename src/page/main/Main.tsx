import React, { Component } from 'react';
import {
    ChatList,
    Header,
    NewChatBtn
} from '../../component';
import './Main.css';
import messageData from '../../store/MessageData';
import appConfig from '../../store/AppConfig';
import { observer } from "mobx-react"
import Routes from './Router';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import {ConfigProvider } from 'antd';

class Main extends Component {


    theme = {
        token: {
        colorPrimary: appConfig.colorPrimary
        },
    };

    render(){        
        return (
            <ConfigProvider locale={appConfig.isChinese?zhCN:enUS} 
                theme={
                    this.theme
                }>
                <div className="chat-wrapper">
                    <div className="chat-body">   
                        <div className="chat-header">
                            {appConfig.isSlowLeftMenuFlag && <div className="chat-left-content">
                                <NewChatBtn  store={messageData}></NewChatBtn>
                            </div>}
                            <div className="chat-right-content">
                            <Header store={messageData} config={appConfig}></Header>
                            </div>
                        </div>
                        <div className="chat-content">
                            {appConfig.isSlowLeftMenuFlag &&
                            <div className="chat-left-content">
                                <ChatList store={messageData}></ChatList>
                            </div>}
                            <div className="chat-right-content">
                                <Routes messageData={messageData} appConfig={appConfig} ></Routes>
                            </div>  
                        </div>  
                    </div>
                </div>
            </ConfigProvider>)
    }
}


export default observer(Main);
