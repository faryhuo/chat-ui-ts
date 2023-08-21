import { faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Card, Button, message } from 'antd';
import Masonry from 'masonry-layout'
import React, { useEffect, useState } from 'react';
import VirtualList from 'rc-virtual-list';
import apiSetting from '../../store/APISetting';
import imageData, { IImageSharing } from '../../store/ImageData';
import copy from 'copy-to-clipboard';
import './PaintingSquare.css'
import { useTranslation } from 'react-i18next';
type IProps={
}

const PaintingSquare:React.FC<IProps> = ()=>{

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IImageSharing[]>([]);
  const [total, setTotal] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [messageApi, contextHolder] = message.useMessage();
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState<string>("");
  const [timeoutObj, setTimeoutObj] = useState<any>(null);

  const pageSize=10;
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`${apiSetting.imageSharingUrl}?offset=${offset}&pageSize=${pageSize}&prompt=${decodeURI(prompt)}`)
      .then((res) => {return res.json()})
      .then((body) => {
        setTotal(body.data.total);
        const responseData=body.data.data as IImageSharing[];
        if(responseData){
          setOffset(offset+responseData.length);
          responseData.forEach((item) => {
            item.width=imageData.getWidthBySize(item.size);
            item.height=imageData.getHeightBySize(item.size);
            item.urlSmall=item.urlBig+`?imageMogr2/thumbnail/${item.width}/lquality/100`
          });
          setData([...data, ...responseData]);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      }).finally(()=>{
        advanceWidth();
      });
  };


  const changePrompt=(prompt:string)=>{
    setPrompt(prompt);
    console.log(timeoutObj);
    if(timeoutObj!==null){
      clearTimeout(timeoutObj);
    }
    setTimeoutObj(setTimeout(()=>{
      setData([]);
      loadMoreData();
    },1000));
  }

  useEffect(() => {
    loadMoreData();
  }, []);


  const copyPrompt=(prompt:string)=>{
    copy(prompt)
    messageApi.success(t("Copy prompt successlly"),5);
  }

  const getMask=(prompt:string)=>{
    return (
      <div className="image-mask" onClick={(e)=>e.stopPropagation()}>
        <div className="image-mask-content">
          {prompt}
        </div>
      </div>)
  }

  const advanceWidth = () => {
    // new Masonry(节点, 配置)
    setTimeout(()=>{
      new Masonry(document.querySelector('.painting-square-image-items') as any, {
        itemSelector: '.painting-square-image-item-wrapper', // 要布局的网格元素
        columnWidth: 300,  // 获取节点 可以自动计算每列的宽度
        fitWidth: true, // 设置网格容器宽度等于网格宽度
      })
    },0)
  }

  const ContainerHeight = window.innerHeight-91;


  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    console.log(e.currentTarget.scrollHeight - e.currentTarget.scrollTop);
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      loadMoreData();
    }
  };
  const buttonStyle = {
    width: "100%",
    fontSize: "14px",
    color:"#000"
  }


    return (
    <div className="painting-square-page" id="scrollableDiv">
      {/* <div className="painting-actions">
        <div className="actions-input">
          <Input value={prompt} onChange={(e)=>changePrompt(e.target.value)}
          placeholder={t<string>("search by prompt")}
          allowClear></Input>
        </div>
        <div className="actions-adjust"></div>
      </div> */}
       <div className="painting-square-image-items">
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemKey="urlBig"
        onScroll={onScroll}
      >
         {(item) => (
            item.visible!==false && <div className="painting-square-image-item-wrapper">
              <Card className="painting-square-image-item" 
              actions={[
                <Button icon={<FontAwesomeIcon icon={faCopy} />}
                  style={buttonStyle} type="link" onClick={() => { copyPrompt(item.prompt); }}>
                  &nbsp;{t('copy prompt')}</Button>,
                <Button  style={buttonStyle}
                onClick={()=>imageData.downloadImage(item.urlBig)} type="link"
                icon={<FontAwesomeIcon icon={faDownload} />}>{t('download')}</Button>
            
              ]}>
              <Image src={item.urlSmall} 
                  width={item.width} 
                  height={item.height} 
                  fallback={"https://image-1257149217.cos.ap-guangzhou.myqcloud.com/error/404.png"}
                  onError={()=>item.visible=false}
                  preview={
                    {src:item.urlBig,
                    mask:getMask(item.prompt)}
                  }
                  ></Image>
                  </Card>
                </div>)
         }
      </VirtualList>
      </div>
        {contextHolder}
      </div>
    )
}

export default PaintingSquare;