import React from 'react';
import { Button, Card, Image, message, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import imageData, { ImageResponse } from '../../store/ImageData';
import { faBroom, faDownload, faRefresh, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageDetailItem.css'
import { MessageInstance } from 'antd/es/message/interface';
import dayjs from 'dayjs'
type IProps = {
  data: ImageResponse;
  globalMessageApi: MessageInstance;
}
const ImageDetailItem: React.FC<IProps> = observer(({ data, globalMessageApi }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { t } = useTranslation();
  const buttonSize = "small"
  const success = () => {
    messageApi.open({
      type: 'success',
      content: t<string>('Submit task successlly. you can go to other page first, I will tall you if done'),
    });
  };

  const updateMJImage = (imageId: string, action: string) => {
    imageData.updateMJImage(imageId, action, globalMessageApi)
    success();
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
        <span key={1} className="image-details-action-list-title">{t('Variation')} : </span>
        <Button key={2} size={buttonSize} onClick={() => { updateMJImage(imageId, "high_variation") }}>high</Button>
        <Button key={3} size={buttonSize} onClick={() => { updateMJImage(imageId, "low_variation") }}>low</Button>
      </div>);
      arr.push(<div key={2} className="image-details-action-list">
        <span key={5} className="image-details-action-list-title">{t('Zoom out')} : </span>
        {actions.includes("zoom_out_2x") && <Button key={1} size={buttonSize} onClick={() => { updateMJImage(imageId, "zoom_out_2x") }}>2x</Button>}
        {actions.includes("zoom_out_1_5x") && <Button key={2} size={buttonSize} onClick={() => { updateMJImage(imageId, "zoom_out_1_5x") }}>1.5x</Button>}
      </div>)
    }
    return arr;
  }

  const getHeaderButtonByType = (type: string) => {
    const arr = [];
    if (type === "generate") {
      arr.push(<Button key={1} size={buttonSize} icon={<FontAwesomeIcon icon={faBroom} />}>{t('use')}</Button>)
    }
    arr.push(<Button key={2} size={buttonSize} icon={<FontAwesomeIcon icon={faDownload} />}>{t('download')}</Button>)
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
      <div className="image-content">
        <div className="image-detail">
          <Image src={data.image_url} width={250} height={250}></Image>
        </div>
        <div className="image-detail-button">
          {getDetailButtonByType(data.actions, data.image_id)}
        </div>
        <div className="image-generate-date">
          {getDateFormat(data.date)}
        </div>
      </div>
    </Card>
    {contextHolder}
  </div>)
})

export default ImageDetailItem;