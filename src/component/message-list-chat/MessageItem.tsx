import './MessageItem.less'
import React, { useEffect, useRef, useState } from 'react';
import { MessageItem } from '../index';
import { observer } from "mobx-react-lite"
import { Card } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList'
import ChatConfigList from '../chat-config-list/ChatConfigList'
import { IAppConfig } from '../../store/AppConfig';
import { IMessage, ISessiondata } from '../../store/MessageData';
import { throttle } from '../../utils/CommonUtils'

interface IProps {
  config: IAppConfig;
  store: IMessage;
  renderMessage: (item: ISessiondata) => JSX.Element;
}

const MessageItemChat: React.FC<IProps> = observer(({ store, config, renderMessage }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const scrollMessage = throttle((ref: React.RefObject<HTMLDivElement>, isOpen: boolean) => {
    if (ref.current && !isOpen) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);

  useEffect(() => {
    scrollMessage(messagesEndRef, open);
  }, [store.latestMessage, open, scrollMessage]);

  const renderMessageItem = (item: ISessiondata, index: number) => {
    const commonProps = {
      store,
      key: index,
      index,
      content: renderMessage(item)
    };

    return item.isSys ? (
      <MessageItem {...commonProps} item={item} type="system" />
    ) : (
      <MessageItem {...commonProps} type="user" text={item.text} />
    );
  };

  return (
    <div className="message-list-wrapper-chat" style={{ height: '100%' }}>
      <Card 
        title={store.currentChatName}
        className="antd-card-wrapper"
        extra={!store.isGPTs && <ActionBtnList onOpen={() => setOpen(true)} store={store} config={config} />}
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollToBottom>
          <div>
            {store.data.map((item, index) => renderMessageItem(item, index))}
          </div>
          <div ref={messagesEndRef} />
        </ScrollToBottom>
        <ChatConfigList 
          store={store}
          open={open}
          onClose={() => setOpen(false)}
        />
      </Card>
    </div>
  );
});

export default MessageItemChat;