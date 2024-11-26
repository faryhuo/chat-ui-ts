import { observer } from "mobx-react-lite"
import { Image } from 'antd';
import './MessageList.less';
import Markdown from '../markdown/Markdown'
import MessageItem2 from '../message-list-antd/MessageItem';
import MessageItemChat from '../message-list-chat/MessageItem';
import { IAppConfig } from '../../store/AppConfig';
import { Ichoices, IMessage, ISessiondata } from '../../store/MessageData';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

type IProps = {
    config: IAppConfig;
    store: IMessage;
}

const IMAGE_WIDTH = isMobile ? 256 : 512;


const getMessage = (arr: any[]) => {
    const choices = [...arr];
    const lastChoice = choices.pop();
    
    if (!lastChoice) return [];

    return [renderMarkdown(lastChoice.message.content)];
};
const renderMarkdown = (content: string) => <Markdown content={content} />;

const renderImage = (url: string, index: number) => (
    <Image key={index} width={IMAGE_WIDTH} height={IMAGE_WIDTH} src={url} />
);

const renderFileLink = (url: string, index: number) => (
    <a key={index} href={url} target="_blank" rel="noreferrer">file {index + 1}</a>
);

export const renderMessage = (item: ISessiondata) => {
    const className = classNames({ 
        "chat-row": true, 
        "chat-row-hide": item?.isDetails === false && item?.hasShowDetails === true 
    });

    if (item.translateText && item.showTranslateText) {
        return (
            <div className={className}>
                {renderMarkdown(item.translateText)}
            </div>
        );
    }

    if (item.text) {
        const lines = item.text.split("\n");
        const files = [];
        let displayText = item.text;

        lines.forEach((line, index) => {
            if (line.startsWith("https://mj.fary.chat")) {
                displayText = displayText.replace(line, "");
                files.push(renderFileLink(line, index));
            }
        });

        return (
            <div className={className}>
                {files}
                <pre style={{ maxWidth: 700, margin: 0, whiteSpace: 'break-spaces' }}>
                    {displayText}
                </pre>
            </div>
        );
    }

    if (item.content) {
        return renderSysChat4Content(item.content, className);
    }

    if (item.messageContent) {
        return renderSysChat4MsgContent(item.messageContent, className);
    }

    return renderSysChat(item.choices, className);
};

const renderSysChat4MsgContent = (content: any[], className: string | undefined) => {
    if (!content?.length) return <div />;

    const list = getMessageByMessageContent(content);
    return (
        <div className={className}>
            {list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

const renderSysChat4Content = (content: any[], className: string | undefined) => {
    if (!content?.length) return <div />;

    const list = getMessageByContent(content);
    return (
        <div className={className}>
            {list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

const renderSysChat = (choices: Ichoices[] | null | undefined, className: string | undefined) => {
    if (!choices?.length) return <div />;

    const list = getMessage(choices);
    return (
        <div className={className}>
            {list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

const getMessageByMessageContent = (arr: any[]) => {
    const contents = [...arr];
    const list = [];

    for (let i = 0; i < contents.length; i++) {
        const item = contents[i];
        if (item.type === "text") {
            list.push(renderMarkdown(item.text));
        } else if (item.type === "image_url") {
            list.push(renderImage(item.image_url.url, i));
        }
    }

    return list;
};

const getMessageByContent = (arr: any[]) => {
    const contents = [...arr];
    const list = [];

    for (let i = 0; i < contents.length; i++) {
        const item = contents[i];
        if (item.type === "text") {
            list.push(renderMarkdown(item.text.value));
        } else if (item.type === "image_file") {
            list.push(renderImage(item.image_file.url, i));
        }
    }

    return list;
};

const MessageList: React.FC<IProps> = observer(({ store, config }) => {
    const getMessageItem = () => {
        const props = {
            store,
            config,
            renderMessage: (item: ISessiondata) => renderMessage(item)
        };

        if (props.config.style === "chat") {
            return <MessageItemChat {...props} key="chat" />;
        }
        
        if (props.config.style === "antd") {
            return <MessageItem2 {...props} key="antd" />;
        }
    };

    return (
        <div className='message-list-wrapper' 
            style={{ 
                width: '100%', 
                height: '100%', 
                padding: 5, 
                boxSizing: 'border-box' 
            }}>
            {getMessageItem()}
        </div>
    );
});

export default MessageList;
