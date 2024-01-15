import React from 'react';
import './Loading.css';
type IProps={
}
const Loading:React.FC<IProps> = ()=>{

    return (<div className='loading-mask'>
    <img src="https://mj.fary.chat/ui-image/image.gif" alt='Loading ... '/>
  </div>)
}

export default Loading;