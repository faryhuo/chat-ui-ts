import React from 'react';
import { Button, Form, Switch, Radio, message, Select } from 'antd';
import { observer } from "mobx-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCheck } from '@fortawesome/free-solid-svg-icons'
// import {CodeStyleInput} from '../../component'
import { useTranslation } from 'react-i18next';
import { HexColorPicker } from "react-colorful";
import { IAppConfig } from '../../store/AppConfig';


type IProps = {
  config: IAppConfig;
}

const BaseConfigForm: React.FC<IProps> = ({ config }) => {

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { t } = useTranslation();

  let imageSize = Form.useWatch('imageSize', form);
  // let codeStyle = Form.useWatch('codeStyle', form);
  let textLanguage = Form.useWatch('textLanguage', form);
  let isSlowMsg4AddChat = Form.useWatch('isSlowMsg4AddChat', form);
  let colorPrimary = Form.useWatch('colorPrimary', form);
  let style = Form.useWatch('style', form);
  let audioVoice = Form.useWatch('audioVoice', form);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: t('Updated success'),
    });
  };

  const save = () => {
    config.save({
      imageSize: imageSize,
      // codeStyle:codeStyle,
      textLanguage: textLanguage,
      isSlowMsg4AddChat: isSlowMsg4AddChat,
      colorPrimary: colorPrimary,
      audioVoice: audioVoice,
      style: style
    });
    success();
  };

  // const ruleMessage={
  //   "required":t('This is a required field')
  // }

  return (
    <Form
      form={form}
      layout={config.formLayout}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 12 }}
      initialValues={config.getConfigJson()}
      style={{ padding: "10px" }}
    >
      <Form.Item label={t("Style")} name="style">
        <Radio.Group>
          <Radio.Button key={1} value="chat">Style 1</Radio.Button>
          <Radio.Button key={2} value="antd">Style 2</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t("Text Language")} name="textLanguage">
        <Radio.Group>
          <Radio.Button key={1} value="en">English</Radio.Button>
          <Radio.Button key={2} value="zh">中文(简体)</Radio.Button>
          <Radio.Button key={3} value="zh_tw">中文 (繁體)</Radio.Button>
          <Radio.Button key={4} value="ja">日本語</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t("Audio Style")} name="audioVoice">
        <Select options={[
          { value: 'alloy', label: 'alloy' },
          { value: 'echo', label: 'echo' },
          { value: 'fable', label: 'fable' },
          { value: 'onyx', label: 'onyx' },
          { value: 'nova', label: 'nova' },
          { value: 'shimmer', label: 'shimmer' },
        ]}
        />
      </Form.Item>
      <Form.Item label={t("Color Primary")} valuePropName="color"
        name="colorPrimary">
        <HexColorPicker />
      </Form.Item>
      {/* <Form.Item label={t("Code Style")}
         rules={[{ required: true }]}
        tooltip={ruleMessage.required}  name="codeStyle">
          <CodeStyleInput ></CodeStyleInput>
        </Form.Item> */}
      <Form.Item label={t("Default Message")}
        name="isSlowMsg4AddChat" valuePropName="checked">
        <Switch
          checkedChildren={<FontAwesomeIcon icon={faCheck} />}
          unCheckedChildren={<FontAwesomeIcon icon={faClose} />}
        />

      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
        <Button type="primary" onClick={save}>{t('Save')}</Button>
      </Form.Item>
      {contextHolder}
    </Form>
  );
};

export default observer(BaseConfigForm);