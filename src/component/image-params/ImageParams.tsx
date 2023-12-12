import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import { InboxOutlined } from '@ant-design/icons';

import { Button, InputNumber, message, Radio, Select, Tooltip, Upload, Image, Slider, Row, Col, Switch } from 'antd';
import './ImageParams.css'
import imageData from '../../store/ImageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faQuestion, faTrashCan, faWallet } from '@fortawesome/free-solid-svg-icons';
import apiSetting from '../../store/APISetting';
import { RcFile } from 'antd/es/upload';
import { compositionOptions, environmentOptions, lightOptions, qualityOptions, style2Options } from './ParamOptions';
import userModelLimit from '../../store/UserModelLimit';

type IProps = {
}

const ImageParams: React.FC<IProps> = observer(() => {

  const { t } = useTranslation();


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

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const fileName = info.file.response.data;
      imageData.updateParams("imageUrl", `${fileName}`)
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error(t('You can only upload JPG/PNG file!'));
    }
    const isLimit = file.size / 1024 / 1024 < 20;
    if (!isLimit) {
      message.error(t('Image must smaller than 20MB!'));
    }
    return isJpgOrPng && isLimit;
  };


  const questionBtn = (<Button
    shape="circle"
    style={{ backgroundColor: "#f0f0f0", marginLeft: 10 }}
    size="small" icon={<FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>}></Button>);

  const uploadButton = (
    <div style={{ width: "100%", textAlign: "center", padding: 20 }}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{t('Click or drag file to this area to upload')}</p>
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
      {t("Image Size")}
      <Tooltip placement="right" title="生成图片尺寸比例">
        {questionBtn}        </Tooltip>
    </div>
    <div className="image-param-set image-param-input">
      <Radio.Group value={imageData.params.size} onChange={(e) => { imageData.updateParams("size", e.target.value) }}>
        <Radio.Button value="1:1">{t('1:1 Avatar')}</Radio.Button>
        <Radio.Button value="1:2">{t('1:2 Mobile Wallpaper')}</Radio.Button>
        <Radio.Button value="4:3">{t('4:3 Article Illustration')}</Radio.Button>
        <Radio.Button value="3:4">{t('3:4 Product illustration')}</Radio.Button>
        <Radio.Button value="16:9">{t('16:9 Computer Wallpaper')}</Radio.Button>
        <Radio.Button value="9:16">{t('9:16 Promotional Poster')}</Radio.Button>
      </Radio.Group>
    </div>
    <div className="image-param-set image-param-label">
      {t("Image model")}
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

      <div className="image-param-label">{t("Version")} </div>
      <Select style={{ width: '100%' }} className="image-param-input" value={imageData.params.version}
        options={getVersionOptions()}></Select>

    </div>
    {/* {imageData.params.model === "NIJI" && <div className="image-param-set">
      <div className="image-param-label">{t("Style")} </div>
      <div className="image-param-input"><Select
        value={imageData.params.style} onChange={(e) => { imageData.updateParams("style", e) }}
        options={styleOptions} style={{ width: '100%' }} ></Select></div></div>} */}

    {imageData.params.model === "MJ" && <><div className="image-param-set">
      <div className="image-param-label">{t("Stylize")}
        <Tooltip placement="right" title="风格化：--stylize 或 --s，范围 1-1000
      参数释义：数值越高，画面表现也会更具丰富性和艺术性">
          {questionBtn}
        </Tooltip>
      </div><div className="image-param-input">
        <InputNumber style={{ width: '100%' }} min={1} max={1000} value={imageData.params.stylize}
          onChange={(e) => { imageData.updateParams("stylize", e ? e : 100) }}></InputNumber>
      </div></div>
      <div className="image-param-set">
      <div className="image-param-label">{t("Raw")}
        <Tooltip placement="right" title="减少 midjourney 的艺术加工，生成更摄影化的图片。例如：--style raw">
          {questionBtn}
        </Tooltip>
      </div><div className="image-param-input">
        <Switch  checked={!!imageData.params.raw}
          onChange={(e) => { imageData.updateParams("raw", e) }}></Switch>
      </div></div></>}


    <div className="image-param-set">
      <div className="image-param-label">{t("Quality")} </div>
      <div className="image-param-input"><Select style={{ width: '100%' }} onChange={(e) => { imageData.updateParams("quality", e) }}
        options={qualityOptions} value={imageData.params.quality}></Select></div>
    </div>
    
    <div className="more-params">
    
      <div className="image-param-set">
        <div className="image-param-label">{t("Composition")} </div>
        <div className="image-param-input"><Select allowClear style={{ width: '100%' }} onChange={(e) => { imageData.updateParams("composition", e) }}
          options={compositionOptions} value={imageData.params.composition}></Select></div>
      </div>

      <div className="image-param-set">
        <div className="image-param-label">{t("Style")} </div>
        <div className="image-param-input"><Select allowClear style={{ width: '100%' }} onChange={(e) => { imageData.updateParams("style", e) }}
          options={style2Options} value={imageData.params.style}></Select></div>
      </div>

      <div className="image-param-set">
        <div className="image-param-label">{t("Light")} </div>
        <div className="image-param-input"><Select allowClear style={{ width: '100%' }} onChange={(e) => { imageData.updateParams("light", e) }}
          options={lightOptions} value={imageData.params.light}></Select></div>
      </div>


      <div className="image-param-set">
        <div className="image-param-label">{t("Environment")} </div>
        <div className="image-param-input"><Select allowClear style={{ width: '100%' }} onChange={(e) => { imageData.updateParams("environment", e) }}
          options={environmentOptions} value={imageData.params.environment}></Select></div>
      </div>
    </div>

    <div className="image-param-set">

      <div className="image-param-label">{t("Chaos")}
        <Tooltip placement="right" 
        title={t("Value range: 0-100, - Chaos, or - c Chaos level, which can be understood as a space that allows AI to roam freely The smaller the value, the more reliable it is, with a default of 0 being the most accurate")}
        >
          {questionBtn}        </Tooltip>
      </div>
      <div className="image-param-input"><InputNumber min={0} max={100} value={imageData.params.chaos}
        style={{ width: '100%' }}
        onChange={(e) => { imageData.updateParams("chaos", e ? e : 0) }}></InputNumber></div>
    </div>

    <div className="image-param-set image-param-label">
      {t("Reference image")}
      <Tooltip placement="right" title={t("Upload an image and make modifications based on it")}
      >
        {questionBtn}        </Tooltip>
    </div>
    <div style={{ padding: 20 }}>
      <Upload.Dragger
        method="post"
        showUploadList={false}
        multiple={false}
        style={
          { width: "100%", height: 256 }
        }
        listType="picture-card"
        action={apiSetting.imageUploadUrl}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageData.params.imageUrl ? (
          <>
            <div style={{ float: "right", marginRight: 10 }}>
              <Button shape="circle" type='primary' onClick={(e) => { imageData.updateParams("imageUrl", ""); e.stopPropagation() }}
                icon={<FontAwesomeIcon icon={faTrashCan} />} size="small" />
            </div>
            <Image preview={false} src={imageData.params.imageUrl}
              width={200} height={200}
            ></Image></>
        ) : uploadButton}
      </Upload.Dragger>

    </div>

    <div className="image-param-set image-param-label image-iw">
      {t("Reference image weight")}
      <Tooltip placement="right" title={t('In reference to the weight of the reference image, the higher the value, the greater the significance of the reference image.')}
      >
        {questionBtn}        </Tooltip>
    </div>
    <div className="image-iw-input">

      <Row>
        <Col span={16}>
          <Slider
            min={0}
            max={2}
            onChange={(e) => imageData.updateParams("iw", e)}
            value={imageData.params.iw}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ margin: '0 16px' }}
            step={0.01}
            value={imageData.params.iw}
            onChange={(e) => imageData.updateParams("iw", e ? e : 1)}
          />
        </Col>
      </Row>
    </div>

    <div className="model-amount">
        <div className="amount-content">
          <div className="amount-left">
          <span><FontAwesomeIcon style={{color:"#faad14"}} icon={faWallet}/> {t('AI Image Amount')}</span>
          <Button style={{marginLeft:10}} size='small' icon={<FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>}/>
          </div>
          <div  className="amount-right">
            <div className="amount-item">
              <div className="amount-title">
                <span>{t('Standard mode')} : </span>
              </div>
              <div className="amount-value">
              {userModelLimit.usage.remainingAmount}
              </div>
            </div>
            <div className="amount-item">
              <div className="amount-title">
                <span>{t('Fast mode')} : </span>
              </div>
              <div className="amount-value">
              {userModelLimit.usage.remainingAmount}
              
              </div>
            </div>
          </div>
              
        </div>
      </div>

      <div className="end">

      </div>

  </div>)
})

export default ImageParams;