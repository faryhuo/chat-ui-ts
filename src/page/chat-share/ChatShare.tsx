import { useParams } from 'react-router-dom';
import {
    MessageList,
} from '../../component';
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import './ChatShare.css'

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const ChatShare: React.FC<IProps> = ({store,config})=>{


    const {id}=useParams();

    store.selectChat(id as string);

    return (
    <div className="message-share-page">            
        <MessageList  config={config} store={store}></MessageList>
    </div>)
}

export default ChatShare;