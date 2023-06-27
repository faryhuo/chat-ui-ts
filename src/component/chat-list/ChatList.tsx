import { Avatar, List,Button,Popconfirm} from 'antd';
import './ChatList.css';
import { observer } from "mobx-react-lite";
import dayjs from 'dayjs';
import icon from './favicon-32x32.png';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import {IMessage} from '../../store/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faTrashCan,faCheck } from '@fortawesome/free-solid-svg-icons'


type IProps ={
  store: IMessage
}


const ChatList: React.FC<IProps>  =({store}) => {

  const {t} = useTranslation();

  const clear= (key: string,e: any) =>{
    store.clear(key);
    e.stopPropagation();
  }


  const formatDate=(date: string | number | dayjs.Dayjs | Date | null | undefined)=>{
    const dateFormat="MM-DD";
    const timeFormat="hh:mm:ss";
    const today = dayjs().startOf('day'); 
    const momentDate = dayjs(date)
    const isToday = momentDate.isSame(today, 'd')
    if(isToday){
      return dayjs(date).format(timeFormat);
    }else{
      return dayjs(date).format(dateFormat);
    }
  }

  const showChatNameEditor = (edit: any,key: any,e: { stopPropagation: () => void; })=>{
    store.updateChatStatus(!edit,key);
    e.stopPropagation();
  }

  const updateChatName = (e: { target: { value: any; }; stopPropagation: () => void; },key: any)=>{
    store.updateChatName(e.target.value,key);
    e.stopPropagation();
  }

  return  (<div className="session-list-wrapper">
        <List 
          dataSource={store.sessionList.reverse()}
          renderItem={(item:any) => (
            <List.Item key={item.key} className={item.select?"selected":""} style={item.select?{}:{}}
            onClick={()=>{store.selectChat(item.key)}}>
              {!item.edit?(<List.Item.Meta
                avatar={<Avatar src={icon} />}
                title={<span>{item.name}</span>}
                description={!item.edit && formatDate(item.date)}
              />):<Input defaultValue={item.name} onChange={(e)=>updateChatName(e,item.key)}
              addonAfter={
                <Button
                icon={<FontAwesomeIcon icon={faCheck}  />} size ="small"
                onClick={(e)=>{showChatNameEditor(item.edit,item.key,e)}}
              />
              }
              />}
              <div>
              {!item.edit && <span>
              <Button
                icon={<FontAwesomeIcon icon={faPaintbrush} />} size ="small"
                onClick={(e)=>{showChatNameEditor(item.edit,item.key,e)}}
              />
             <Popconfirm
                placement="right"
                title={t('Message')}
                description={t('Are you want to delete the chat.')}
                onConfirm={(e)=>clear(item.key,e)}
                onCancel={(e)=>e?.stopPropagation()}
                okText={t("Yes")}
                cancelText={t("No")}
              >
                 <Button onClick={(e)=>e.stopPropagation()}
                icon={<FontAwesomeIcon icon={faTrashCan} />} size ="small"/>
              </Popconfirm>
             </span>}
              </div>
            </List.Item>
          )}
        />
    </div>);
};
export default observer(ChatList);