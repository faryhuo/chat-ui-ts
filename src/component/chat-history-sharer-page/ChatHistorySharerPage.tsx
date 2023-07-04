import { observer } from "mobx-react-lite";
import {ISessiondata} from '../../store/MessageData';
import "./ChatHistorySharerPage.css";
import MessageItem from "../message-item/MessageItem";
import Markdown from "../markdown/Markdown";

type IProps={
  data:ISessiondata[];
}

const ChatHistorySharer:React.FC<IProps> = observer(({data})=>{


  return (<div className="sharer-review-page-content" id="sharer-review-page-content">
    {data.map((item,key)=>{
          return item.isSys?(<MessageItem index={key} item={item} type={"system"} key={key} 
          content={<Markdown content={item.choices?.length?item.choices[0].message.content:item.text+""}/>}></MessageItem>):
          (<MessageItem type={"user"} key={key} index={key} readonly={true}  
          content={item.text}></MessageItem>)
          })}
  </div>)
})


export default ChatHistorySharer;