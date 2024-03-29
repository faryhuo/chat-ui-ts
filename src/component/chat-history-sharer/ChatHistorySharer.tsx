import { Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faShare } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { ISession, ISessiondata } from '../../store/MessageData';
import "./ChatHistorySharer.css";
import ChatHistorySharerPage from "../chat-history-sharer-page/ChatHistorySharerPage";
import saveAs from 'file-saver';
import { useRef } from 'react';
import axios from 'axios';
import config from '../../store/AppConfig';

type IProps = {
  data: ISessiondata[];
  selects: number[];
  topic: string;
  time: Date;
}

const ChatHistorySharer: React.FC<IProps> = observer(({ data, selects, topic, time }) => {

  const { t } = useTranslation();
  const pageRef: any = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();

  const success4CopyTolink = () => {
    messageApi.open({
      type: 'success',
      content: t('Copy the link successlly, The link will expired after 1 day.'),
    });
  };
  const download = () => {
    import('html-to-image').then(({ toJpeg }) => {
      const node = document.getElementById("sharer-review-page-content");
      if (node) {
        toJpeg(node, { quality: 0.95 }).then((blob) => {
          saveAs(blob, 'chat.jpeg')
        })
      }
    })
  }

  const shareTolink = () => {
    const params: ISession = {
      favorite: false,
      isType: false,
      edit: false,
      chatId: "",
      isDone:true,
      updateDate:new Date(),
      chatName: topic,
      data: data.filter((value, index) => {
        return selects.includes(index);
      })
    };
    axios(config.api.sharingUrl, {
      method: "post",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: JSON.stringify(params)
    }).then((response) => {
      const uuid = response.data.data;
      if (uuid) {
        const url = `${window.location.origin}/share.html?uuid=${uuid}`
        navigator.clipboard.writeText(url);
        success4CopyTolink();
      }
    })
  }

  return (<div className="sharer-review-page">
    <div className="sharer-action-btn">
      <Button onClick={download} icon={<FontAwesomeIcon icon={faDownload} />}>{t('Download')}</Button>
      <Button onClick={shareTolink} icon={<FontAwesomeIcon icon={faShare} />}>{t('Share Link')}</Button>
    </div>
    <div className="sharer-review-content" ref={pageRef}>
      <ChatHistorySharerPage topic={topic} time={time} data={data.filter((value, index) => {
        return selects.includes(index);
      })}></ChatHistorySharerPage>
    </div>
    {contextHolder}
  </div>)
})


export default ChatHistorySharer;