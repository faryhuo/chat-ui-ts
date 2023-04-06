import ConfigPage from '../config/Config';
import Chat from '../chat/Chat';
import Code from '../code/Code';
import ImageEdit from '../image-edit/ImageEdit';
import Frame from '../iframe/Iframe';
import { Routes, Route,useLocation  } from 'react-router-dom';
import React, { useEffect } from 'react';

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
    path:"/config",
    component:ConfigPage
},{
    path:"/tips",
    component:Frame,
    props:{
        src:"https://newzone.top/chatgpt/"
    },
},{
    path:"/",
    component:Chat,
    exact:true
}]

const AppRoutes = ({messageData,appConfig})=>{

    const location = useLocation();


    useEffect(()=>{
        messageData.changeType(location.pathname.replace("/",""))
    },[location,messageData])

  return (<Routes>
    {
        pageList.map((item)=>{
            const AppComponent=item.component;
            return (<Route key={item.path} exact={item.exact?item.exact:false} path={item.path} Component={(props)=><AppComponent {...item.props}{...props} store={messageData} config={appConfig}></AppComponent>} >
                </Route>)
        })
    }
</Routes>  );
};

export default AppRoutes;