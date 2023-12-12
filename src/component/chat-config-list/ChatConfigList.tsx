import React from 'react';
import { Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import ChatConfigSimpleForm from '../chat-config-simple-form/ChatConfigSimpleForm'
import { IMessage } from '../../store/MessageData';
type IProps = {
  store: IMessage;
  open: boolean;
  onClose: () => void;
}
const ChatConfigList: React.FC<IProps> = observer(({ store, open, onClose }) => {

  const { t } = useTranslation();

  return (<div>
    <Drawer
      title={t("API configuration")}
      placement="right"
      closable={false}
      onClose={onClose}
      open={open}
      getContainer={false}
    >
      <ChatConfigSimpleForm store={store} onClose={onClose}></ChatConfigSimpleForm>
    </Drawer></div>)
})

export default ChatConfigList;