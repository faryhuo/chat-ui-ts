import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List,Image, Skeleton, Divider, Button, message, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
  const [page, setPage] = useState<number>(0);
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
    fetch(`${apiSetting.imageSharingUrl}?page=${page}&pageSize=${pageSize}&prompt=${decodeURI(prompt)}`)
      .then((res) => {return res.json()})
      .then((body) => {
        setPage(page+1);
        setTotal(body.data.total);
        const responseData=body.data.data as IImageSharing[];
        if(responseData){
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
      });
  };


  const changePrompt=(prompt:string)=>{
    setPage(0);
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


  const copyPrompt=(e:any,prompt:string)=>{
    copy(prompt)
    messageApi.success(t("Copy prompt successlly"),5);
    e.stopPropagation();
  }

  const getMask=(prompt:string)=>{
    return (
      <div className="image-mask" onClick={(e)=>e.stopPropagation()}>
        <div className="image-mask-content">
          {prompt}
        </div>
        <div className="image-mask-btn">
          <Button size={'small'}
          type='default'
          onClick={(e)=>copyPrompt(e,prompt)}
          icon={<FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>}></Button>
        </div>
      </div>)
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
        <InfiniteScroll
        dataLength={data.length}
        next={()=>{loadMoreData()}}
        hasMore={data.length < total}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      > 
      <List grid={{gutter:0}} dataSource={data} renderItem={(item) => (
      <div className="painting-square-image-item" style={{width:item.width,height:item.height}}>
            <Image src={item.urlSmall} 
            width={item.width} 
            height={item.height} 
            preview={
              {src:item.urlBig,
              mask:getMask(item.prompt)}
            }
            ></Image>
          </div>)}></List>
      </InfiniteScroll>
        {contextHolder}
      </div>
    )
}

export default PaintingSquare;