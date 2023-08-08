import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import { Form, InputNumber, Radio, Select } from 'antd';
import './ImageParams.css'
import imageData, { ImageParam } from '../../store/ImageData';

type IProps = {
}
const ImageParams: React.FC<IProps> = observer(() => {

  const { t } = useTranslation();
  const [form] = Form.useForm();


  const options = [{
    value: ".25",
    label: "普通"
  }, {
    value: ".5",
    label: "一般"
  }, {
    value: "1",
    label: "高清"
  }, {
    value: "2",
    label: "超高清"
  }]

  const styleOptions = [{
    value: "",
    label: t("default")
  }, {
    value: "expressive",
    label: t("expressive")
  }, {
    value: "cute",
    label: t("cute")
  }, {
    value: "scenic",
    label: t("scenic")
  }]

  const getVersionOptions=()=>{
    if (imageData.params.model === "MJ") {
      return [{
        value: "5.2",
        label: "5.2"
      }, {
        value: "5.1",
        label: "5.1"
      }, {
        value: "5",
        label: "5"
      }, {
        value: "4",
        label: "4"
      }];
    } else {
      return [{
        value: "5",
        label: "5"
      }, {
        value: "4",
        label: "4"
      }];
    }
  }


  return (<div className="image-params-wrapper">
    <Form
      form={form}
      layout={"vertical"}
      initialValues={imageData.params}
      style={{ padding: "10px" }}
      onChange={() => { imageData.setParams(form.getFieldsValue() as ImageParam) }}
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

      <Form.Item label={t<string>("Image model")} name="model"
        tooltip={<span><span>MJ: 偏真实通用模型</span><br />
          <span>NIJI: 偏动漫风格、适用于二次元模型</span></span>}>
        <Radio.Group>
          <Radio.Button value="MJ">MJ</Radio.Button>
          <Radio.Button value="NIJI">NIJI</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label={t<string>("Version")} name="version" >
        <Select value={imageData.params.version}
          options={getVersionOptions()}></Select>
      </Form.Item>

      {imageData.params.model==="NIJI" && <Form.Item label={t<string>("Style")} name="style" >
        <Select 
          options={styleOptions}></Select>
      </Form.Item>}

      {imageData.params.model==="MJ" && <Form.Item label={t<string>("Stylize")} name="stylize"
        tooltip="风格化：--stylize 或 --s，范围 1-1000
      参数释义：数值越高，画面表现也会更具丰富性和艺术性" >
        <InputNumber min={1} max={1000}></InputNumber>
      </Form.Item>}

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

    </Form>
  </div>)
})

export default ImageParams;