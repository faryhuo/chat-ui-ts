import React from 'react';
import { Button, Card, Image, message, Progress, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import imageData, { ImageResponse } from '../../store/ImageData';
import { faBroom, faDownload, faRefresh, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageDetailItem.less'
import { MessageInstance } from 'antd/es/message/interface';
import copy from 'copy-to-clipboard';
import dayjs from 'dayjs'
type IProps = {
  data: ImageResponse;
  globalMessageApi: MessageInstance;
}
const ImageDetailItem: React.FC<IProps> = observer(({ data, globalMessageApi }) => {

  const { t } = useTranslation();
  const buttonSize = "small"


  const updateMJImage = (imageId: string, action: string) => {
    imageData.updateMJImage(imageId, action, globalMessageApi)
  }

  const getDetailButtonByType = (actions: string[], imageId: string) => {
    const arr = [];
    if (actions.includes("upsample1")) {
      arr.push(<div key={1} className="image-details-action-list">
        <span className="image-details-action-list-title">{t('image.Select')} : </span>
        <Tooltip placement="top" title={t("Select the first image")}>
          <Button key={1} size={buttonSize} onClick={() => { updateMJImage(imageId, "upsample1") }}>U1</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Select the second image")}>
          <Button key={2} size={buttonSize} onClick={() => { updateMJImage(imageId, "upsample2") }}>U2</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Select the third image")}>
          <Button key={3} size={buttonSize} onClick={() => { updateMJImage(imageId, "upsample3") }}>U3</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Select the 4th image")}>
          <Button key={4} size={buttonSize} onClick={() => { updateMJImage(imageId, "upsample4") }}>U4</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("generate the image again")}>
          <Button key={5} size={buttonSize} icon={<FontAwesomeIcon icon={faRefresh} />}
            onClick={() => { updateMJImage(imageId, "reroll") }}></Button>
        </Tooltip>
      </div>);
      arr.push(<div key={2} className="image-details-action-list">
        <span className="image-details-action-list-title">{t('Variation')} : </span>

        <Tooltip placement="top" title={t("Variation the first image")}>
          <Button key={1} size={buttonSize} onClick={() => { updateMJImage(imageId, "variation1") }}>V1</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Variation the second image")}>
          <Button key={2} size={buttonSize} onClick={() => { updateMJImage(imageId, "variation2") }}>V2</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Variation the third image")}>
          <Button key={3} size={buttonSize} onClick={() => { updateMJImage(imageId, "variation3") }}>V3</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Variation the 4th image")}>
          <Button key={4} size={buttonSize} onClick={() => { updateMJImage(imageId, "variation4") }}>V4</Button>
        </Tooltip>
      </div>)
    } else if (actions.includes("high_variation")) {
      arr.push(<div key={1} className="image-details-action-list">
        <span key={1} className="image-details-action-list-title">{t('Adjust')} : </span>
        <Tooltip placement="top" title={t("Adjust the image highly")}>
        <Button key={2} size={buttonSize} onClick={() => { updateMJImage(imageId, "high_variation") }}>{t("high")}</Button>
        </Tooltip>
        <Tooltip placement="top" title={t("Adjust the image lowly")}>
        <Button key={3} size={buttonSize} onClick={() => { updateMJImage(imageId, "low_variation") }}>{t("low")}</Button>
        </Tooltip>
      </div>);
      arr.push(<div key={2} className="image-details-action-list">
        <span key={5} className="image-details-action-list-title">{t('Zoom out')} : </span>
        <Tooltip placement="top" title={t("Zoom out 2x")}>
        {actions.includes("zoom_out_2x") && <Button key={1} size={buttonSize} onClick={() => { updateMJImage(imageId, "zoom_out_2x") }}>{t("2x")}</Button>}
        </Tooltip>
        <Tooltip placement="top" title={t("Zoom out 1.5x")}>
        {actions.includes("zoom_out_1_5x") && <Button key={2} size={buttonSize} onClick={() => { updateMJImage(imageId, "zoom_out_1_5x") }}>{t("1.5x")}</Button>}
        </Tooltip>
      </div>)
    }
    return arr;
  }

  const getHeaderButtonByType = (type: string) => {
    const arr = [];
    if (type === "generate") {
      arr.push(
        <Tooltip key={1}  placement="top" title={data.prompt}>
      <Button onClick={()=>{copy(data.prompt?data.prompt:"");message.success(t("Copy successlly"))}} size={buttonSize} icon={<FontAwesomeIcon icon={faBroom} />}>{t('use')}</Button>
      </Tooltip>
      )
    }
    arr.push(<Button key={2} onClick={()=>imageData.downloadImage(data.image_url)}
      size={buttonSize} icon={<FontAwesomeIcon icon={faDownload} />}>{t('download')}</Button>)
    arr.push(<Button key={3} size={buttonSize} icon={<FontAwesomeIcon icon={faTrashCan} />}>{t('delete')}</Button>)
    return arr;
  }

  const getDateFormat = (date: Date) => {
    if (date) {
      return dayjs(date).format("YYYY-MM-DD HH:mm:ss")
    } else {
      return "";
    }
  }


  return (<div className="image-details-item">
    <Card>
      <div className="image-header-action-list">
        {getHeaderButtonByType(data.type)}
      </div>
      <div className="clear-both"></div>
      <div className="image-content">
        <div className="image-detail">
          
        {data.progress!==100 && 
            <Progress type="circle" percent={data.progress?data.progress:0} 
            status="active" strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
}

        {data.progress===100 && 
        <Image src={data.image_url} width={imageData.getWidthBySize(data.params?.size)} 
        height={imageData.getHeightBySize(data.params?.size)}></Image>}
        </div>

        {data.actions && data.actions.length>0 && <div className="image-detail-button">
          {getDetailButtonByType(data.actions, data.image_id)}
        </div>}
        <div className="image-generate-date">
          {t('Time')} &nbsp;:&nbsp; {getDateFormat(data.date)}
        </div>
      </div>
    </Card>
  </div>)
})

export default ImageDetailItem;