import React from 'react';
import { Form, Slider, Button, Switch } from 'antd';
import { observer } from "mobx-react"
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { InputNumber } from 'antd';
import './ChatConfigSimpleForm.css'
import type { SliderMarks } from 'antd/es/slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import chatConfig from '../../store/ChatConfig';
import { IMessage } from '../../store/MessageData';

type IProps = {
  store: IMessage;
  onClose: () => void;
}
const ChatConfigForm: React.FC<IProps> = ({ store, onClose }) => {

  const [form] = Form.useForm();
  const { t } = useTranslation();

  const marks: SliderMarks = {
    0: t('Precise'),
    1: t('Balanced'),
    2: t('Creative'),
  };



  return (
    <div>
      <Button shape="circle" icon={<FontAwesomeIcon icon={faClose} />} style={{
        position: 'absolute',
        right: 5,
        top: 10
      }}
        onClick={onClose}></Button>
      <Form
        form={form}
        layout="vertical"
        initialValues={store.chatApiConfig}
        style={{ padding: "10px" }}
      >
        <Form.Item label={t<string>("Model")} name="model" tooltip={t<string>("which models work with the Chat API.")}>
          <Select onChange={(e) => store.setChatApiConfig("model", e)}
            options={chatConfig.chatModelList.map((item) => ({ label: item, value: item }))}
          />
        </Form.Item>
        <Form.Item label={t<string>("Choose a conversation style")} name="temperature"
          tooltip={t<string>("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.")}>
          <Slider onChange={(e) => store.setChatApiConfig("temperature", e)} marks={marks} included={false}
            step={0.01} min={0}
            max={2} />
        </Form.Item>

        <Form.Item label={t<string>("Return mode")} name="stream"
          valuePropName="checked">
          <Switch key={4} className="option-btn"
            onClick={() => { chatConfig.switchStream() }}
            checkedChildren={t<string>("Stream")}
            unCheckedChildren={t<string>("Full")}
          />
        </Form.Item>


        <Form.Item label={t<string>("presence_penalty")} name="presence_penalty"
          tooltip={t<string>("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.")}>
          <InputNumber min={-2} max={2} onChange={(e) => store.setChatApiConfig("presence_penalty", e as number)}></InputNumber>
        </Form.Item>

        <Form.Item label={t<string>("frequency_penalty")} name="frequency_penalty"
          tooltip={t<string>("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.")}>
          <InputNumber min={-2} max={2} onChange={(e) => store.setChatApiConfig("frequency_penalty", e as number)}></InputNumber>
        </Form.Item>

        <Form.Item label={t<string>("smax_tokens")} name="max_tokens" tooltip={t<string>("max length of GPT return")}>
          <InputNumber min={0} onChange={(e) => store.setChatApiConfig("max_tokens", e as any)}></InputNumber>
        </Form.Item>
      </Form>
    </div>
  );
};

export default observer(ChatConfigForm);