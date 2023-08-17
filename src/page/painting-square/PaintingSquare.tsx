import { List,Image, Skeleton, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiSetting from '../../store/APISetting';
import imageData, { IImageSharing } from '../../store/ImageData';
import './PaintingSquare.css'
type IProps={
}

const PaintingSquare:React.FC<IProps> = ()=>{

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IImageSharing[]>([]);
  const [total, setTotal] = useState<number>(10);
  let page=0;
  const pageSize=10;
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`${apiSetting.imageSharingUrl}?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.json())
      .then((body) => {
        page=page+1;
        setTotal(body.data.total);
        console.log(body)
        setData([...data, ...body.data.data]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  


    return (
    <div className="painting-square-page">
        <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < total}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      > 
      <List grid={{gutter:0}} dataSource={data} renderItem={(item) => (
      <div className="painting-square-image-item">
            <Image src={item.urlBig+`?imageMogr2/thumbnail/${imageData.getWidthBySize(item.size)}/lquality/100`} 
            width={imageData.getWidthBySize(item.size)} 
            preview={
              {src:item.urlBig}
            }
            height={imageData.getHeightBySize(item.size)}></Image>
          </div>)}></List>
      </InfiniteScroll>
        
      </div>
    )
}

export default PaintingSquare;