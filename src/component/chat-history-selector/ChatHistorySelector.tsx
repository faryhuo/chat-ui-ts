import { Form,Radio,Button,List,Avatar  } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {ISessiondata} from '../../store/MessageData';
import './ChatHistorySelector.css';
import icon from './favicon-32x32.png';

type IProps={
  data:ISessiondata[];
  selectAll:()=>void;
  clear:()=>void;
  selects:number[];
  select:(index:number)=>void;
}

const ChatHistorySelector:React.FC<IProps> = observer(({data,selectAll,clear,selects,select})=>{

  const {t} = useTranslation();

  const [form] = Form.useForm();

  const defaultValues={
    format:"image",
    include:"Y"
  }

  return <div className="chat-history-selector">
    <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        initialValues={defaultValues}
        style={{padding:"10px"}}
      >
        <Form.Item label={t<string>("Export format")} name="format">
          <Radio.Group>
            <Radio.Button value="text">Text</Radio.Button>
            <Radio.Button value="image">Image</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t<string>("Include default message")} name="include">
          <Radio.Group>
            <Radio.Button value="Y">Yes</Radio.Button>
            <Radio.Button value="N">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>

      <div>
        <Button onClick={selectAll}>Select All</Button>
        <Button  onClick={clear}>Clear</Button>
      </div>

      <div className="share-history-list">
        <List dataSource={data}
        renderItem={(item,index)=>{
          return <div onClick={()=>select(index)} className={(selects.includes(index)?"share-history-row-selected ":"")+"share-history-row"}>
           <span className="share-history-row-title">{item.isSys?<Avatar src={icon} />:<Avatar>User</Avatar>}</span> 
           <span className="share-history-row-content">{item?.choices?.length?item?.choices[0].message?.content:item.text}</span>
          </div>
        }}>

        </List>
      </div>

  </div>
})


export default ChatHistorySelector;