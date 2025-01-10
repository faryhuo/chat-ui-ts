import { Button, Upload, UploadFile, message } from 'antd';
import apiSetting from '../../store/APISetting';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IMessage } from '../../store/MessageData';
import { IAppConfig } from '../../store/AppConfig';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop} from '@fortawesome/free-solid-svg-icons';

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

  const [buttonEnable,setButtonEnable]= useState(true);


  const checkFileType = (file) => {
    const maxSizeMB = 10;
    const isLtMaxSize = file.size / 1024 / 1024 < maxSizeMB;
    if (!isLtMaxSize) {
      message.error(`File must be smaller than ${maxSizeMB}MB!`);
      return false;
    }
    return isLtMaxSize;
  };


  const handleChange = (info) => {
    if (info.file.status === 'removed'){
      store.setFiles(info.fileList);
      return;
    }

    if(checkModel() && checkFileType(info.file)===true){
      store.setFiles(info.fileList);
    }
  };


  const captureScreen = async () => {
    try {
      if (!checkModel()) return;
      
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();
      
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      stream.getTracks().forEach(track => track.stop());
      setButtonEnable(false);
      canvas.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], `screenshot-${Date.now()}.png`, {
            type: 'image/png',
          });
          
          if (checkFileType(file)) {
            const formData = new FormData();
            formData.append('file', file);
            
            try {
              const response = await fetch(apiSetting.imageUploadUrl, {
                method: 'POST',
                body: formData
              });
              setButtonEnable(true);
              if (response.ok) {
                const data = await response.json();
                const newFile = {
                  uid: Date.now().toString(),
                  name: file.name,
                  status: 'done',
                  url: data.url,
                  originFileObj: file,
                  response:data
                };
              const newFileList = [...store.files, newFile];
              store.setFiles(newFileList);
              } else {
                throw new Error('Upload failed');
              }
            } catch (error) {
              setButtonEnable(true);
              console.error('Upload error:', error);
              message.error('Failed to upload screenshot');
            }
          }
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error capturing screen:', error);
      message.error('Failed to capture screen');
      setButtonEnable(true);
    }
  };

  return (<div style={{ display: "inline-block" }}>
    <Upload
      method="post"
      accept={accept}
      fileList={store.files}
      action={apiSetting.imageUploadUrl}
      onChange={handleChange}
      maxCount={3}
      
      style={{ width: 20,height:20 }}
      itemRender={(originNode, file,fileList) => (
        <DraggableUploadListItem originNode={originNode} file={file} index={fileList.indexOf(file)}/>
      )}
    >
      {children}
    </Upload>
    <Button  disabled={!buttonEnable}
      icon={<FontAwesomeIcon icon={faDesktop} onClick={captureScreen}></FontAwesomeIcon>}>
    </Button>
    </div>)
})

export default AppUpload;
