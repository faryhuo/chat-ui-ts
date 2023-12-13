import ReactMarkdown from 'react-markdown';//引入
import RemarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
// import RehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import RehypeKatex from "rehype-katex";//支持数学公式
import RemarkMath from "remark-math";
import RemarkBreaks from "remark-breaks";

//import * as CodeStyle  from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import config from '../../store/AppConfig';
import copy from 'copy-to-clipboard';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import 'github-markdown-css';
import "katex/dist/katex.min.css";
import { observer } from "mobx-react-lite"
import './Markdown.css'
import asyncComponent from '../async-component/AsyncComponent'; 
import SyntaxHighlighter from 'react-syntax-highlighter';
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
        }else if (con.indexOf("mermaid") === 0) {
            language = "mermaid";
            activeLang = "mermaid";
        }
        return { language, activeLang };
    }

    const AsyncMermaid = asyncComponent(() => import ("../mermaid/Mermaid"));

    const copyCode=(content:string)=>{
        const { language, activeLang } = getLanguage(content)
         const codeContent=content.replace(activeLang?activeLang:language, '');
         copy(codeContent)
    }
 
    return(
        <ReactMarkdown
         className='markdown-body'
         children={content}
         remarkPlugins={[RemarkMath, RemarkGfm, RemarkBreaks]}
         rehypePlugins={[RehypeKatex]}
         components={{
             code({ node, className, children, ...props }) {
                 const match = /language-(\w+)/.exec(className || '')
                 if(match && match[1]==="mermaid"){
                     return <AsyncMermaid code={String(children)}></AsyncMermaid>
                 }
                 return (match && match[1]) ? (
                    <div className={`mk-code-content`}>
                    <div className="mk-button-wrapper">
                    <span className="mk-title"></span>
                    <span className="mk-copy-button">
                    <Button type="primary" 
                    onClick={()=>{copyCode(String(children))}} icon={<FontAwesomeIcon icon={faCopy} />} size="small" >Copy</Button></span></div>
                     <SyntaxHighlighter
                          {...props as any}
                         children={String(children).replace(/\n$/, '')}
                         //style={(CodeStyle  as any)[config.codeStyle]} 
                         style={a11yDark as any}
                         language={match?match[1]:"java"}
                         PreTag="div"
                     ></SyntaxHighlighter>
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