import React  from 'react';
import { Button, Form,message,Switch} from 'antd';
import { observer } from "mobx-react"
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {IAppConfig} from '../../store/AppConfig';
import './ChatConfigForm.css'
type IProps={
  config:IAppConfig;
}
const ChatConfigForm: React.FC<IProps> = ({config})=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();

    let model = Form.useWatch('model', form);
    let temperature = Form.useWatch('temperature', form);
    let top_p = Form.useWatch('top_p', form);
    let presence_penalty = Form.useWatch('presence_penalty', form);
    let frequency_penalty = Form.useWatch('frequency_penalty', form);
    let max_tokens = Form.useWatch('max_tokens', form);
    let stream = Form.useWatch('stream', form);

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
        layout="vertical"
        initialValues={config.chatConfig.getAPIConfig()}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("Model")} name="model" tooltip={t("which models work with the Chat API.")}>
              <Select
                options={config.chatConfig.chatModelList.map((item) => ({ label: item, value: item }))}
              />
        </Form.Item>
        <Form.Item label={t("max_tokens")} name="max_tokens" tooltip={t("max length of GPT return")}>
          <InputNumber min={0} ></InputNumber>
        </Form.Item>
        <Form.Item label={t("temperature")} name="temperature" 
        tooltip={t("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.")}>
          <InputNumber min={0} max={2}></InputNumber>
        </Form.Item>

        <Form.Item label={t("top_p")} name="top_p" tooltip={t("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.")} >
          <InputNumber min={0} max={2} ></InputNumber>
        </Form.Item>
        
        <Form.Item label={t("presence_penalty")} name="presence_penalty" 
        tooltip={t("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.")}>
          <InputNumber min={-2} max={2}></InputNumber>
        </Form.Item>

        <Form.Item label={t("frequency_penalty")} name="frequency_penalty" 
         tooltip={t("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.")}>
          <InputNumber min={-2} max={2}></InputNumber>
        </Form.Item>
        <Form.Item label={t("Enable stream")}
                  name="stream"  valuePropName="checked">
         <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />

        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={save}>Save</Button>
        </Form.Item>
      </Form>
      </div>
    );
};

export default observer(ChatConfigForm);