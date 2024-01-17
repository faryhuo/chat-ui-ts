import React from 'react';
import './Loading.css';
type IProps = {
}
const Loading: React.FC<IProps> = () => {

  return (<div className='loading-mask'>
    <div className="image-wrapper">
      <img  src="https://mj.fary.chat/ui-image/image.gif" alt='Loading ... ' />
    </div>
  </div>)
}

export default Loading;