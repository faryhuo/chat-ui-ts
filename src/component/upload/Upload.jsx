import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { Upload, message } from 'antd';

const AppUpload = ({ store, config}) => {

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };



  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      let fileName = info.file.response.data;
    }
  };

  return (<div style={{ display: "inline-block" }}>
    <Upload
      method="post"
      showUploadList={false}
      action={config.imageUploadUrl}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      style={{ width: 20 }}
    >
      <FontAwesomeIcon icon={faUpload} />
    </Upload></div>)
}

export default AppUpload;