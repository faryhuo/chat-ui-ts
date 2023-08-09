
import { IAppConfig } from '../../store/AppConfig';
import ImageData from '../../store/ImageData';
import './Image.css'
import { observer } from "mobx-react-lite"
import { Button, Input, Layout, List } from 'antd';
import ImageParams from '../../component/image-params/ImageParams';
import ImageDetailItem from '../../component/image-detail-item/ImageDetailItem';
import { useState } from 'react';
import { MessageInstance } from 'antd/es/message/interface';
import { useTranslation } from 'react-i18next';
import imageData from '../../store/ImageData';
type IProps = {
  config: IAppConfig;
  globalMessageApi: MessageInstance;
}

const listLayout = {
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 2,
  xxl: 4,
};

const { Sider, Content } = Layout;
const Image: React.FC<IProps> = ({ config, globalMessageApi }) => {

  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [prompt, setPrompt] = useState("")

  const generate = () => {
    ImageData.generate(prompt, globalMessageApi)
  }

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
              <span>你想生成什么图像?</span>
            </div>
            <div className="image-prompt-content">
              <Input.TextArea autoSize={{ minRows: 4 }} value={prompt} onChange={(e) => setPrompt(e.target.value)}
                placeholder="例如: A cute little cat (Midjourney对中文描述词有一定限制、我们建议您点击右侧翻译将您的描述词转为英文再进行提交、联想则是会将您的描述词交由GPT让其发挥想象空间为您在此基础创建更为详细的描述！)"
                size="large">
              </Input.TextArea>
            </div>
            <div className="image-other-title">
              <span>不需要的元素</span>
            </div>
            <div className="image-other-content">
              <Input.TextArea autoSize={{ minRows: 4 }} value={imageData.params.noNeedEle} 
              onChange={(e)=>imageData.changeNoNeedEle(e.target.value)}
              placeholder="请输入图像中你不想要的元素（例如上面你在绘画一个房间、下面可以填写我要不要床）"
                size="large">
              </Input.TextArea>
            </div>
            <div className="image-action-button">
              <Button disabled={!!!prompt}  type="primary" onClick={generate}>{t('Submit Task')}</Button>
            </div>
            <div className="clear-both">

            </div>
            <div className="image-history-title">
              {t('History')}
            </div>
            <div className="generate-tip">
               <span>点击下面的编号按钮以获取升级版（U: 放大图片更细节）或变化版（V: 在此基础上变体）</span>
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
          </Content>
        </Layout>
      </Layout>
    </div>)
}

export default observer(Image);