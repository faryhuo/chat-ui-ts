import React, { useRef, useState } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Tooltip, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDeleteLeft, faLanguage, faPlay, faRefresh, faStop } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { IMessage, ISessiondata, getMessageFromChoices, getMessageFromMessageContent } from '../../store/MessageData';
import './MsgActionBtn.css';
import { isMobile } from 'react-device-detect';
import copy from 'copy-to-clipboard';
import config from '../../store/AppConfig';
import axios from 'axios';
import apiSetting from '../../store/APISetting';
type IProps = {
  store: IMessage;
  item: ISessiondata;
  index: number;
}
const MsgActionBtn: React.FC<IProps> = observer(({ store, item, index }) => {
  const audioRef: any = useRef(null);

  const { t } = useTranslation();
  const [audioSrc, setAudioSrc] = useState('');
  const [messageApi, contextHolder] = message.useMessage();

  const [isPlaying, setIsPlaying] = useState(false);

  const [translateLoading,setTranslateLoading]= useState(false);
  const [audioLoading,setAudioLoading]= useState(false);


  const isShowBtn = () => {
    return item.isDefault !== true && (item.stream ? item.end : true)
  }

  const isSlowRegenerateBtn = () => {
    return (store.data.indexOf(item) === store.data.length - 1) && isShowBtn();
  }

  const showDetails = () => {
    item.isDetails = !!!item.isDetails;
  }

  const handlePlay = () => {
    if (item.choices && item.choices.length > 0) {
      setAudioLoading(true);
      store.speech(item)
        .then((audio) => {
          if (audioSrc === audio) {
            audioRef.current?.play();
          } else {
            setAudioSrc(audio);
          }
        }).finally(()=>{
          setTimeout(()=>{
            setAudioLoading(false);
            setIsPlaying(!isPlaying);
          })
        })
    }
  };

  const closePlay=() => { 
    audioRef.current?.pause();
    setIsPlaying(false);
    setAudioLoading(false);
  }

  const copyText = () => {
    let msg=getMessageFromChoices(item.choices);
    if(item.translateText && item.showTranslateText){
      msg=item.translateText;
    }
    copy(msg);
    messageApi.success(t('Copied'));
  }

  const deleteMessage = () => {
    store.deleteMessage(store.activeSession+"",index);
  }

  const translate=async (text:string,index:number)=>{
    setTranslateLoading(true);
    item.audioId="";
    const record= store.getChatInfoByChatId(store.activeSession+"").data[index];
    if(record.translateText){
      record.showTranslateText=!record.showTranslateText;
      setTranslateLoading(false);
      return;
    }
    const translateText= await axios({
      method: "post",
      url: apiSetting.translateUrl,
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
      }
      ,data:JSON.stringify({
        text:text,
        targetLanguage:config.textLanguage
      })
    }).then((response)=>{
      if(response.data.data && response.data.data.translations){
        return response.data.data.translations[0].text;
      }else{
        return text;
      }
    });
    setTranslateLoading(false);
    record.translateText=translateText;
    record.showTranslateText=true;
  }


  return (
    <>
      <div className="msg-action-btn">
        <div className="msg-page-btn">
          {(store.hasHistory(item.history)) ? <Pagination
            hideOnSinglePage
            size="small" total={item?.history?.length} pageSize={1}
            style={{ marginBottom: 5 }}
            current={(item.currentIndex ? item.currentIndex : 0) + 1} onChange={(page) => { store.changeMessage(index, page - 1) }} />
            : <></>}</div><div className="msg-sent-btn">
          <div className='msg-item-buttons'>
            {isSlowRegenerateBtn() &&<Tooltip placement="top" title={t("Regenerate")}>
              <Button onClick={store.regenerateResponse} shape='circle' size='small'
                icon={<FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>}>
              </Button>
            </Tooltip>}
            {isShowBtn() && <>
            <Tooltip placement="top" title={t("Copy message")}>
              <Button onClick={copyText} shape='circle' size='small'
                icon={<FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>}>
              </Button>
            </Tooltip>
            {!isPlaying ? (
              <Tooltip placement="top" title={t("Play audio")}>
                <Button
                  shape="circle"
                  disabled={audioLoading}
                  onClick={() => handlePlay()}
                  size="small" icon={
                    <Spin spinning={audioLoading} size='small'><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></Spin>}></Button>
              </Tooltip>
            ) : (
              <Tooltip placement="top" title={t("Stop audio")}>
                <Button
                  shape="circle"
                  onClick={closePlay}
                  size="small" icon={
                    <Spin spinning={audioLoading} size='small'><FontAwesomeIcon icon={faStop}></FontAwesomeIcon></Spin>}></Button>
              </Tooltip>
            )}
          {<Tooltip placement="top" title={t("translate")}>
              <Button disabled={translateLoading} shape='circle' size='small' onClick={()=>translate(item.content?getMessageFromMessageContent(item.content):getMessageFromChoices(item.choices),index)}
                icon={<Spin spinning={translateLoading} size='small'>
                  <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon></Spin>}>
              </Button>
           </Tooltip> }
            </>
            }
           <Tooltip placement="top" title={t("Delete message")}>
           <Popconfirm
              placement="bottom"
              title={t('Message')}
              description={t('Are you want to delete the message?')}
              onConfirm={deleteMessage}
              onCancel={(e) => e?.stopPropagation()}
              okText={t("Yes")}
              cancelText={t("No")}>
              <Button shape='circle' size='small' 
                icon={<FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>}>
              </Button>
            </Popconfirm>
           </Tooltip> 
          </div> 
          {!isSlowRegenerateBtn() && <Button style={item.hasShowDetails === true ? {} : { "display": "none" }} type="link" className="msg-link-btn" onClick={showDetails}>
            {item.isDetails === false ? t('Show All') : t("Hide")}
          </Button>}
        </div>
      </div>
      <>
        {contextHolder}
        {audioSrc && <div style={{ display: isMobile ? 'none' : 'none' }}>
          <Space wrap>
            <audio ref={audioRef} src={audioSrc} controls={true} autoPlay={isPlaying} onEnded={closePlay} />
          </Space>
        </div>}</>
    </>
  );
})

export default MsgActionBtn;