import { Upload, UploadFile, message } from 'antd';
import apiSetting from '../../store/APISetting';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { IMessage } from '../../store/MessageData';
import { IAppConfig } from '../../store/AppConfig';
import { useTranslation } from 'react-i18next';

interface DraggableUploadListItemProps {
  originNode: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  file: UploadFile<any>;
  index:number;
}

const DraggableUploadListItem = ({ originNode, file,index }: DraggableUploadListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: file.uid,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
    position:'absolute',
    top:-40-index*20
  };
 
  return (
    <div
      ref={setNodeRef}
      style={style}
      // prevent preview event when drag end
      className={isDragging ? 'files-list-wrapper is-dragging' : 'files-list-wrapper'}
      {...attributes}
      {...listeners}
    >
      {/* hide error tooltip when dragging */}
      {file.status === 'error' && isDragging ? originNode.props.children : originNode}
    </div>
  );
};

type IProps = {
  config: IAppConfig;
  store: IMessage;
  children:any;
  accept?:string;
}
const AppUpload : React.FC<IProps> = observer(({store, config,children,accept}) => {
  const {t} = useTranslation();

  const checkModel = () => { 
    if(!store.checkIsImageModel(store.activeSession+"")){
      message.error(t('Only support those models.') + store.getSupportModelsText());
      return false;
    }
    return true;
  };


  const checkFileType = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return false;
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must smaller than 10MB!');
      return false;
    }
    return isJpgOrPng && isLt10M;
  };


  const handleChange = (info) => {
    if (info.file.status === 'removed'){
      store.setFiles(info.fileList);
      return;
    }

    if(checkModel() && checkFileType(info.file)===true){
      store.setFiles(info.fileList);
    }
    // if (info.file.status === 'uploading') {
    //   return;
    // }
    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   console.log(info.file.response.data);
    //   store.setFiles([...store.files,info.file]);
    //   console.log(store.files);
    // }else if (info.file.status === 'removed') {
    //   store.files.splice(store.files.indexOf(info.file),1)
    //   store.setFiles(store.files);
    // }
  };


  return (<div style={{ display: "inline-block" }}>
    <Upload
      method="post"
      accept={accept}
      fileList={store.files}
      action={apiSetting.imageUploadUrl}
      onChange={handleChange}
      maxCount={3}
      
      style={{ width: 20 }}
      itemRender={(originNode, file,fileList) => (
        <DraggableUploadListItem originNode={originNode} file={file} index={fileList.indexOf(file)}/>
      )}
    >
      {children}
    </Upload></div>)
})

export default AppUpload;

