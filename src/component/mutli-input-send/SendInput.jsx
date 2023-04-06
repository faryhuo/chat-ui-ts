import React, { useState } from 'react';
import {Input } from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { observer } from "mobx-react-lite";

const SendInput = observer(({store,config})=>{
    const { Search,TextArea } = Input;
    const {t} =useTranslation();

    const [input,setInput] = useState("");
    const [message,setMessage] = useState("");


    const typeMsg=(e)=>{
        setMessage(e.target.value);
    }

    
    const typeInput=(e)=>{
        setInput(e.target.value)
    }
    const sendMsg=(e)=>{
        if(input && message){
            let chatId=store.activeSession+"";
            store.addData({
              code:input
            });
            store.addData({
                text:message
            });
            callEditAPI(chatId,input,message);
            setMessage("");
            setInput("");
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
  

    const callEditAPI=(chatId,input,instruction)=>{
        const params= Object.assign({},{
          input: input,
          instruction:instruction
        },config.codeEditConfig);
        const queryUrl = config.editsUrl;
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


    return (<div>           
        <TextArea
      showCount
      style={{ height: 120, marginBottom: 24 }}
      onChange={(e) => typeInput(e)}
      value={input}
      placeholder={t("Type your code here")}
    />
          <Search
      value={message}
        placeholder={t("Instructions")}
        enterButton={t("Sent")}
      size="large"
      disabled={store.isType===false}
      onChange={(e) => typeMsg(e)}
      onSearch={() => sendMsg()}
    />
    </div>)
})

export default SendInput;