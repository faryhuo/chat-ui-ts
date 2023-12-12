import React, { useState } from 'react';
import { Button, Pagination, Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRefresh, faStop } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { IMessage, ISessiondata, getMessageFromContent } from '../../store/MessageData';
import './MsgActionBtn.css';
import { isMobile } from 'react-device-detect';
type IProps = {
  store: IMessage;
  item: ISessiondata;
  index: number;
}
const MsgActionBtn: React.FC<IProps> = observer(({ store, item, index }) => {

  const { t } = useTranslation();
  const [audioSrc, setAudioSrc] = useState('');
  const [voice, setVoice] = useState('alloy');

  const [isPlaying, setIsPlaying] = useState(false);

  const isSlowRegenerateBtn = () => {
    return (store.data.indexOf(item) === store.data.length - 1) && item.isDefault !== true && (item.stream ? item.end : true)
  }

  const showDetails = () => {
    item.isDetails = !!!item.isDetails;
  }

  const handlePlay = () => {
    if (!audioSrc && item.choices && item.choices.length > 0) {
      let audio = store.speech(getMessageFromContent(item.choices[0]?.message?.content), voice)
      setIsPlaying(!isPlaying);
      setAudioSrc(audio);
    }
  };


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
          {isSlowRegenerateBtn() ? <Button onClick={store.regenerateResponse}
            icon={<FontAwesomeIcon icon={faRefresh} style={{ marginRight: 5 }}></FontAwesomeIcon>}>
            {t('Regenerate')}</Button> : <Button style={item.hasShowDetails === true ? {} : { "display": "none" }} type="link" className="msg-link-btn" onClick={showDetails}>
            {item.isDetails === false ? t('Show All') : t("Hide")}
          </Button>}
        </div>
      </div>
      {/* {item.choices && item.choices.length > 0 && <div>
        <Space wrap>
          音色:
          <Select disabled={isPlaying}
            defaultValue="alloy"
            value={voice}
            style={{ width: 120 }}
            onChange={(e) => setVoice(e)}
            options={[
              { value: 'alloy', label: 'alloy' },
              { value: 'echo', label: 'echo' },
              { value: 'fable', label: 'fable' },
              { value: 'onyx', label: 'onyx' },
              { value: 'nova', label: 'nova' },
              { value: 'shimmer', label: 'shimmer' },
            ]}
          />
          {!isPlaying ? <Button
            shape="circle"
            onClick={() => handlePlay()}
            style={{ backgroundColor: "#f0f0f0", marginLeft: 10 }}
            size="small" icon={<FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>}></Button> :
            <Button
              shape="circle"
              onClick={() => { setAudioSrc(''); setIsPlaying(false) }}
              style={{ backgroundColor: "#f0f0f0", marginLeft: 10 }}
              size="small" icon={<FontAwesomeIcon icon={faStop}></FontAwesomeIcon>}></Button>}
        </Space>
        {audioSrc && <div style={{ display: isMobile ? 'none' : 'block' }}>
          <Space wrap>
            <audio src={audioSrc} controls={true} autoPlay={isPlaying} />
          </Space>
        </div>}
      </div>} */}
    </>
  );
})

export default MsgActionBtn;