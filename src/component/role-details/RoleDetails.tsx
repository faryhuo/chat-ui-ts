import React from 'react';
import { Form,Input,Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import {IMessage} from '../../store/MessageData';
import {IAppConfig} from '../../store/AppConfig';
import { IRole } from '../../store/RoleData';
import TagSelector from '../tag-selector/tag-selector';
import RoleData from '../../store/RoleData';

type IProps={
  config:IAppConfig;
  store:IMessage;
  role?:IRole;
  handleCancel:()=>void;
}
const RoleDetails:React.FC<IProps> = observer(({store,config,role,handleCancel})=>{

    const {t} =useTranslation();

    const [form] = Form.useForm();

    let name = Form.useWatch('name', form);
    let description = Form.useWatch('description', form);
    let tags = Form.useWatch('tags', form);

    const save=()=>{
      if(role){
        if(config.isChinese){
          role.descriptionCN=description;
          role.roleNameCN=name;
        }else{
          role.description=description;
          role.roleName=name;
        }
        if(tags){
          role.tags=tags;
        }
        RoleData.addRole(role).then(handleCancel);
      }else{
        let newRole:IRole={
          descriptionCN:"",
          roleNameCN:"",
          roleId:"",
          roleName:"",
          description:"",
          tags:tags
        };
        if(config.isChinese){
          newRole.descriptionCN=description;
          newRole.roleNameCN=name;
        }else{
          newRole.description=description;
          newRole.roleName=name;
        }
        RoleData.addRole(newRole);
      }
    }

    const getInitValues=(role:IRole | undefined)=>{
      if(role){
        return {
          name:config.isChinese?role.roleNameCN:role.roleName,
          description:config.isChinese?role.descriptionCN:role.description,
          tags:role.tags
        }
      }else{
        return {
          name:"",
          description:"",
          tags:[]
        }
      }
    }

    const getTagOptions=()=>{
      const options: { value: string; label: string; }[]=[];
      RoleData.currentTags.forEach((item)=>{
        const option={value:item,label:t("tags."+item)}
        options.push(option);
      });
      return options;
    }



    return (
      <div>
        <Form
        onFinish={save}
        form={form}
        layout="vertical"
        labelCol={{ span: 4 }}
        initialValues={getInitValues(role)}
        wrapperCol={{ span: 20 }}
        style={{padding:"10px"}}
      >
        <Form.Item label={t("Name")} name="name" 
                rules={[{ required: true },({  }) => ({
                  validator(_, value) {
                    if (!value || value==(config.isChinese?role?.roleNameCN:role?.roleName)) {
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
        <Form.Item wrapperCol={ { span: 12 }} >
            <Button type="primary"  htmlType="submit" icon={<FontAwesomeIcon icon={faSave}/>}
            >Save</Button>
          </Form.Item>
      </Form>
    </div>)
})

export default RoleDetails;