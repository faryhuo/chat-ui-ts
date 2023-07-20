import React  from 'react';
import { Button, Form,message,Switch} from 'antd';
import { observer } from "mobx-react"
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faCheck } from '@fortawesome/free-solid-svg-icons'
import {IAppConfig} from '../../store/AppConfig';
import './ChatConfigForm.css'
type IProps={
  config:IAppConfig;
}
const ChatConfigForm: React.FC<IProps> = ({config})=>{

    const [form] = Form.useForm();
    const { t } = useTranslation();

    let model = Form.useWatch('model', form);
    let temperature = Form.useWatch('temperature', form);
    let top_p = Form.useWatch('top_p', form);
    let presence_penalty = Form.useWatch('presence_penalty', form);
    let frequency_penalty = Form.useWatch('frequency_penalty', form);
    let max_tokens = Form.useWatch('max_tokens', form);
    let stream = Form.useWatch('stream', form);

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Updated success',
      });
    };

    const save = () => {
      config.chatConfig.saveAPIConfig({
        model:model,
        temperature:temperature,
        top_p:top_p,
        presence_penalty:presence_penalty,
        frequency_penalty:frequency_penalty,
        max_tokens:max_tokens,
        stream:stream
      });
      success();
    };

    
    return (
      <div>
        {contextHolder}      
      <Form
        form={form}
        layout={config.formLayout as any}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        initialValues={config.chatConfig.getAPIConfig()}
        style={{padding:"10px"}}
      >
        <Form.Item label={t<string>("Model")} name="model" tooltip={t<string>("which models work with the Chat API.")}>
              <Select
                options={config.chatConfig.chatModelList.map((item) => ({ label: item, value: item }))}
              />
        </Form.Item>
        <Form.Item label={t<string>("max_tokens")} name="max_tokens" tooltip={t<string>("max length of GPT return")}>
          <InputNumber min={0} ></InputNumber>
        </Form.Item>
        <Form.Item label={t<string>("temperature")} name="temperature" 
        tooltip={t<string>("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.")}>
          <InputNumber min={0} max={2}></InputNumber>
        </Form.Item>

        <Form.Item label={t<string>("top_p")} name="top_p" tooltip={t<string>("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.")} >
          <InputNumber min={0} max={2} ></InputNumber>
        </Form.Item>
        
        <Form.Item label={t<string>("presence_penalty")} name="presence_penalty" 
        tooltip={t<string>("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.")}>
          <InputNumber min={-2} max={2}></InputNumber>
        </Form.Item>

        <Form.Item label={t<string>("frequency_penalty")} name="frequency_penalty" 
         tooltip={t<string>("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.")}>
          <InputNumber min={-2} max={2}></InputNumber>
        </Form.Item>
        <Form.Item label={t<string>("Enable stream")}
                  name="stream"  valuePropName="checked">
         <Switch
              checkedChildren={<FontAwesomeIcon icon={faCheck} />}
              unCheckedChildren={<FontAwesomeIcon icon={faClose} />}
            />

        </Form.Item>
        <Form.Item wrapperCol= { {offset: 4, span: 12 }}>
          <Button type="primary" onClick={save}>Save</Button>
        </Form.Item>
      </Form>
      </div>
    );
};

export default observer(ChatConfigForm);