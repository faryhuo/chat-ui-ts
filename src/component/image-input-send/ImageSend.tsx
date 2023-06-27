import React, { useState } from 'react';
import {Input, UploadFile } from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport } from '@fortawesome/free-solid-svg-icons'
import { Upload, message } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
const getBase64 = (img: Blob | undefined, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  img && reader.readAsDataURL(img);
};
const beforeUpload = (file: { type: string; size: number; }) => {
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


type IProps={
  config:IAppConfig;
  store:IMessage;
}


const ImageSend  : React.FC<IProps> = observer(({store,config})=>{
    const { Search } = Input;
    const {t} =useTranslation();

    const [message,setMessage] = useState("");
    const [image,setImage] = useState("");
    const [mask,setMask] = useState("");


    const typeMsg=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setMessage(e.target.value);
    }

    const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState();
  const [maskUrl, setMaskUrlUrl] = useState();

  const handleChange = (info: UploadChangeParam<UploadFile<any>>,type: string) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url: any) => {
        setLoading(false);
        if(type==="image"){
          setImageUrl(url);
        }else{
          setMaskUrlUrl(url);
        }
      });
      let fileName=info.file.response.data;
      if(type==="image"){
        setImage(fileName);
      }else{
        setMask(fileName);
      }
    }
  };
  const getUploadButton = (text:string)=> (
    <div>
      {loading ? <FontAwesomeIcon icon={faFileExport} /> : <FontAwesomeIcon icon={faFileExport}  />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        {text}
      </div>
    </div>
  );


    const sendMsg=()=>{
      if(message && image){
        let chatId=store.activeSession+"";
        let imageCall=image+"";
        let messageCall=message+"";
        let maskCall=mask+"";
        callImageEditAPI(chatId,imageCall,messageCall,maskCall);
      }
    }

    const handleAPIError = (err: { message: string; },chatId: string) =>{
        store.enableType(chatId);
        let msg="Error";
        if(err.message){
          msg=err.message;
        }
        store.addData({
          position:"left",
          type:"text",
          title:"Error",
          text:msg
        },chatId);
      }
  

    const callImageEditAPI=(chatId: string,image: string,message: string,mask: string)=>{
      type IParam={
        image:string;
        prompt:string;
        size?:string;
        mask?:string;
      }  
      
      let params:IParam={ 
          image: image,
          prompt: message,
          size:config.image.imageSize
        }
        if(mask){
          params.mask=mask;
        }
        const queryUrl = config.api.imageEditUrl;
        axios({
          method: "post",
          url: queryUrl,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data : JSON.stringify(params)
        }
        ).then((response)=>{
          store.enableType(chatId);
          if(response.data.data.error){
            handleAPIError(response.data.data.error,chatId);
            return;
          }
          store.enableType(chatId);
          const images = response.data.data.data;
          for(let index in images){
            let msg={
                isSys:true,
                type:"image",
                image:{
                  uri: images[index].url?images[index].url:"data:image/png;base64,"+images[index].b64_json,
                  width:256,
                  height:256
                }               
            }
            store.addData(msg,chatId);    
          }    
        }
        ,(err)=>{
            handleAPIError(err,chatId);
        });
      } 


    return (<div>           
        <div style={{display:'flex'}} className="sent-image-list">
        <Upload
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={config.api.imageUploadUrl}
        beforeUpload={beforeUpload}
        onChange={(e)=>handleChange(e,"image")}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          getUploadButton("Main")
        )}
      </Upload>
      <Upload
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={config.api.imageUploadUrl}
        beforeUpload={beforeUpload}
        onChange={(e)=>handleChange(e,"mask")}
      >
        {maskUrl ? (
          <img
            src={maskUrl}
            alt="mask"
            style={{
              width: '100%',
            }}
          />
        ) : (
          getUploadButton("Option")
        )}
      </Upload>
        </div>
          <Search
      value={message}
        placeholder={t("Instructions") as string}
        enterButton={t("Sent")}
      size="large"
      disabled={store.isType===false}
      onChange={(e) => typeMsg(e)}
      onSearch={() => sendMsg()}
    />
    </div>)
})

export default ImageSend;