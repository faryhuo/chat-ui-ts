import React, { useState } from 'react';
import './gpts.css'
import data from './gptsData'
import { Card, Input, List } from 'antd';
import store from '../../store/MessageData';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
type IProps={
}

const GPTs:React.FC<IProps> = ()=>{

    const navigate = useNavigate(); // 获取 navigate 函数

//     const gptsData = []
// for(var i=0;i<1000;i=i+24){
// 	fetch('https://gpts.ddaiai.com/open/gptsapi/list/'+i).then((data)=>data.json()).then(
// 	(rep)=>{
// 		if(rep.data.list){
// 		rep.data.list.forEach(item=>{
// 		  const item2={
// 			 icon:item.logo,
// 			 description:item.info,
// 			 gptsId:item.gid,
// 			 author_name:item.author_name,
// 			 title: item.name
// 		   };
// 		   gptsData.push(item2)
// 		})
// 		}
// 	})
// }
    
    const [dataSource,setDataSource]=useState(data);
   
    const [currentPage,setCurrentPage]=useState(1);
    const [pageSize,setPageSize]=useState(30);

    const onSearch=(name:string)=>{
        setCurrentPage(1);
        if(!name){
            setDataSource(data);
            return;
        }
        const options = {
            keys: [{ name: 'title', weight: 1.5 }
                , { name: 'description', weight:1 }, { name: 'author_name', weight: 0.5 }],
            includeMatches: true
        } // 搜索配置，可以配置多个查找字段
        const fuse = new Fuse(data, options);
        const result = fuse.search(name);
        const list = [];
        result.forEach((item) => {
            list.push(item.item);
        })
        setDataSource(list);
    }
    

    const selectGPTS=(gptsId:string,desc:string,title:string)=>{
        store.changeType("chat");
        store.addChatWithGPTs(gptsId,desc,title).then((chatId)=>{
            navigate(`/chat/${chatId}`);
        });
    }  
    return (
    <div className="gpts-pages-container">
        <Card>
            <div className='gtps-search-input'>
                <Input.Search width={200} placeholder="input search text" onChange={(e)=>{onSearch(e.target.value)}} onSearch={(e)=>{onSearch(e)}} enterButton  />
            </div>
            <List    
            grid={{ gutter: 16, column: Math.floor(window.innerWidth/256) }}
            dataSource={dataSource}
            pagination={{ position:"bottom", align:"center",hideOnSinglePage:true,current:currentPage,pageSize,onChange(page, pageSize) {
                setCurrentPage(page);
                setPageSize(pageSize)
              }}}
            renderItem={(item) => (
            <List.Item 
            onClick={()=>selectGPTS(item.gptsId,item.description,item.title)}
            >
                <Card 
                title={<div>
                    <img src={item.icon} alt="" style={{width:30,height:30,marginRight:10}}></img>
                    <span>{item.title}</span></div>}>{item.description}
                    </Card>
            </List.Item>
            )}>
            </List>
        </Card>
    </div>)
}

export default GPTs;