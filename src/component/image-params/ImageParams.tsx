import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";

import { Form, InputNumber, Radio, Select } from 'antd';
import './ImageParams.css'
type IProps={
}
const ImageParams:React.FC<IProps> = observer(()=>{

    const {t} =useTranslation();
    const [form] = Form.useForm();

    const defaultValie={
      size:"16:9",
      model:"MJ",
      quality:"1",
      chaos:0,
      stylize:100
    }

    const options=[{
      value:".25",
      label:"普通"
    },{
      value:".5",
      label:"一般"
    },{
      value:"1",
      label:"高清"
    },{
      value:"2",
      label:"超高清"
    }];

    const mjButtonStyle={"backgroundImage":'url(' + require('./mj.png') + ')',backgroundSize: "cover",
  width:"128px"};
    const nijiButtonStyle={"backgroundImage":'url(' + require('./niji.png') + ')',backgroundSize: "cover",
    width:"128px"};

    return (<div className="image-params-wrapper">
          <Form
      form={form}
      layout={"vertical"}
      initialValues={defaultValie}
      style={{ padding: "10px" }}
    >
      <Form.Item label={t<string>("Image Size")} name="size">
      <Radio.Group>
        <Radio.Button value="1:1">头像1:1</Radio.Button>
          <Radio.Button value="1:2">手机壁纸1:2</Radio.Button>
          <Radio.Button value="4:3">文章配图4:3</Radio.Button>
          <Radio.Button value="3:4">小红书3:4</Radio.Button>
          <Radio.Button value="16:9">电脑壁纸16:9</Radio.Button>
          <Radio.Button value="9:16">宣传海报9:16</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label={t<string>("Image model")} name="model"  className='mage-model-wrapper'
      tooltip={<span><span>MJ: 偏真实通用模型</span><br/>
      <span>NIJI: 偏动漫风格、适用于二次元模型</span></span>}>
      <Radio.Group>
        <Radio.Button className='image-model-icon' value="MJ" style={mjButtonStyle}>MJ
        </Radio.Button>
          <Radio.Button className='image-model-icon' value="NIJI" style={nijiButtonStyle}>NIJI</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label={t<string>("Quality")} name="quality" >
          <Select 
          options={options}></Select>
      </Form.Item>


      <Form.Item label={t<string>("Chaos")} name="chaos"
      tooltip="取值范围：0-100、 --chaos 或 --c
      混乱级别，可以理解为让AI天马行空的空间
      值越小越可靠、默认0最为精准" >
          <InputNumber min={0} max={100}></InputNumber>
      </Form.Item>

      <Form.Item label={t<string>("Stylize")} name="stylize" 
      tooltip="风格化：--stylize 或 --s，范围 1-1000
      参数释义：数值越高，画面表现也会更具丰富性和艺术性" >
          <InputNumber min={1} max={1000}></InputNumber>
      </Form.Item>
      </Form>
    </div>)
})

export default ImageParams;