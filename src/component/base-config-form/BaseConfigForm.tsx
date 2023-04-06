import React  from 'react';
import { Button, Form, Input,Switch, Radio,message } from 'antd';
import { observer } from "mobx-react"
import { InfoCircleOutlined,CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {CodeStyleInput} from '../../component'
import { useTranslation } from 'react-i18next';
import { HexColorPicker } from "react-colorful";
import {IAppConfig} from '../../store/AppConfig';


type IProps={
  config:IAppConfig;
}

const BaseConfigForm: React.FC<IProps>  = ({config})=>{

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();

    let imageSize = Form.useWatch('imageSize', form);
    // let chatUrl = Form.useWatch('chatUrl', form);
    // let imageUrl = Form.useWatch('imageUrl', form);
    let codeStyle = Form.useWatch('codeStyle', form);
    let textLanguage = Form.useWatch('textLanguage', form);
    let isSlowMsg4AddChat = Form.useWatch('isSlowMsg4AddChat', form);
    let colorPrimary = Form.useWatch('colorPrimary', form);
    let style = Form.useWatch('style', form);

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Updated success',
      });
    };

    const save = () => {
      config.save({
        imageSize:imageSize,
        // chatUrl:chatUrl,
        // imageUrl:imageUrl,
        codeStyle:codeStyle,
        textLanguage:textLanguage,
        isSlowMsg4AddChat:isSlowMsg4AddChat,
        colorPrimary:colorPrimary,
        style:style
      });
      success();
    };

    const ruleMessage={
      "required":t('This is a required field')
    }

    return (
      <Form
        form={form}
        layout="vertical"
        initialValues={config.getConfigJson()}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("Style")} name="style">
          <Radio.Group>
            <Radio.Button value="chat">Style 1</Radio.Button>
            <Radio.Button value="antd">Style 2</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t("Text Language")} name="textLanguage">
          <Radio.Group>
            <Radio.Button value="en">English</Radio.Button>
            <Radio.Button value="zh">中文</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t("Image Size")} name="imageSize">
          <Radio.Group>
            <Radio.Button value="1024x1024">1024x1024</Radio.Button>
            <Radio.Button value="512x512">512x512</Radio.Button>
            <Radio.Button value="256x256">256x256</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={t("Color Primary")} valuePropName="color"
          name="colorPrimary">
          <HexColorPicker />
        </Form.Item>
        {/* <Form.Item label="Chat API Url"
         rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
        tooltip={ruleMessage.required}  name="chatUrl">
          <Input placeholder="input placeholder"/>
        </Form.Item>
        <Form.Item  rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
        name="imageUrl"
          label="Image API Url"
          tooltip={{
            title: ruleMessage.required,
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="input placeholder"  />
        </Form.Item> */}
        <Form.Item label={t("Code Style")}
         rules={[{ required: true }]}
        tooltip={ruleMessage.required}  name="codeStyle">
          <CodeStyleInput ></CodeStyleInput>
        </Form.Item>
        <Form.Item label={t("Enable pop-up message when add new chat")}
                  name="isSlowMsg4AddChat"  valuePropName="checked">
         <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />

        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={save}>Save</Button>
        </Form.Item>
        {contextHolder}
      </Form>
    );
};

export default observer(BaseConfigForm);