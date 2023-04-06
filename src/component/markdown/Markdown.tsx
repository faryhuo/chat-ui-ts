import React from 'react';
import ReactMarkdown from 'react-markdown';//引入
import remarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as CodeStyle  from 'react-syntax-highlighter/dist/esm/styles/hljs';
import config from '../../store/AppConfig';
import copy from 'copy-to-clipboard';
import { Button } from 'antd';
import {CopyOutlined} from '@ant-design/icons'
import 'github-markdown-css';
import { observer } from "mobx-react-lite"
import './Markdown.css'

type IProps={
    content:string;
  }
const Markdown : React.FC<IProps>=observer(({content})=>{

    const getLanguage= (con: string) =>{
        let  language="";
        let  activeLang="";
        if (con.indexOf("html") === 0) {
            language = "html";
        } else if (con.indexOf("jsx") === 0) {
            language = "js";
            activeLang = "jsx";
        }else if (con.indexOf("xml") === 0) {
            language = "xml";
        } else if (con.indexOf("javascript") === 0) {
            language = "javascript";
        }  else if (con.indexOf("json") === 0) {
            language = "json";
        }else if (con.indexOf("css") === 0) {
            language = "css";
        } else if (con.indexOf("typescript") === 0) {
            language = "typescript";
        }  else if (con.indexOf("sh") === 0) {
            language = "bash";
            activeLang = "sh";
        } else if (con.indexOf("java") === 0) {
            language = "java";
        } else if (con.indexOf("less") === 0) {
            language = "less";
        } else if (con.indexOf("python") === 0) {
            language = "python";
        } else if (con.indexOf("sql") === 0) {
            language = "sql";
        } else if (con.indexOf("sql") === 0) {
            language = "sql";
        } else if (con.indexOf("php") === 0) {
            language = "php";
        } else if (con.indexOf("bash") === 0) {
            language = "bash";
        }else if (con.indexOf("js") === 0) {
            language = "javascript";
            activeLang = "js";
        }
        return { language, activeLang };
    }
 
    return(
        <ReactMarkdown
         className='markdown-body'
         children={content}
         remarkPlugins={[remarkGfm]}
         rehypePlugins={[rehypeRaw]}
         components={{
             code({ node, inline, className, children, ...props }) {
                 const match = /language-(\w+)/.exec(className || '')
                 const { language, activeLang } = getLanguage(String(children))
                 const codeContent=String(children).replace(activeLang?activeLang:language, '');
                 return !inline ? (
                    <div className={`mk-code-content`}>
                    <div className="mk-button-wrapper">
                    <span className="mk-title"></span>
                    <span className="mk-copy-button">
                    <Button type="primary" 
                    onClick={()=>{copy(codeContent)}} icon={<CopyOutlined />} size="small" >Copy</Button></span></div>
                     <SyntaxHighlighter
                         children={String(children).replace(/\n$/, '')}
                         style={(CodeStyle  as any)[config.codeStyle]} 
                         language={match?match[1]:"java"}
                         PreTag="div"
                         {...props}
                     />
                     </div>
                 ) : (
                     <code className={className} {...props}>
                         {children}
                     </code>
                 )
             }
         }}
         />
    )
});
 
export default Markdown