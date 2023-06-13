import ConfigPage from '../config/Config';
import Chat from '../chat/Chat';
import Code from '../code/Code';
import ImageEdit from '../image-edit/ImageEdit';
import Frame from '../iframe/Iframe';
import { Routes, Route,useLocation  } from 'react-router-dom';
import React, { useEffect } from 'react';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
type IProps={
    appConfig:IAppConfig;
  messageData:IMessage;
}
const pageList=[{
    path:"/chat",
    component:Chat
},{
    path:"/image",
    component:Chat
},{
    path:"/code",
    component:Code
},{
    path:"/image_edit",
    component:ImageEdit
},{
    path:"/config/:id",
    component:ConfigPage
},{
    path:"/tips",
    component:Frame,
    props:{
        src:"https://newzone.top/chatgpt/"
    },
},{
    path:"/sd",
    component:Frame,
    props:{
        src:"https://e152ddfadd87f15ffb.gradio.live"
    },
},{
    path:"/",
    component:Chat,
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