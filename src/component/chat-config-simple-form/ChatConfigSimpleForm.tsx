import React  from 'react';
import {  Form,Slider } from 'antd';
import { observer } from "mobx-react"
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import {IAppConfig} from '../../store/AppConfig';
import './ChatConfigSimpleForm.css'
import type { SliderMarks } from 'antd/es/slider';

type IProps={
  config:IAppConfig;
}
const ChatConfigForm: React.FC<IProps> = ({config})=>{

    const [form] = Form.useForm();
    const { t } = useTranslation();

    let model = Form.useWatch('model', form);
    let temperature = Form.useWatch('temperature', form);
    let presence_penalty = Form.useWatch('presence_penalty', form);
    let frequency_penalty = Form.useWatch('frequency_penalty', form);
    let max_tokens = Form.useWatch('max_tokens', form);

    const marks: SliderMarks = {
      0: t('Precise'),
      1: t('Balanced'),
      2: t('Creative'),
    };

    const save = () => {
      config.saveChatConfig({
        model:model,
        temperature:temperature,
        presence_penalty:presence_penalty,
        frequency_penalty:frequency_penalty,
        max_tokens:max_tokens
      });
    };

    const chatModelList = ["gpt-3.5-turbo","gpt-3.5-turbo-0301"
    ,"gpt-4"]
    
    return (
      <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={config.getChatConfig()}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("Model")} name="model" tooltip={t("which models work with the Chat API.")}>
              <Select onChange={save}
                options={chatModelList.map((item) => ({ label: item, value: item }))}
              />
        </Form.Item>
        <Form.Item label={t("Choose a conversation style")} name="temperature" 
        tooltip={t("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.")}>
              <Slider      onChange={save} marks={marks} included={false} defaultValue={1}     step={0.01}      min={0}
          max={2}/>
        </Form.Item>


        
        <Form.Item label={t("presence_penalty")} name="presence_penalty" 
        tooltip={t("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.")}>
          <InputNumber min={-2} max={2} onChange={save}></InputNumber>
        </Form.Item>

        <Form.Item label={t("frequency_penalty")} name="frequency_penalty" 
         tooltip={t("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.")}>
          <InputNumber min={-2} max={2} onChange={save}></InputNumber>
        </Form.Item>

        <Form.Item label={t("max_tokens")} name="max_tokens" tooltip={t("max length of GPT return")}>
          <InputNumber min={0} onChange={save}></InputNumber>
        </Form.Item>
      </Form>
      </div>
    );
};

export default observer(ChatConfigForm);