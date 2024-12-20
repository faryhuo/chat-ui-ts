import ReactDOM from 'react-dom/client';
import './index.css';
import './utils/i18n';
import Main from './page/main/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import apiSetting from './store/APISetting';
import config from './store/AppConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Main></Main>
    {config.textLanguage==='zh' && <div className="icp_link">
      <a target='blank' href={apiSetting.websiteDoc}>免责声明</a> &nbsp;
      <a target='blank' href={apiSetting.websiteICP}>粤ICP备2023068902号-1</a>
    </div>}
  </Router>
);

///start event;
setTimeout(() => {
  const imageDom = document.getElementById('image');
  if (imageDom != null) {
    imageDom.remove();
  }
  fetch(apiSetting.maintenanceUrl)
  .then(res=>res.json())
  .then(res=>{
    const data=res.data;
    if(data && data.enable && data.url){
       window.location.href=data.url;
    }
  })
});

