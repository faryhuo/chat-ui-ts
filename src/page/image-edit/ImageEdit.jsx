import React from 'react';
import {
    MessageList,
    ImageSend
} from '../../component';
import './ImageEdit.css'


const ImageEdit = ({store,config})=>{

    return (
    <div className="image-edit-page">
    <div className="message-list">                
        <MessageList  config={config} store={store}></MessageList>
    </div>
    <div className="send-button">
        <ImageSend store={store}  config={config}></ImageSend>
    </div>
</div>)
}

export default ImageEdit;