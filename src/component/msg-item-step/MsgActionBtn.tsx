import React, { useRef, useState } from 'react';
import { Button, Pagination, Popconfirm, Space, Tooltip, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faDeleteLeft, faPlay, faRefresh, faStop } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { IMessage, ISessiondata, getMessageFromChoices } from '../../store/MessageData';
import './MsgActionBtn.css';
import { isMobile } from 'react-device-detect';
import copy from 'copy-to-clipboard';
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
      store.speech(item)
        .then((audio) => {
          if (audioSrc === audio) {
            audioRef.current?.play();
          } else {
            setAudioSrc(audio);
          }
        })
      setIsPlaying(!isPlaying);
    }
  };

  const copyText = () => {
    copy(getMessageFromChoices(item.choices));
    messageApi.success(t('Copied'));
  }

  const deleteMessage = () => {
    store.deleteMessage(store.activeSession+"",index);
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
                  onClick={() => handlePlay()}
                  size="small" icon={<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>}></Button>
              </Tooltip>
            ) : (
              <Tooltip placement="top" title={t("Stop audio")}>
                <Button
                  shape="circle"
                  onClick={() => { setAudioSrc(''); setIsPlaying(false) }}
                  size="small" icon={<FontAwesomeIcon icon={faStop}></FontAwesomeIcon>}></Button>
              </Tooltip>
            )}
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
            <audio ref={audioRef} src={audioSrc} controls={true} autoPlay={isPlaying} onEnded={() => { setIsPlaying(false) }} />
          </Space>
        </div>}</>
    </>
  );
})

export default MsgActionBtn;