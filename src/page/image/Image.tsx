
import { IAppConfig } from '../../store/AppConfig';
import ImageData from '../../store/ImageData';
import './Image.css'
import { observer } from "mobx-react-lite"
import { Button, Input, Layout, List } from 'antd';
import ImageParams from '../../component/image-params/ImageParams';
import ImageDetailItem from '../../component/image-detail-item/ImageDetailItem';
import { useEffect, useState } from 'react';
import { MessageInstance } from 'antd/es/message/interface';
import { useTranslation } from 'react-i18next';
import imageData from '../../store/ImageData';
import { IUserProflie } from '../../store/UserProfile';
type IProps = {
  config: IAppConfig;
  globalMessageApi: MessageInstance;
  userProflie: IUserProflie;
}

const listLayout = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 1,
  xl: 2,
  xxl: 4,
};

const { Sider, Content } = Layout;
const Image: React.FC<IProps> = ({ globalMessageApi,userProflie }) => {

  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const generate = () => {
    ImageData.generate(imageData.prompt, globalMessageApi)
  }

  useEffect(() => {
    document.title = "Midjourney";
  }, []);

  useEffect(()=>{
    if(userProflie.token){
      ImageData.fetchData(userProflie.token)
    }
  },[userProflie.token])

  const getDataSouce = () => {
    return ImageData.data.concat([]).reverse()
  }

  return (
    <div className="ai-image-page">
      <Layout className="ai-image-page-wrapper">
        <Sider className="ai-image-page-sider" width="388"><ImageParams></ImageParams></Sider>
        <Layout className="ai-image-page-content">
          <Content className="ai-image-page-content-main">
            <div className="image-prompt-title">
              <span>{t('What kind of image do you want to generate?')}</span>
              <div style={{float:'right',marginBottom:10,marginRight:10}}>
                <Button onClick={()=>imageData.transaction(imageData.prompt)}>{t('Transaction')}</Button>
              </div>
            </div>
            <div className="image-prompt-content">
              <Input.TextArea autoSize={{ minRows: 4 }} value={imageData.prompt} 
              onChange={(e) => imageData.setPrompt(e.target.value)}
                placeholder={t("mj.sample.input.message")}
                size="large">
              </Input.TextArea>
            </div>
            <div className="image-other-title">
              <span>{t('Unnecessary elements')}</span>
            </div>
            <div className="image-other-content">
              <Input.TextArea autoSize={{ minRows: 4 }} value={imageData.params.noNeedEle} 
              onChange={(e)=>imageData.changeNoNeedEle(e.target.value)}
              placeholder={t("Please enter the elements you do not want in the image (e.g., if you are drawing a room, you can specify whether you want a bed below).")}
                size="large">
              </Input.TextArea>
            </div>
            <div className="image-action-button">
              <Button disabled={imageData.disableSubmit}  type="primary" onClick={generate}>{t('Submit Task')}</Button>
            </div>
            <div className="clear-both">

            </div>
            <div className="image-history-title">
              {t('History')}
            </div>
            <div className="generate-tip">
               <span>{t("Click on the numbered button below to obtain an upgraded version (U: enlarge the image for more details) or a modified version (V: variant based on this)")}</span>
            </div>
            <div className="image-history-content">
              <List
                pagination={{
                  position: "bottom", align: "center", hideOnSinglePage: true, current: currentPage, pageSize, onChange(page, pageSize) {
                    setCurrentPage(page);
                    setPageSize(pageSize)
                  }
                }}
                grid={listLayout} dataSource={getDataSouce()} renderItem={(item) => {
                  return <ImageDetailItem data={item} globalMessageApi={globalMessageApi}></ImageDetailItem>
                }}>
              </List>
            </div>
            <div className="image-page-foot"></div>
          </Content>
        </Layout>
      </Layout>
    </div>)
}

export default observer(Image);