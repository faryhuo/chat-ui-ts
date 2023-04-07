import { Avatar, List,Button,Modal} from 'antd';
import './ChatList.css';
import { observer } from "mobx-react-lite";
import moment from 'moment';
import icon from './favicon-32x32.png';
import { CloseOutlined,ExclamationCircleOutlined,EditOutlined,SaveOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import {IMessage} from '../../store/MessageData';


type IProps ={
  store: IMessage
}


const ChatList: React.FC<IProps>  =({store}) => {
  const [modal,contextHolder] = Modal.useModal();

  const {t} = useTranslation();

  const clear= (key: any,e: any) =>{
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: t('Are you want to delete the chat.'),
      okText: t('Yes'),
      cancelText: t('No'),
      onOk() {
        store.clear(key);
      }
    });
    e.stopPropagation();
  }

  const formatDate=(date: moment.MomentInput)=>{
    const dateFormat="MM-DD";
    const timeFormat="hh:mm:ss";
    const today = moment().startOf('day'); 
    const momentDate = moment(date)
    const isToday = momentDate.isSame(today, 'd')
    if(isToday){
      return moment(date).format(timeFormat);
    }else{
      return moment(date).format(dateFormat);
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
          dataSource={store.sessionList}
          renderItem={(item:any) => (
            <List.Item key={item.key} className={item.select?"selected":""} style={item.select?{}:{}}
            onClick={()=>{store.selectChat(item.key)}}>
              {!item.edit?(<List.Item.Meta
                avatar={<Avatar src={icon} />}
                title={<span>{item.name}</span>}
                description={!item.edit && formatDate(item.date)}
              />):<Input defaultValue={item.name} onChange={(e)=>updateChatName(e,item.key)}
              addonAfter={<SaveOutlined onClick={(e)=>{showChatNameEditor(item.edit,item.key,e)}}/>}
              />}
              <div>
              {!item.edit && <span>
              <Button
                icon={<EditOutlined />} size ="small"
                onClick={(e)=>{showChatNameEditor(item.edit,item.key,e)}}
              />
              <Button
                icon={<CloseOutlined />} size ="small" 
                onClick={(e)=>{clear(item.key,e)}}
              /></span>}
              </div>
            </List.Item>
          )}
        />
        {contextHolder}
    </div>);
};
export default observer(ChatList);