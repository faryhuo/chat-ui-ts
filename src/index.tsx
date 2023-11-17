import ReactDOM from 'react-dom/client';
import './index.css';
import './utils/i18n';
//import reportWebVitals from './reportWebVitals';
import Main from './page/main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Main></Main>
    <div className="icp_link">
      <a target='blank' href='https://docs.qq.com/doc/DSGlBTkhEaWNHRlFF'>免责声明</a> &nbsp;
      <a target='blank' href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2023068902号-1</a>
    </div>
  </Router>
);

setTimeout(() => {
  const imageDom = document.getElementById('image');
  if (imageDom != null) {
    imageDom.remove();
  }
  
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
