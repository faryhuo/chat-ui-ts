import { Button, Divider, Popconfirm, Dropdown, Radio } from 'antd';
import type { MenuProps } from 'antd';
import './ChatList.css';
import { observer } from "mobx-react-lite";
import { Input, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { IMessage, ISessionMenu } from '../../store/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faTrashCan, faCheck, faShare, faStar, faTools } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ChatShareSteps from '../chat-share-steps/ChatShareSteps';
import QueueAnim from 'rc-queue-anim';
import { formatShortDate, isSameDay } from '../../utils/dateUtils';
import {IUserProflie} from '../../store/UserProfile';
import ModelAmount from '../model-amount/ModelAmount';
import InfiniteScroll from 'react-infinite-scroll-component';
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
          description={t('Are you want to delete the chat?')}
          onConfirm={(e) => clear(item.key, e)}
          onCancel={(e) => e?.stopPropagation()}
          okText={t("Yes")}
          cancelText={t("No")}
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
        <Link className="session-item-link" to={`/chat/${item.key}`}>
          <div className="icon">
            {/* <Avatar src={icon} /> */}
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

  const clearHistory=()=>{
    const idList:string[]=[];
    historyDataSouce.forEach(item=>{
      idList.push(item.key);
    })
    if(idList.length===0){
      return;
    }
    store.clearHistoryChat(idList)
  }

  const clearHistoryButton=(<Popconfirm
    placement="bottom"
    title={t('Message')}
    description={t('Are you want to clear the history.')}
    onConfirm={clearHistory}
    okText={t("Yes")}
    cancelText={t("No")}
  >

  <Button size='small' style={{width:'100%'}} icon={<FontAwesomeIcon icon={faTrashCan} />}>
      &nbsp; {t('Clear all history')}
  </Button>
  </Popconfirm>)
  
  console.log(store.sessionTotal)

  return (<div className="session-list-wrapper">
      <div className="session-list" id='chat-session-list'>
        <div className="chat-type">
        <Radio.Group  style={{ marginBottom: 16 }}>
          <Radio.Button value="small">History</Radio.Button>
          <Radio.Button value="middle">Favorite</Radio.Button>
        </Radio.Group>
        </div>
          <div style={{padding:5}}>
                    {clearHistoryButton}
          </div>
        {<InfiniteScroll
          dataLength={store.sessionTotal} //This is important field to render the next data
          next={store.getChatHistory}
          hasMore={dataSouce.length<store.sessionTotal}
          loader={<h4>Loading...</h4>}
          scrollableTarget="chat-session-list"
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
         {dataSouce.map((item: ISessionMenu) => renderItem(item))}
        </InfiniteScroll>}
      </div>
      <ModelAmount></ModelAmount>
      <Modal
        open={open}
        title={t("Share History")}
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