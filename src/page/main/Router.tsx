//import ConfigPage from '../config/Config';
import Chat from '../chat/Chat';
//import Code from '../code/Code';
//import ImageEdit from '../image-edit/ImageEdit';
//import Frame from '../iframe/Iframe';
import { Routes, Route,useLocation  } from 'react-router-dom';
import React, { useEffect } from 'react';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import asyncComponent  from '../../component/async-component/AsyncComponent';
import NewChat from '../new-chat/NewChat';
import { MessageInstance } from 'antd/es/message/interface';
import userProflie from '../../store/UserProfile';




type IProps={
    appConfig:IAppConfig;
  messageData:IMessage;
  messageApi:MessageInstance
}
//const AsyncChat = asyncComponent(() => import ('../chat/Chat'));
// const AsyncCode= asyncComponent(() => import ('../code/Code'));
const AsyncFrame= asyncComponent(() => import ('../iframe/Iframe'));
const AsyncConfigPage= asyncComponent(() => import ('../config/Config'));
const AsyncPersonInfoPage= asyncComponent(() => import ('../person-info/PersonInfo'));
 const AsyncImage= asyncComponent(() => import ('../image/Image'));
 const AsyncPaintingSquare= asyncComponent(() => import ('../painting-square/PaintingSquare'));
 const AsyncFeedback= asyncComponent(() => import ('../feedback/Feedback'));



// 定义路由组件的类型
type RouteItem = {
  path: string;
  component: React.ComponentType<any>;
  props?: Record<string, unknown>;
  exact?: boolean;
}

// 将URL定义为常量
const TIPS_BASE_URL = "https://aishort.top/";
const SD_URL = "http://sd.fc-stable-diffusion-plus.1730559332177295.cn-shenzhen.fc.devsapp.net/?spm=5176.fcnext.0.0.406c78c8xNTZfY";

const AppRoutes: React.FC<IProps> = ({ messageData, appConfig, messageApi }) => {
    const location = useLocation();

    const pageList: RouteItem[] = [{
        path: "/chat/:chatId",
        component: Chat
    }, {
        path: "/image",
        component: AsyncImage
    }, {
        path: "/image/:chatId",
        component: AsyncImage
    }, {
        path: "/painting_square",
        component: AsyncPaintingSquare
    }, {
        path: "/config/:id",
        component: AsyncConfigPage
    }, {
        path: "/tips",
        component: AsyncFrame,
        props: {
            src: `${TIPS_BASE_URL}${appConfig.isChinese ? '' : `${appConfig.textLanguage}/`}`
        },
    }, {
        path: "/sd",
        component: AsyncFrame,
        props: {
            src: SD_URL
        },
    }, {
        path: "/",
        component: NewChat,
        exact: true
    }, {
        path: "/chat",
        component: NewChat,
        exact: true
    }, {
        path: "/person",
        component: AsyncPersonInfoPage,
        exact: true
    }, {
        path: "/feedback",
        component: AsyncFeedback,
        exact: true
    }];

    useEffect(()=>{
        if(location.pathname==="/" || location.pathname.startsWith("/chat")){
            appConfig.setHasMenu(true);
            appConfig.setCurrentPath("chat");
        }else{
            appConfig.setHasMenu(false);
            appConfig.setCurrentPath(location.pathname.replace("/",""));
        }
    },[appConfig, location])

  return (<Routes>
    {
        pageList.map((item,index)=>{
            return (<Route  key={index} path={item.path} Component={(props)=><item.component key={index} {...item.props}{...props} globalMessageApi={messageApi} userProflie={userProflie} store={messageData} config={appConfig}></item.component>} >
                </Route>)
        })
    }
</Routes>  );
};

export default AppRoutes;