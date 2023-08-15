import { List,Image } from 'antd';
import React from 'react';
import './PaintingSquare.css'
type IProps={
  src:string
}

const PaintingSquare:React.FC<IProps> = ({src})=>{
  const data=[{
    url:"",
    width:256,
    height:256
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:256,
    height:160
  },{
    url:"",
    width:160,
    height:256
  },{
    url:"",
    width:256,
    height:160
  }]
    return (
    <div className="painting-square-page">
      <div>
        <List grid={{gutter:5}} dataSource={data} renderItem={(item)=>(
          <div className="painting-square-image-item">
            <Image src={item.url} width={item.width} height={item.width}></Image>
          </div>
        )}>

        </List>
      </div>
    </div>)
}

export default PaintingSquare;