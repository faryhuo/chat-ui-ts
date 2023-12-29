import {
    ChatList,
    Header,
    NewChatBtn
} from '../../component';
import './Main.css';
import messageData from '../../store/MessageData';
import appConfig from '../../store/AppConfig';
import { observer } from "mobx-react-lite"
import Routes from './Router';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import {ConfigProvider, message } from 'antd';
import { IProps } from 'rc-queue-anim';
import userProflie from '../../store/UserProfile';
import GlobalNotice from '../../component/global-notice/GlobalNotice';
const Main:React.FC<IProps> = ()=>{
    const [messageApi, contextHolder] = message.useMessage();


    const theme = {
        token: {
        colorPrimary: appConfig.colorPrimary
        },
    };

    return (
        <ConfigProvider locale={appConfig.isChinese?zhCN:enUS} 
            theme={theme
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
                            <ChatList store={messageData} userProflie={userProflie}></ChatList>
                        </div>}
                        <div className="chat-right-content">
                            <Routes messageData={messageData} appConfig={appConfig} 
                            messageApi={messageApi}></Routes>
                        </div>  
                    </div>  
                </div>
                <GlobalNotice></GlobalNotice>
            </div>
            {contextHolder}
        </ConfigProvider>)
}


export default observer(Main);
