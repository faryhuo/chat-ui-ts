import React  from 'react';
import { Button, Form,message } from 'antd';
import { observer } from "mobx-react"
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import {IAppConfig} from '../../store/AppConfig';
import './CodeEditConfigForm.css'

type IProps={
  config:IAppConfig;
}

const CodeEditConfigForm : React.FC<IProps> = ({config})=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();

    let model = Form.useWatch('model', form);
    let temperature = Form.useWatch('temperature', form);
    let top_p = Form.useWatch('top_p', form);

    const success = () => {
      messageApi.open({
        type: 'success',
        content: t<string>('Updated success'),
      });
    };

    const save = () => {
      config.saveCodeEditConfig({
        model:model,
        temperature:temperature,
        top_p:top_p
      });
      success();
    };

    const chatModelList = ["code-davinci-edit-001","text-davinci-edit-001"]
    
    return (
      <div>
        {contextHolder}      
      <Form
        form={form}
        layout={config.formLayout as any}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        style={{padding:"10px"}}        
        initialValues={config.getCodeEditConfig()}
      >
        <Form.Item label={t<string>("Model")} name="model" tooltip={t<string>("which models work with the Chat API.")}>
              <Select
                options={chatModelList.map((item) => ({ label: item, value: item }))}
              />
        </Form.Item>

        <Form.Item label={t<string>("temperature")} name="temperature" 
        tooltip={t<string>("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.")}>
          <InputNumber min={0} max={2}></InputNumber>
        </Form.Item>

        <Form.Item label={t<string>("top_p")} name="top_p" tooltip={t<string>("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.")} >
          <InputNumber min={0} max={2} ></InputNumber>
        </Form.Item>

        
        <Form.Item wrapperCol={ { offset: 4, span: 12 }}>
          <Button type="primary" onClick={save}>{t('Save')}</Button>
        </Form.Item>
      </Form>
      </div>
    );
};

export default observer(CodeEditConfigForm);