import { Form,Radio,Button,List,Avatar  } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {ISessiondata, getMessageFromChoices} from '../../store/MessageData';
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
        <Form.Item label={t("Export format")} name="format">
          <Radio.Group>
            <Radio.Button value="text">{t('Text')}</Radio.Button>
            <Radio.Button value="image">{t('Page')}</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {/* <Form.Item label={t("Include default message")} name="include">
          <Radio.Group>
            <Radio.Button value="Y">Yes</Radio.Button>
            <Radio.Button value="N">No</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
      </Form>

      <div className="sharer-action-btn">
        <Button onClick={selectAll}>{t('Select All')}</Button>
        <Button  onClick={clear}>{t('Clear')}</Button>
      </div>

      <div className="share-history-list">
        <List dataSource={data}
        renderItem={(item,index)=>{
          return <div onClick={()=>select(index)} className={(selects.includes(index)?"share-history-row-selected ":"")+"share-history-row"}>
           <span className="share-history-row-title">{item.isSys?<Avatar src={icon} />:<Avatar>User</Avatar>}</span> 
           <span className="share-history-row-content">{item?.choices?.length?getMessageFromChoices(item?.choices):item.text}</span>
          </div>
        }}>

        </List>
      </div>

  </div>
})


export default ChatHistorySelector;