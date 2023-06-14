import React  from 'react';
import {  Form,Slider,Button } from 'antd';
import { observer } from "mobx-react"
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import {IAppConfig} from '../../store/AppConfig';
import './ChatConfigSimpleForm.css'
import type { SliderMarks } from 'antd/es/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

type IProps={
  config:IAppConfig;
  onClose:()=>void;
}
const ChatConfigForm: React.FC<IProps> = ({config,onClose})=>{

    const [form] = Form.useForm();
    const { t } = useTranslation();


    const marks: SliderMarks = {
      0: t('Precise'),
      1: t('Balanced'),
      2: t('Creative'),
    };

    const save = (value:any,field:string) => {
      let params:any={};
      params[field]=value;
      config.chatConfig.saveAPIConfig(params);
    };
    
    return (
      <div>
     <Button shape="circle" icon={<FontAwesomeIcon icon={faClose}  />} style={{position:'absolute',
    right: 5,
    top:10}}
    onClick={onClose}></Button>
      <Form
        form={form}
        layout="vertical"
        initialValues={config.chatConfig.getAPIConfig()}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("Model")} name="model" tooltip={t("which models work with the Chat API.")}>
              <Select onChange={(e)=>save(e,"model")}
                options={config.chatConfig.chatModelList.map((item) => ({ label: item, value: item }))}
              />
        </Form.Item>
        <Form.Item label={t("Choose a conversation style")} name="temperature" 
        tooltip={t("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.")}>
              <Slider   onChange={(e)=>save(e,"temperature")} marks={marks} included={false} 
              defaultValue={1}     step={0.01}      min={0}
          max={2}/>
        </Form.Item>


        
        <Form.Item label={t("presence_penalty")} name="presence_penalty" 
        tooltip={t("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.")}>
          <InputNumber min={-2} max={2} onChange={(e)=>save(e,"presence_penalty")}></InputNumber>
        </Form.Item>

        <Form.Item label={t("frequency_penalty")} name="frequency_penalty" 
         tooltip={t("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.")}>
          <InputNumber min={-2} max={2} onChange={(e)=>save(e,"frequency_penalty")}></InputNumber>
        </Form.Item>

        <Form.Item label={t("max_tokens")} name="max_tokens" tooltip={t("max length of GPT return")}>
          <InputNumber min={0} onChange={(e)=>save(e,"max_tokens")}></InputNumber>
        </Form.Item>
      </Form>
      </div>
    );
};

export default observer(ChatConfigForm);