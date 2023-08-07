
import {IAppConfig} from '../../store/AppConfig';
import ImageData from '../../store/ImageData';
import './Image.css'
import { observer } from "mobx-react-lite"
import { Button, Input, Layout, List } from 'antd';
import ImageParams from '../../component/image-params/ImageParams';
import ImageDetailItem from '../../component/image-detail-item/ImageDetailItem';
import { useState } from 'react';
type IProps={
  config:IAppConfig;
}

const listLayout = {
  gutter: 16,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 3,
  xxl: 4,
};

const {Sider,Header,Content}=Layout;
const Image: React.FC<IProps> = ({config})=>{


  
    const [prompt,setPrompt]=useState("")

    const generate=()=>{
      ImageData.callMJAPI(prompt,"generate")
    }


    return (
    <div className="ai-image-page">
      <Layout>
      <Sider className="ai-image-page-sider" width="388"><ImageParams></ImageParams></Sider>
      <Layout className="ai-image-page-content">
        <Header className="ai-image-page-content-header"><span>Midjourney</span></Header>
        <Content className="ai-image-page-content-main"> 
            <div className="image-prompt-title">
            <span>你想生成什么图像?</span>
            </div>
            <div className="image-prompt-content">
              <Input.TextArea autoSize={{ minRows: 4 }} value={prompt} onChange={(e)=>setPrompt(e.target.value)}
              size="large">
                </Input.TextArea>
            </div>
            <div className="image-other-title">
               <span>不需要的元素</span>
            </div>
            <div className="image-other-content">
            <Input.TextArea autoSize={{ minRows: 4 }}  
            size="large">
              </Input.TextArea>
            </div>    
            <div className="image-action-button">
              <Button type="primary" onClick={generate}>Submit Task</Button>
            </div>
            <div className="image-history-title">
              history
            </div>
            <div className="image-history-content">
                <List grid={listLayout} dataSource={ImageData.data} renderItem={(item)=>{
                  return <ImageDetailItem data={item}></ImageDetailItem>
                }}>
                </List>
            </div>       
        </Content>
      </Layout>
    </Layout>
    </div>)
}

export default observer(Image);