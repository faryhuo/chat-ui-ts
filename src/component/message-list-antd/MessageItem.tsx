import { Avatar, List, Card, Button, Input } from 'antd';
import icon from './favicon-32x32.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faClose, faCheck } from '@fortawesome/free-solid-svg-icons';
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ActionBtnList from '../session-atcion-list/SessionAtcionList'
import { IAppConfig } from '../../store/AppConfig';
import { IMessage, ISessiondata } from '../../store/MessageData';
import ChatConfigList from '../chat-config-list/ChatConfigList'
import './MessageItem.less'

interface IProps {
  config: IAppConfig;
  store: IMessage;
  renderMessage: (item: ISessiondata) => JSX.Element;
}

const { TextArea } = Input;

const MessageItem: React.FC<IProps> = observer(({ store, config, renderMessage }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const scrollMessageTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollMessage = () => {
      scrollMessageTimeout.current = null;
      if (messagesEndRef.current && !open) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (!scrollMessageTimeout.current) {
      scrollMessageTimeout.current = setTimeout(scrollMessage, 200);
    }

    return () => {
      if (scrollMessageTimeout.current) {
        clearTimeout(scrollMessageTimeout.current);
      }
    };
  }, [store.latestMessage, open]);

  const handleEditInput = (item: ISessiondata) => {
    item.isEdit = true;
  };

  const handleCancel = (item: ISessiondata) => {
    item.isEdit = false;
  };

  const handleEditAndResend = (index: number, item: ISessiondata) => {
    item.isEdit = false;
    if (store && index && item.text) {
      store.reSentMsg(index, item.text);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>, item: ISessiondata) => {
    item.text = e.target.value;
  };

  const renderActionButtons = (item: ISessiondata, key: number) => {
    return [
      <Button 
        key="edit"
        style={item.isSys || item.isEdit ? { display: "none" } : {}} 
        onClick={() => handleEditInput(item)} 
        shape="round" 
        icon={<FontAwesomeIcon icon={faPaintbrush} />}
      />,
      <Button 
        key="confirm"
        style={item.isSys || !item.isEdit ? { display: "none" } : {}} 
        onClick={() => handleEditAndResend(key, item)} 
        shape="round" 
        icon={<FontAwesomeIcon icon={faCheck} />}
      />,
      <Button 
        key="cancel"
        style={item.isSys || !item.isEdit ? { display: "none" } : {}} 
        onClick={() => handleCancel(item)} 
        shape="round" 
        icon={<FontAwesomeIcon icon={faClose} />}
      />
    ];
  };

  const renderAvatar = (isSys: boolean) => (
    isSys ? (
      <Avatar src={icon} size="large" />
    ) : (
      <Avatar
        style={{
          backgroundColor: config.colorPrimary,
          verticalAlign: 'middle',
        }}
        size="large"
      >
        User
      </Avatar>
    )
  );

  return (
    <div className="message-list-wrapper-antd">
      <Card 
        title={store.currentChatName} 
        extra={<ActionBtnList onOpen={() => setOpen(true)} store={store} config={config} />}
        style={{ width: '100%', height: '100%' }}
      >
        <ScrollToBottom>
          <List
            className="message-item-list-antd"
            itemLayout="horizontal"
          >
            {store.data.map((item, key) => (
              <List.Item 
                key={key}
                className={item.isSys ? "message-item-sys-antd" : "message-item-user-antd"}
                actions={renderActionButtons(item, key)}
              >
                <span className="message-item-sys-icon">
                  {renderAvatar(item.isSys)}
                </span>
                <div className="message-item-content-antd">
                  {item.isEdit ? (
                    <TextArea
                      value={item.text}
                      size="large"
                      style={{ maxWidth: 700 }}
                      onChange={(e) => handleContentChange(e, item)}
                      autoSize={{ minRows: 2, maxRows: 8 }}
                      maxLength={2000}
                      spellCheck
                      allowClear
                    />
                  ) : renderMessage(item)}
                </div>
              </List.Item>
            ))}
          </List>
          <div ref={messagesEndRef} />
        </ScrollToBottom>
        <ChatConfigList store={store} open={open} onClose={() => setOpen(false)} />
      </Card>
    </div>
  );
});

export default MessageItem;