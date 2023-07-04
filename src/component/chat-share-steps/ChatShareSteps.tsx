import {useState} from 'react';
import { Steps,Divider  } from 'antd';
import { useTranslation } from 'react-i18next';
import ChatHistorySelector from '../chat-history-selector/ChatHistorySelector';
import ChatHistorySharer from '../chat-history-sharer/ChatHistorySharer';
import { observer } from "mobx-react-lite";
import {ISessiondata} from '../../store/MessageData';
import "./ChatShareSteps.css";

type IProps={
  data:ISessiondata[];
}


const ChatShareSteps :React.FC<IProps> = observer(({data})=>{

    const {t} =useTranslation();
    const [current, setCurrent] = useState(0);


    const onChange = (value: number) => {
      console.log('onChange:', value);
      setCurrent(value);
    };

    const initArr=[];
    for(let i=0;i<data.length;i++){
      initArr.push(i);
    }
    const [selects,setSelects]=useState<number[]>(initArr);
  
    const selectAll=()=>{
      const arr=[];
      for(let i=0;i<data.length;i++){
        arr.push(i);
      }
      setSelects(arr);
    }
  
    
    const select=(index:number)=>{
      const arr=selects.slice(0,selects.length);
      const ind=arr.indexOf(index);
      console.log(ind);
      if(ind>=0){
        arr.splice(ind,1);
      }else{
        arr.push(index);
      }
      setSelects(arr)
    }
  
    const clear=()=>{
      setSelects([]);
    }

    const steps =[{
      title: t(`Choose`),
      content: <ChatHistorySelector select={select}
      selectAll={selectAll} selects={selects} clear={clear}
      data={data}></ChatHistorySelector>,
    },{
      title: t(`Review`),
      content: <ChatHistorySharer selects={selects}  data={data}></ChatHistorySharer>,
    }]
  

    return (<div className="chat-share-config">
      <div className="share-steps">
        <Steps
          current={current}
          onChange={onChange}
          items={steps}
        /> 
      </div>
      <Divider/>
      <div className="share-step-content">
        {steps[current].content}
      </div>
    </div>)
})

export default ChatShareSteps;