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

const pageList=[{
    path:"/chat/:chatId",
    component:Chat
},{
    path:"/image",
    component:AsyncImage
},{
    path:"/image",
    component:AsyncImage
},{
    path:"/image/:chatId",
    component:AsyncImage
},
{
    path:"/painting_square",
    component:AsyncPaintingSquare
},
// {
//     path:"/code",
//     component:AsyncCode
// },
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
    component:NewChat,
    exact:true
},{
    path:"/chat",
    component:NewChat,
    exact:true
},{
    path:"/person",
    component:AsyncPersonInfoPage,
    exact:true
}];



const AppRoutes:React.FC<IProps> = ({messageData,appConfig,messageApi})=>{

    const location = useLocation();


    useEffect(()=>{
        messageData.changeTypeByUrl(location);
    },[location,messageData])

  return (<Routes>
    {
        pageList.map((item,index)=>{
            const AppComponent:any=item.component;
            return (<Route  key={index} path={item.path} Component={(props)=><AppComponent key={index} {...item.props}{...props} globalMessageApi={messageApi} store={messageData} config={appConfig}></AppComponent>} >
                </Route>)
        })
    }
</Routes>  );
};

export default AppRoutes;