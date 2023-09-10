import { Avatar, Button, Divider, Popconfirm, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import './ChatList.css';
import { observer } from "mobx-react-lite";
import icon from './favicon-32x32.png';
import { Input, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { IMessage, ISessionMenu } from '../../store/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faTrashCan, faCheck, faShare, faStar, faTools, faAdd, faWallet } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChatShareSteps from '../chat-share-steps/ChatShareSteps';
import QueueAnim from 'rc-queue-anim';
import { formatShortDate, isSameDay } from '../../utils/dateUtils';
import userModelLimit from '../../store/UserModelLimit';
import {IUserProflie} from '../../store/UserProfile';
type IProps = {
  store: IMessage;
  userProflie:IUserProflie
}


const ChatList: React.FC<IProps> = ({ store,userProflie }) => {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>("");

  const buttonSize = "small"

  const clear = (key: string, e: any) => {
    store.clear(key);
  }


  const showChatNameEditor = (edit: boolean, key: string) => {
    store.updateChatStatus(!edit, key);
  }

  const updateChatName = (e: { target: { value: string; }; stopPropagation: () => void; }, key: string) => {
    store.updateChatName(e.target.value, key);
    e.stopPropagation();
  }

  const share = (chatId: string) => {
    store.getChatHistoryByChatId(chatId).then(()=>{
      setOpen(true);
      setCurrentChatId(chatId);
    });
  }

  const triggerFavorite = (chatId: string) => {
    store.triggerFavorite(chatId);

  }

  const handleCancel = () => {
    setOpen(false);
    setCurrentChatId("");
  }

  const dataSouce = store.sessionList.sort((a, b) => {
    return (b.date as any) - (a.date as any)
  });

  const getButtonList = (item: ISessionMenu): MenuProps['items'] => {
    return [
      {
        key: '1',
        label: (<Button
          icon={<FontAwesomeIcon icon={faPaintbrush} />} size={buttonSize} className="chat-session-action-button"
          onClick={() => { showChatNameEditor(item.edit, item.key) }}
        >&nbsp;{t('Edit')}</Button>),
      },
      {
        key: '2',
        label: (<Button
          icon={<FontAwesomeIcon icon={faShare} />} size={buttonSize} className="chat-session-action-button"
          onClick={() => { share(item.key) }}
        >&nbsp;{t('Share')}</Button>),
      },
      {
        key: '3',
        label: (<Button
          icon={<FontAwesomeIcon icon={faStar} />} size={buttonSize} className="chat-session-action-button"
          onClick={() => { triggerFavorite(item.key) }}
        >&nbsp;{item.favorite ? t('Remove') : t('Favorite')}</Button>),
      },
      {
        key: '4',
        label: (<Popconfirm
          placement="right"
          title={t('Message')}
          description={t('Are you want to delete the chat.')}
          onConfirm={(e) => clear(item.key, e)}
          onCancel={(e) => e?.stopPropagation()}
          okText={t<string>("Yes")}
          cancelText={t<string>("No")}
        >
          <Button onClick={(e) => e.stopPropagation()} className="chat-session-action-button"
            icon={<FontAwesomeIcon icon={faTrashCan} />} size={buttonSize}
          >&nbsp;{t('Delete')}</Button>
        </Popconfirm>),
      }
    ]
  };

  const renderItem = (item: ISessionMenu) => {
    return item && (<li key={item.key} className={(item.select ? "selected" : "") + " session-list-item"}>
      {!item.edit ? (
        <Link className="session-item-link" to={`/${store.type}/${item.key}`}>
          <div className="icon">
            <Avatar src={icon} />
          </div>
          <div className="content">
            <div className="session-name">{item.name}</div>
            <div className="session-date">{formatShortDate(item.date)}</div>
          </div>
        </Link>
      ) : <Input defaultValue={item.name} onChange={(e) => updateChatName(e, item.key)}
        addonAfter={
          <Button
            icon={<FontAwesomeIcon icon={faCheck} />} size={buttonSize}
            onClick={() => { showChatNameEditor(item.edit, item.key) }} />
        }
      />
      }
      <div className="session-action-btn">
        {!item.edit && <span>
          <Dropdown trigger={['click']} menu={{ items: getButtonList(item) }} placement="bottomLeft">
            <Button icon={<FontAwesomeIcon icon={faTools} />} size={buttonSize} />
          </Dropdown>
        </span>}
      </div>
    </li>
    );
  }


  const recnetDataSouce = dataSouce.filter(item => {
    return isSameDay(item.date);
  });

  const historyDataSouce = dataSouce.filter(item => {
    return !!!item.favorite && !isSameDay(item.date);
  })

  const favoriteDataSouce = dataSouce.filter(item => {
    return !!item.favorite;
  })

  const renderList = (source: ISessionMenu[]) => {
    return <QueueAnim delay={300} interval={0} className="session-list-items" component="ul" type={['right', 'left']} leaveReverse>
      {source.map((item: ISessionMenu) => renderItem(item))}
    </QueueAnim>;
  }

  const clearHistoryButton=(<Popconfirm
    placement="right"
    title={t('Message')}
    description={t('Are you want to clear the history.')}
    onConfirm={(e) => {}}
    okText={t<string>("Yes")}
    cancelText={t<string>("No")}
  >

  <Button size='small' style={{width:'100%'}} icon={<FontAwesomeIcon icon={faTrashCan} />}>
      &nbsp; {t('Clear all history')}
  </Button>
  </Popconfirm>)

  useEffect(()=>{
    userProflie.token && userModelLimit.fetchUsage(userProflie.token)
  },[userProflie.token])

  return (<div className="session-list-wrapper">
      <div className="session-list">
        <Divider>{t('Recent')}</Divider>
        {renderList(recnetDataSouce)}
        <Divider>{t('Favorite')}</Divider>
        {renderList(favoriteDataSouce)}
        <Divider>{t('History')}</Divider>
          <div style={{padding:5}}>
                    {clearHistoryButton}
          </div>
        {renderList(historyDataSouce)}
      </div>
      <div className="model-amount">
        <div className="amount-content">
          <div className="amount-left">
          <span><FontAwesomeIcon style={{color:"#faad14"}} icon={faWallet}/> {t('GPT 4 Amount')}</span>
          </div>
          <div  className="amount-right">
            <div className="amount-item">
              <div className="amount-title">
                <span>{t('Used')} : </span>
              </div>
              <div className="amount-value">
              {userModelLimit.gptUsage.usedAmount}
              </div>
            </div>
            <div className="amount-item">
              <div className="amount-title">
                <span>{t('Remaining')} : </span>
              </div>
              <div className="amount-value">
              {userModelLimit.gptUsage.remainingAmount}
              <Button style={{marginLeft:5}} size='small' icon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>}/>
              </div>
            </div>
          </div>
              
        </div>
      </div>
      <Modal
        open={open}
        title={t<string>("Share History")}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose={true}
        width={900}
      >
      <ChatShareSteps sessionData={store.getChatInfoByChatId(currentChatId) as any}></ChatShareSteps>
    </Modal>
  </div>);
};
export default observer(ChatList);