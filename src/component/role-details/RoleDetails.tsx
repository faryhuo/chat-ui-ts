import React from 'react';
import { Form, Input, Button, Checkbox, Select, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import { IMessage } from '../../store/MessageData';
import { IAppConfig } from '../../store/AppConfig';
import { IRole } from '../../store/RoleData';
import TagSelector from '../tag-selector/tag-selector';
import RoleData from '../../store/RoleData';
import { MessageInstance } from 'antd/es/message/interface';
import chatConfig, { IChatAPIConfig } from '../../store/ChatConfig';
import { useState } from 'react';

type IProps = {
  config: IAppConfig;
  store: IMessage;
  role?: IRole;
  handleCancel: () => void;
  token: string;
  messageApi: MessageInstance;
}
const RoleDetails: React.FC<IProps> = observer(({ store, config, role, handleCancel, token, messageApi }) => {

  const { t } = useTranslation();

  const [form] = Form.useForm();
  const [settingForm] = Form.useForm();

  let name = Form.useWatch('name', form);
  let description = Form.useWatch('description', form);
  let tags = Form.useWatch('tags', form);
  //let isCustomSetting  = Form.useWatch('isCustomSetting', form);
  const [isCustomSetting, setisCustomSetting] = useState<boolean>(role?.isCustomSetting ? role?.isCustomSetting : false);


  const success = () => {
    messageApi.open({
      type: 'success',
      content: t('Updated success'),
    });
  };

  const fail = (msg: string) => {
    messageApi.open({
      type: 'error',
      content: msg,
    });
  };

  const save = async () => {
    form.validateFields().then(()=>{
      if (role) {
        role.description = description;
        role.roleName = name;
        if (tags) {
          role.tags = tags;
        }
        role.isCustomSetting=isCustomSetting;
        if(isCustomSetting){
          role.setting=settingForm.getFieldsValue();
        }else{
          role.setting=undefined;
        }
        RoleData.addRole(role, token).then(() => {
          success();
          handleCancel();
        }).catch((data) => {
          fail(data)
        });
      } else {
        let newRole: IRole = {
          roleId: -1,
          isGlobal:false,
          roleName: "",
          description: "",
          tags: tags,
          isCustomSetting: false,
          language:config.textLanguage
        };
        newRole.description = description;
        newRole.roleName = name;
        newRole.isCustomSetting=isCustomSetting;
        if(isCustomSetting){
          newRole.setting=settingForm.getFieldsValue();
        }
        RoleData.addRole(newRole, token).then(() => {
          success();
          handleCancel();
        }).catch((data) => {
          fail(data)
        });
      }
    }).catch(()=>{

    });
  }

  const getInitValues = (role: IRole | undefined) => {
    if (role) {
      return {
        name:  role.roleName,
        description: role.description,
        tags: role.tags,
        isCustomSetting: role.isCustomSetting,
        setting: role.setting?role.setting:chatConfig.apiConfig
      }
    } else {
      return {
        name: "",
        description: "",
        tags: ["latest"],
        isCustomSetting: false,
        setting: chatConfig.apiConfig
      }
    }
  }

  const getTagOptions = () => {
    const options: { value: string; label: string; }[] = [];
    RoleData.getCurrentTags(true).forEach((item) => {
      if (item === "favorite" || item === "all") {
        return;
      }
      const option = { value: item, label: t("tags." + item) }
      options.push(option);
    });
    return options;
  }

  const getChatConfigEle = (isCustomSetting: boolean | undefined, setting: IChatAPIConfig | undefined) => {
    if (isCustomSetting) {
      return <div>
        <Form
          form={settingForm}
          layout={config.formLayout}
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
          style={{ padding: "10px" }}
          initialValues={setting}
        >
          <Form.Item label={t("Model")} name="model" tooltip={t("which models work with the Chat API.")}>
            <Select
              options={chatConfig.chatModelList}
            />
          </Form.Item>
          <Form.Item label={t("max_tokens")} name="max_tokens" tooltip={t("max length of GPT return")}>
            <InputNumber min={0} maxLength={2048}></InputNumber>
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
        </Form>
      </div>
    } else {
      return <>
      </>;
    }
  }

  return (
    <div>
      <Form
        form={form}
        layout={config.formLayout}
        labelCol={{ span: 4 }}
        initialValues={getInitValues(role)}
        wrapperCol={{ span: 20 }}
        style={{ padding: "10px" }}
      >
        <Form.Item label={t("Name")} name="name"
          rules={[{ required: true }, () => ({
            validator(_, value) {
              if (!value || value === role?.roleName) {
                return Promise.resolve();
              }
              if (!RoleData.checkRoleIsExisting(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('This name is exsiting, please change it.'));
            },
          })]}>
          <Input
          ></Input>
        </Form.Item>
        <Form.Item label={t("Description")} name="description" rules={[{ required: true }]}>
          <Input.TextArea autoSize={{ minRows: 8 }}
            size="large"
            spellCheck={true}
            allowClear></Input.TextArea>
        </Form.Item>
        <Form.Item label={t("Tags")} name="tags" rules={[{ required: true }]}>
          <TagSelector
            options={getTagOptions()}
          ></TagSelector>
        </Form.Item>
        <Form.Item label={t("Custom Setting")} valuePropName="checked" name="isCustomSetting">
          <Checkbox onChange={() => { setisCustomSetting(!isCustomSetting) }}></Checkbox>
        </Form.Item>
      </Form>
      {getChatConfigEle(isCustomSetting, getInitValues(role).setting)}
      <div className="action-button">
        <Button type="primary" onClick={save} icon={<FontAwesomeIcon icon={faSave} />}
        >&nbsp;{t('Save')}&nbsp;</Button>
      </div>
    </div>)
})

export default RoleDetails;