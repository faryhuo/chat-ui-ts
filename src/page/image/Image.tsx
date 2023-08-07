
import {IAppConfig} from '../../store/AppConfig';
import {IMessage} from '../../store/MessageData';
import './Image.css'
import { observer } from "mobx-react-lite"

type IProps={
  config:IAppConfig;
  store:IMessage;
}

const Image: React.FC<IProps> = ({store,config})=>{
    return (
    <div className="ai-image-page">
    </div>)
}

export default observer(Image);