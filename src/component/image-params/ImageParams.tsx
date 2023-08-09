import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import { InboxOutlined } from '@ant-design/icons';

import { Button, InputNumber, message, Radio, Select, Tooltip, Upload,Image } from 'antd';
import './ImageParams.css'
import imageData from '../../store/ImageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import apiSetting from '../../store/APISetting';
import { RcFile } from 'antd/es/upload';

type IProps = {
}

const ImageParams: React.FC<IProps> = observer(() => {

  const { t } = useTranslation();


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

  const getVersionOptions = () => {
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

  const handleChange = (info:any) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const fileName = info.file.response.data;
      imageData.updateParams("imageUrl",`${apiSetting.imageUploadUrl}/${fileName}`)
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must smaller than 10MB!');
    }
    return isJpgOrPng && isLt10M;
  };


  const questionBtn = (<Button
    shape="circle"
    style={{ backgroundColor: "#f0f0f0", marginLeft: 10 }}
    size="small" icon={<FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>}></Button>);

    const uploadButton = (
      <div style={{width:"100%",textAlign:"center",padding:20}}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
      </div>
    );

  const mjButtonStyle = {
    "backgroundImage": 'url(' + require('./mj.png') + ')', backgroundSize: "cover",
    width: "128px"
  };
  const nijiButtonStyle = {
    "backgroundImage": 'url(' + require('./niji.png') + ')', backgroundSize: "cover",
    width: "128px"
  };

  return (<div className="image-params-wrapper">
    <div className="image-param-set image-param-label">
      {t<string>("Image Size")}
      <Tooltip placement="right" title="生成图片尺寸比例">
          {questionBtn}        </Tooltip>
    </div>
    <div className="image-param-set image-param-input">
      <Radio.Group value={imageData.params.size} onChange={(e) => { imageData.updateParams("size", e.target.value) }}>
        <Radio.Button value="1:1">头像1:1</Radio.Button>
        <Radio.Button value="1:2">手机壁纸1:2</Radio.Button>
        <Radio.Button value="4:3">文章配图4:3</Radio.Button>
        <Radio.Button value="3:4">小红书3:4</Radio.Button>
        <Radio.Button value="16:9">电脑壁纸16:9</Radio.Button>
        <Radio.Button value="9:16">宣传海报9:16</Radio.Button>
      </Radio.Group>
    </div>
    <div className="image-param-set image-param-label">
      {t<string>("Image model")}
      <Tooltip placement="right" title={<span><span>MJ: 偏真实通用模型</span><br />
        <span>NIJI: 偏动漫风格、适用于二次元模型</span></span>}>
        {questionBtn}      </Tooltip>
    </div>
    <div className="image-param-set image-param-input">
      <Radio.Group value={imageData.params.model} onChange={(e) => { imageData.updateParams("model", e.target.value) }}>
        <Radio.Button className='image-model-icon' value="MJ" style={mjButtonStyle}>MJ
        </Radio.Button>
        <Radio.Button className='image-model-icon' value="NIJI" style={nijiButtonStyle}>NIJI</Radio.Button>
      </Radio.Group>
    </div>
    <div className="image-param-set">

      <div className="image-param-label">{t<string>("Version")} </div>
      <Select style={{ width: '100%' }} className="image-param-input" value={imageData.params.version}
        options={getVersionOptions()}></Select>

    </div>
    {imageData.params.model === "NIJI" && <div className="image-param-set">
      <div className="image-param-label">{t<string>("Style")} </div>
      <div className="image-param-input"><Select
        value={imageData.params.style} onChange={(e) => { imageData.updateParams("style", e) }}
        options={styleOptions} style={{ width: '100%' }} ></Select></div></div>}

    {imageData.params.model === "MJ" && <div className="image-param-set">
      <div className="image-param-label">{t<string>("Stylize")}
        <Tooltip placement="right" title="风格化：--stylize 或 --s，范围 1-1000
      参数释义：数值越高，画面表现也会更具丰富性和艺术性">
          {questionBtn}
        </Tooltip>
      </div><div className="image-param-input">
        <InputNumber style={{ width: '100%' }} min={1} max={1000} value={imageData.params.stylize}
          onChange={(e) => { imageData.updateParams("stylize", e ? e : 100) }}></InputNumber>
      </div></div>}


    <div className="image-param-set">
      <div className="image-param-label">{t<string>("Quality")} </div>
      <div className="image-param-input"><Select style={{ width: '100%' }}
        options={options} value={imageData.params.quality}></Select></div>
    </div>

    <div className="image-param-set">

      <div className="image-param-label">{t<string>("Chaos")}
        <Tooltip placement="right" title="取值范围：0-100、 --chaos 或 --c
      混乱级别，可以理解为让AI天马行空的空间
      值越小越可靠、默认0最为精准">
          {questionBtn}        </Tooltip>
      </div>
      <div className="image-param-input"><InputNumber min={0} max={100} value={imageData.params.chaos}
        style={{ width: '100%' }}
        onChange={(e) => { imageData.updateParams("chaos", e ? e : 0) }}></InputNumber></div>
    </div>

    <div className="image-param-set image-param-label">
      以图生图
      <Tooltip placement="right" title="上传一张图片, 然后基于这张图片做修改">
          {questionBtn}        </Tooltip>
    </div>
    <div  style={{padding:20}}>
      <Upload.Dragger
        method="post"
        showUploadList={false}
        multiple={false}
        style={
          {width:"100%",height:256}
        }
        listType="picture-card"
        action={apiSetting.imageUploadUrl}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageData.params.imageUrl ?(
          <>
          <div style={{float:"right"}}>
            <Button onClick={(e)=>{imageData.updateParams("imageUrl","");e.stopPropagation()}}
            icon={<FontAwesomeIcon icon={faTrashCan} />} size="small" /> 
          </div>
          <Image preview={false} src={imageData.params.imageUrl} 
            width={200} height={200}
          ></Image></>
        ) : uploadButton}
      </Upload.Dragger>

    </div>
  </div>)
})

export default ImageParams;