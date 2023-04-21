import {useRef} from 'react';
import axios from 'axios';
import { observer } from "mobx-react-lite";
import { useState } from 'react';
import { Input,Space,Button} from 'antd';
import { AudioOutlined,PauseCircleOutlined,PushpinOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faBroom } from '@fortawesome/free-solid-svg-icons'

//import {Upload} from '../index'
import { useTranslation } from 'react-i18next';
import './SendButton.css'
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';

type IProps={
  config:IAppConfig;
  store:IMessage;
  setBtnHeight:(height:number)=>void;
}


const { TextArea } = Input;

const SendButton:React.FC<IProps> = observer(({store,config,setBtnHeight})=>{
    const [message, setMessage] = useState("");
    const [minRow, setMinRow] = useState(2);

    const [isStart, setStart] = useState(false);
    const {iatRecorder}=config;
    const {t} = useTranslation();
    const btnRef=useRef(null);
    const resizeHeight=()=>{
      setBtnHeight((btnRef?.current as any)?.getBoundingClientRect()?.height+5);

    }

    // useEffect(()=>{
    //   if(btnRef.current){
    //     setTimeout(()=>{
    //       resizeHeight();
    //     })
    //   }
    // },[message])



    let timeObj: string | number | NodeJS.Timeout | undefined;
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


    iatRecorder.onTextChange = (text:string)=>{
      if(store.isType){
        setMessage(text);
      } 
    }

    
    const callChatAPI=(chatId: string)=>{
      store.callChatAPI(chatId);
    }

    const callImageAPI=(chatId: string,queryUrl: string | null)=>{
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
          store.handleAPIError(response.data.data.error,chatId);
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
        store.handleAPIError(err,chatId);
      });
    }


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
        },chatId)
        if(store.type==="image"){
          callImageAPI(chatId,null);
        }else {
          callChatAPI(chatId);
        }
        store.disableType(chatId);
        setMessage("");
    }

    const typeMsg= (e:any)=>{
      setMessage(e.target.value)  
    }


    const resizeInput= ()=>{
      setMinRow(minRow===2?9:2)
    }

    return (<div ref={btnRef}>
      <Space.Compact style={{ width: '100%' }}>
          <TextArea
          value={message}
          placeholder={t("Type here...")as string}
          size="large"
          onChange={(e) => typeMsg(e)}
          autoSize={{ minRows: minRow, maxRows: 8 }}
          onPressEnter={sendMsg}
          onResize={resizeHeight}
        />
        <div className="sent-btn-actions"  >
        <Button disabled={store.isType===false} shape="circle"onClick={convertMsg}
          icon={isStart?<PauseCircleOutlined />:<AudioOutlined/>}/>
          {/* <Button  className="resize-btn" disabled={store.isType===false}  shape="circle" onClick={sendMsg}
          icon={
            <Upload store={store} config={config} callChatAPI={callChatAPI} callImageAPI={callImageAPI} ></Upload>
          }/> */}
          <Button className="resize-btn" shape="circle" icon={<FontAwesomeIcon icon={faBroom}  />} size="large" 
             onClick={()=>{store.addChat()}}></Button>
        </div>
        <div className="sent-btn-actions"  >
        <Button disabled={store.isType===false}  type="primary" shape="circle" onClick={sendMsg}
         icon={<FontAwesomeIcon icon={faPaperPlane }/>}/>
        <Button className="resize-btn"  shape="circle" onClick={resizeInput} icon={<PushpinOutlined />}/>
        </div>
      </Space.Compact>
    </div>);
});

export default SendButton;