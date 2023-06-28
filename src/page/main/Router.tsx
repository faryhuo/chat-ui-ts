//import ConfigPage from '../config/Config';
//import Chat from '../chat/Chat';
//import Code from '../code/Code';
//import ImageEdit from '../image-edit/ImageEdit';
//import Frame from '../iframe/Iframe';
import { Routes, Route,useLocation  } from 'react-router-dom';
import React, { useEffect } from 'react';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import asyncComponent  from '../../component/async-component/AsyncComponent';


type IProps={
    appConfig:IAppConfig;
  messageData:IMessage;
}
const AsyncChat = asyncComponent(() => import ('../chat/Chat'));
const AsyncCode= asyncComponent(() => import ('../code/Code'));
const AsyncImageEdit= asyncComponent(() => import ('../image-edit/ImageEdit'));
const AsyncFrame= asyncComponent(() => import ('../iframe/Iframe'));
const AsyncConfigPage= asyncComponent(() => import ('../config/Config'));

const pageList=[{
    path:"/chat",
    component:AsyncChat
},{
    path:"/image",
    component:AsyncChat
},{
    path:"/code",
    component:AsyncCode
},
{
    path:"/image_edit",
    component:AsyncImageEdit
},
{
    path:"/config/:id",
    component:AsyncConfigPage
},{
    path:"/tips",
    component:AsyncFrame,
    props:{
        src:"https://newzone.top/chatgpt/"
    },
},{
    path:"/sd",
    component:AsyncFrame,
    props:{
        src:"https://e152ddfadd87f15ffb.gradio.live"
    },
},{
    path:"/",
    component:AsyncChat,
    exact:true
}];


const AppRoutes:React.FC<IProps> = ({messageData,appConfig})=>{

    const location = useLocation();


    useEffect(()=>{
        if(location.pathname.startsWith("/config")){
            messageData.changeType("config")
        }else{
            messageData.changeType(location.pathname.replace("/",""))
        }
    },[location,messageData])

  return (<Routes>
    {
        pageList.map((item,index)=>{
            const AppComponent:any=item.component;
            return (<Route  key={index} path={item.path} Component={(props)=><AppComponent key={index} {...item.props}{...props} store={messageData} config={appConfig}></AppComponent>} >
                </Route>)
        })
    }
</Routes>  );
};

export default AppRoutes;