import { Button, Card, Form, Input, message, Radio } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import apiSetting from '../../store/APISetting';
import userProflie from '../../store/UserProfile';
import './Feedback.css'
type IProps = {
}

const Feedback: React.FC<IProps> = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    document.title = "Feedback";
  }, []);

  const submit = () => {
    form.validateFields().then(() => {
      const requestJson = form.getFieldsValue();
      console.log(requestJson);

      fetch(apiSetting.feedbackUrl, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "token":userProflie.token
        },
        body: JSON.stringify(requestJson)
      }).then(response => { console.log(response); return response.json() })
        .then(data => {
          console.log(data);
          if (!data.error) {
            form.resetFields();
            messageApi.success("Thanks for you submit your feedback");
          } else {
            messageApi.error(data.error);
          }
        });
    })
  }

  return (
    <div className="feedback-container">
      <Card>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item label={t<string>("Feedback Type")} rules={[{ required: true }]}
            name="type"  >
            <Radio.Group>
              <Radio.Button value="Fault">{t('Fault')}</Radio.Button>
              <Radio.Button value="Suggestion">{t('Suggestion')}</Radio.Button>
              <Radio.Button value="Complaints">{t('Complaints')}</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={t<string>("Feedback Content")} rules={[{ required: true }]}
            name="description">
            <Input.TextArea autoSize={{ minRows: 8 }}></Input.TextArea>

          </Form.Item>

          <Form.Item label={t<string>("Contact Information")}
            name="contactInfo">
            <Input></Input>

          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={submit}>{t('Submit')}</Button>
          </Form.Item>
        </Form>
        {contextHolder}
      </Card>
    </div>)
}

export default Feedback;