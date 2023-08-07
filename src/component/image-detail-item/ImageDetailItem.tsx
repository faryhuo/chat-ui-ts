import React from 'react';
import { Card, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import { observer } from "mobx-react-lite";
import {ImageResponse} from '../../store/ImageData';
type IProps={
  data:ImageResponse;
}
const ImageDetailItem:React.FC<IProps> = observer(({data})=>{

    const {t} =useTranslation();

    const getDetailButtonByType=(type:string)=>{
      const arr=[];
      if(type="generate"){
        arr.push(<div></div>)
      }
      return arr;
    }

    return (<div className="image-details-item">
      <Card>
        <div className="image-content">
           <Image src={data.image_url} width={250} height={250}></Image>
           <div className="image-detail-button">

           </div>
        </div>
      </Card>
    </div>)
})

export default ImageDetailItem;