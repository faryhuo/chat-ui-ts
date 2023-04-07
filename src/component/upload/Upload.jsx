import React from 'react';
import { PlusOutlined, } from '@ant-design/icons';
import { Upload, message } from 'antd';

const AppUpload = ({store,config,callChatAPI,callImageAPI})=>{
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
    const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
    };
    
      
    
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
        return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
            let fileName=info.file.response.data;
            store.addData({
                type:"image",
                image:{
                    uri:url,
                    width:256,
                    height:256
                },
                isUser:true,
                isSys:true
              });
              let chatId=store.activeSession+"";
              if(store.type==="chat"){
                callChatAPI(chatId,`${config.imageUploadUrl}/${fileName}`);  
              }else if(store.type==="image"){
                const queryUrl = `${config.variationsImageUrl}?image=${fileName}&uuid=${store.activeSession}&size=${config.imageSize}`;  
                callImageAPI(chatId,queryUrl);  
              }
        });
        }
    };

    return (<div style={{display:"inline-block",marginRight:10}}>           
          <Upload
          method="post"
        showUploadList={false}
        action={config.imageUploadUrl}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        style={{width:20}}
      >
        <PlusOutlined></PlusOutlined>
      </Upload></div>)
}

export default  AppUpload;