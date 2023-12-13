import { Button,Input } from 'antd'
import config from '../../store/AppConfig';
import './MessageItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faTrashCan, faCheck, faCopy, faRefresh, faPlay, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { IMessage, ISessiondata } from '../../store/MessageData';
import MsgStep from '../msg-item-step/MsgActionBtn';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import MsgActionBtn from '../msg-action-items/MsgActionBtn';

type IProps = {
    content: any;
    title?: string;
    type?: string;
    text?: string;
    index: number;
    store?: IMessage;
    item?: ISessiondata;
    readonly?: boolean;
}

const { TextArea } = Input;
const MessageItem: React.FC<IProps> = observer(({ content, title, type, text, index, store, item, readonly }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [innerContent, setInnerContent] = useState<any>("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(330);


    useEffect(() => {
        if (messagesEndRef?.current?.clientWidth) {
            setWidth(messagesEndRef?.current?.clientWidth - 10);
        }
    }, [content])


    const editInput = () => {
        setIsEdit(true);
        setInnerContent(text);
    }


    const cancel = () => {
        setIsEdit(false);
        setInnerContent(text);
    }

    const editAndResent = () => {
        setIsEdit(false);
        if (store && index >= 0) {
            store.reSentMsg(index, innerContent);
        }
    }

    const changeContent = (e: { target: { value: any; }; }) => {
        setInnerContent(e.target.value)
    }

    const userInput = (<div className="rce-container-mbox message-item-user" style={{margin:"10px 0"}}>
        <div className="rce-mbox rce-mbox-right" style={{ background: config.colorPrimary + "a3" }}>
            <div className="rce-mbox-body">
                <div className="rce-mbox-title rce-mbox-title--clear">
                    <span>{title ? title : "User"}</span>
                </div><div className="rce-mbox-text right" ref={messagesEndRef}>{isEdit ?
                    <div className="chat-row" >
                        <TextArea
                            value={innerContent}
                            style={{ width: width }}
                            size="large"
                            onChange={(e) => { changeContent(e) }}
                            autoSize={{ minRows: 2, maxRows: 8 }}
                            spellCheck={true}
                            allowClear
                            //   onPressEnter={()=>this.editAndResent()}
                            maxLength={2000}
                        /></div> : (
                        <div className={classNames({ "chat-row": true, "chat-row-hide": item?.isDetails === false && item?.hasShowDetails === true })}>
                            <pre style={{ margin: 0 }}>{content}</pre>
                        </div>)}</div>
                <div className="rce-mbox-time non-copiable"></div></div>
            <svg className="rce-mbox-right-notch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path style={{ fill: config.colorPrimary + "a3", fillOpacity: 1 }} d="M0 0v20L20 0"></path></svg></div>
        {readonly !== true && <div style={{ float: 'right' }}>
            {!isEdit && <Button onClick={() => { editInput() }} shape="round" icon={<FontAwesomeIcon icon={faPaintbrush} />}  ></Button>}
            {isEdit && <Button style={{ display: 'block', marginBottom: 5 }} onClick={() => { editAndResent() }} shape="round" icon={<FontAwesomeIcon icon={faCheck} />}  ></Button>}
            {isEdit && <Button onClick={() => { cancel() }} shape="round" icon={<FontAwesomeIcon icon={faTrashCan} />}  ></Button>}
        </div>}
    </div>)


    return (type === "user") ? userInput : (
        <div style={{ overflow: 'auto',margin:"10px 0" }} className="rce-container-mbox message-item-system"><div className="rce-mbox"><div className="rce-mbox-body">
            <div className="rce-mbox-title rce-mbox-title--clear"><span>{item?.title ? item?.title : "AI"}</span></div>
            <div className="rce-mbox-text left">{content}
                {store && item && <MsgStep store={store} index={index} item={item}></MsgStep>}
            </div>
            <div className="rce-mbox-time non-copiable"></div></div>
            <div><svg className="rce-mbox-left-notch" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"><defs><filter id="filter1" x="0" y="0">
                    <feOffset result="offOut" in="SourceAlpha" dx="-2" dy="-5"></feOffset>
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3">
                    </feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M20 0v20L0 0" filter="url(#filter1)"></path></svg>
            </div>
        </div>
        {/* <MsgActionBtn store={store} item={item}></MsgActionBtn> */}
        </div>
    )

});


export default MessageItem;
