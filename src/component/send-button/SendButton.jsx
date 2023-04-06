import React from 'react';
import axios from 'axios';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { Input } from 'antd';
import { AudioOutlined,PauseCircleOutlined } from '@ant-design/icons';
import {Upload} from '../index'
import { useTranslation } from 'react-i18next';


const SendButton = observer(({store,config})=>{
    const [message, setMessage] = useState("");
    const [isStart, setStart] = useState(false);
    const {iatRecorder}=config;
    const { Search } = Input;
    const {t} = useTranslation();

    let timeObj;
    const convertMsg=()=>{
      if(isStart){
        clearTimeout(timeObj);
        iatRecorder.stop();
        setStart(false);
      }else{
        setStart(true);
        iatRecorder.start();
        timeObj= setTimeout(()=>{
          iatRecorder.stop();
          setStart(false);
        },60000);
      }
    }


    iatRecorder.onTextChange = (text)=>{
      if(store.isType){
        setMessage(text);
      } 
    }


    const handleAPIError = (err,chatId) =>{
      store.enableType(chatId);
      let msg="Error";
      if(err.message){
        msg=err.message;
      }
      store.addData({
        isSys:true,
        title:"Error",
        text:msg
      },chatId);
    }
    
    const getParams=(chatConfig,msg)=>{
      let params={ 
        messages:JSON.stringify(store.getMessageListData()),
        uuid: store.activeSession,
        model: chatConfig.model,
        temperature:chatConfig.temperature,
        top_p:chatConfig.top_p,
        presence_penalty:chatConfig.presence_penalty,
        frequency_penalty:chatConfig.frequency_penalty,
        max_tokens:chatConfig.max_tokens?chatConfig.max_tokens:1024,
        stream:chatConfig.stream
      }
      return params;
    }
    const callChatAPI=(chatId,msg)=>{
      if(config.getChatConfig().stream){
        return callChatAPI4Stream(chatId,msg)
      }else{
        return callChatAPI4Http(chatId,msg)
      }
    }
    const callChatAPI4Stream=(chatId,msg)=>{
      const chatConfig=config.getChatConfig();
      const params=getParams(chatConfig,msg);
      const queryString = new URLSearchParams(params).toString();
      const queryUrl =`${config.chatStreamUrl}?${queryString}`;

      let eventSource = new EventSource(queryUrl,{
        withCredentials:false
      });
      eventSource.onmessage = function(event) {
          try{
            let data=event.data.replace("data:","").trim();
            if(!data){
              return true;
            }
            if(data==="[DONE]"){
              eventSource.close();
              store.enableType(chatId);
            }else {
              store.appendData(JSON.parse(data).choices[0].delta.content,chatId);
            }
          }catch(e){
            eventSource.close();
            store.enableType(chatId);
          }
      };
    
      eventSource.onerror = function(event) {
        eventSource.close();
        store.enableType(chatId);
      };
      let msgItem={
        isSys:true,
        choices:[{message:{content:""}}]
      }
      store.addData(msgItem,chatId);   
    } 
    const callChatAPI4Http=(chatId,msg)=>{
      const chatConfig=config.getChatConfig();
      const params=getParams(chatConfig,msg);
      const queryUrl = config.chatUrl;
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
        const choices = response.data.data.choices;
        let msg={
            isSys:true,
            choices:choices
        }
        store.addData(msg,chatId);      
      }
      ,(err)=>{
          handleAPIError(err,chatId);
      });
    } 

    const callImageAPI=(chatId,queryUrl)=>{
      if(!queryUrl){
        queryUrl = `${config.imageUrl}?message=${message}&uuid=${store.activeSession}&size=${config.imageSize}`;  
      }
      axios({
        method: "post",
        url: queryUrl,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
      ).then((response)=>{
        store.enableType(chatId);
        if(response.data.data.error){
          handleAPIError(response.data.data.error,chatId);
          return;
        }
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

    const suffix = (
      <span style={{
        fontSize: 16,
        color: '#1890ff',
      }}>
        <Upload store={store} config={config} callChatAPI={callChatAPI} callImageAPI={callImageAPI} ></Upload>
        {
        isStart?<PauseCircleOutlined
        onClick={convertMsg}/>:
      <AudioOutlined 
        onClick={convertMsg}/>}
      </span>
      )

    const sendMsg= ()=>{
        if(!message){
          return;
        }
        if(isStart){
          clearTimeout(timeObj);
          iatRecorder.stop();
          setStart(false);
        }
        let chatId=store.activeSession+"";
        store.addData({
          text:message
        })
        if(store.type==="image"){
          callImageAPI(chatId);
        }else {
          callChatAPI(chatId,message);
        }
        store.disableType(chatId);
        setMessage("");
    }

    const typeMsg= (e)=>{
      setMessage(e.target.value)  
    }
    return (<div>
      <Search
      value={message}
        placeholder={t("Type here...")}
        enterButton={t("Sent")}
      size="large"
      disabled={store.isType===false}
      onChange={(e) => typeMsg(e)}
      suffix={suffix}
      onSearch={() => sendMsg()
      }
    />
    </div>);
});

export default SendButton;