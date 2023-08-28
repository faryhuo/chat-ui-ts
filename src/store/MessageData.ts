import { makeObservable, observable, computed, action } from "mobx";
import i18n from '../utils/i18n';
import config from './AppConfig';
import axios from 'axios';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import userProflie, { USER_TOKEN_KEY } from "./UserProfile";
import roleData, { IRoleData, IRole } from "./RoleData";
import imageData from "./ImageData";
import saveAs from 'file-saver';
import { Location } from "react-router-dom";
import chatConfig, { IChatAPIConfig } from "./ChatConfig";

let encodeFun: any
import('gpt-tokenizer').then(({ encode }) => {
    encodeFun = encode;
})

export interface Ichoices {
    message: {
        content: string;
    }
}


export interface ISessiondata {
    isSys: boolean;
    isDefault?: boolean;
    isEdit?: boolean;
    isDetails?: boolean;
    hasShowDetails?: boolean;
    text?: string;
    choices?: Ichoices[] | null;
    stream?: boolean;
    end?: boolean;
    history?: any;
    currentIndex?: number;
    title?: string;
}

export interface ISessionMenu {
    name: string;
    key: string;
    edit: boolean;
    date: Date;
    select: string;
    favorite: boolean;
}

export interface ISession {
    favorite: boolean;
    chatId: string;
    chatName?: string;
    edit: boolean;
    isType: boolean;
    data: Array<ISessiondata>;
    chatConfig?: IChatAPIConfig;
    role?: number;
    updateDate: Date;
    isDone:boolean;
}

export interface IMessageListData {
    role: string;
    content: string;
    name?: string;
}


export interface IMessage {
    handleAPIError: (error: any, chatId: string) => void;
    version: string
    type: string;
    session: Array<ISession>;
    localSessionName: string;
    activeSession: string;
    addChat: () => string;
    newChat: () => void;
    addChatWithRole: (role: IRole) => string;
    endStream: (chatId: string) => void;
    triggerFavorite: (chatId: string) => void;
    appendData: (text: any, chatId: string) => void;
    addData: (newChat: any, chatId: string) => void;
    clear: (chatId: string) => void;
    isType: boolean;
    changeType: (type: string) => void;
    selectChat: (chatId: string) => void;
    changeRole: (chatId: string, role: number | undefined) => void;
    role: number | undefined | null;
    data: Array<ISessiondata>;
    getChatInfoByChatId: (chatId: string) => ISession | null;
    sessionData: Array<ISession>;
    sessionList: ISessionMenu[];
    getMessageListData: () => any;
    enableType: (chatId: string) => void;
    needStream: boolean;
    disableType: (chatId: string) => void;
    updateChatName: (name: string | undefined, chatId: string) => void;
    updateChatStatus: (status: boolean, chatId: string) => void;
    currentChatName: string;
    saveDataToFile: () => void;
    loadDataFromFile: (file: Blob) => void;
    reSentMsg: (index: number, msg: string) => void;
    callChatAPI: (chatId: string) => void;
    hasHistory: (history: any) => boolean;
    changeMessage: (rowIndex: number, msgIndex: number) => void;
    regenerateResponse: () => void;
    callImageAPI: (chatId: string, message: string) => Promise<void>;
    getChatHistory: () => void;
    clearHistoryResult: () => void;
    getChatHistoryByChatId:(chatId: string)=> Promise<void>;
    loadDataFromlocalStore: () => void;
    checkChatId: (chatId: string) => string;
    latestMessage: string | undefined;
    roleData: IRoleData;
    hideLastData: (chatId: string) => void;
    changeTypeByUrl: (location: Location) => void;
    share: (node: any) => Promise<void>;
    chatApiConfig: IChatAPIConfig;
    setChatApiConfig: <K extends keyof IChatAPIConfig>(key: K, value: IChatAPIConfig[K]) => void;
}


class MessageData implements IMessage {


    version = "2.0"
    localSessionName = `session_${this.version}`
    roleData = roleData;
    type = "chat"
    activeSession = "chat_" + new Date().getTime()
    session: Array<ISession> = [];

    historyResult:Promise<void> | null=null;

    constructor() {
        makeObservable(this, {
            type: observable,
            session: observable,
            activeSession: observable,
            data: computed,
            role: computed,
            sessionList: computed,
            isType: computed,
            needStream: computed,
            latestMessage: computed,
            addData: action,
            addChatWithRole: action,
            changeType: action,
            clear: action,
            selectChat: action,
            updateChatName: action,
            updateChatStatus: action,
            enableType: action,
            disableType: action,
            appendData: action,
            endStream: action,
            changeRole: action,
            hasHistory: action,
            changeMessage: action,
            checkChatId: action,
            setChatApiConfig: action,
            loadDataFromFile: action.bound,
            reSentMsg: action.bound,
            callChatAPI: action.bound,
            regenerateResponse: action.bound,
            getChatHistory: action.bound
        })
        if (localStorage[USER_TOKEN_KEY]) {
            userProflie.token = localStorage[USER_TOKEN_KEY];
            userProflie.loginByToken().then(() => {
                this.getChatHistory().then(() => {
                    this.addSharingData();
                });
            })
        } else {
            this.loadDataFromlocalStore();
            this.addSharingData();
        }
        //this.changeTypeByUrl();
    }

    clearHistoryResult(){
        this.historyResult=null;
    }

    addSharingData() {
        if (!window.location.hash.startsWith("#/share")) {
            return;
        }
        const uuidFromUrl = window.location.hash.replace("#/share/", "")
        if (!uuidFromUrl) {
            return;
        }
        let hasRecord = false;
        this.sessionData.forEach((item) => {
            if (item.chatId === uuidFromUrl) {
                hasRecord = true;
                return false;
            }
        })
        if (hasRecord) {
            window.location.hash = `#/chat/${uuidFromUrl}`;
            return;
        }
        axios(config.api.sharingUrl + "/" + uuidFromUrl, {
            method: "get"
        }).then((response) => {
            const data: ISession = response.data.data;
            if (data) {
                data.chatId = uuidFromUrl;
                data.updateDate = new Date();
                this.sessionData.push(data);
                if (userProflie.isLogin) {
                    this.saveSessionToDB(uuidFromUrl)
                }
                window.location.hash = `/chat/${uuidFromUrl}`;
                this.saveSessionToLocal();
            }
        })
    }

    changeTypeByUrl(location: Location) {
        const pathname = location.pathname;
        let type = "chat";
        if (pathname.startsWith("/chat")) {
            type = "chat";
        } else if (pathname.startsWith("/image")) {
            type = "image";
        } else if (pathname.startsWith("/painting_square")) {
            type = "painting_square";
        } else if (pathname.startsWith("/config")) {
            type = "config";
        } else {
            const ctype = pathname.replace("/", "");
            const types = ["sd", "code", "tips", "person"];
            if (types.includes(ctype)) {
                type = ctype;
            }
        }
        
        if (userProflie.premission.includes(type)) {
            if (type !== this.type) {
                this.changeType(type)
            }
        } else {
            //userProflie.openPage();
            //window.history.back();
        }
        if (type !== this.type) {
            this.changeType(type)
        }
    }

    loadDataFromlocalStore() {
        if (localStorage[this.localSessionName]) {
            this.session = JSON.parse(localStorage[this.localSessionName]);
            this.session.forEach((item) => {
                item.isType = true;
                if (item.data && item.data.length) {
                    if (item.data[item.data.length - 1].end === false) {
                        item.data[item.data.length - 1].end = true;
                    }
                }
            })
            if (this.sessionData.length) {
                this.activeSession = this.sessionData[this.sessionData.length - 1].chatId;
            } else {
                this.activeSession = "";
            }
        }
    }

    hasHistory(history: any) {
        return !!history && history.length > 0;
    }

    changeMessage(rowIndex: number, msgIndex: number) {
        this.data[rowIndex].choices = this.data[rowIndex].history[msgIndex];
        this.data[rowIndex].currentIndex = msgIndex;
    }

    regenerateResponse() {
        const oldMsg = this.data.pop();
        let chatId = this.activeSession + "";
        this.disableType(chatId);
        try {
            this.callChatAPINotSave(chatId).then(() => {
                this.sessionData.forEach((item) => {
                    if (item.chatId === chatId) {
                        const lastData = item.data[item.data.length - 1];
                        if (oldMsg && !oldMsg.history) {
                            lastData.history = [oldMsg?.choices];
                        } else {
                            lastData.history = oldMsg?.history;
                        }
                        lastData.history.push(lastData.choices);
                        lastData.currentIndex = lastData.history.length - 1;
                        this.save(chatId);
                    }
                });
            });
        } catch (e) {
            this.enableType(chatId);
        }
        this.saveSessionToLocal();
    }


    saveSessionToLocal() {
        if (!userProflie.isLogin) {
            localStorage[this.localSessionName] = JSON.stringify(this.sessionData);
        }
    }
    saveSessionToDB(chatId: string) {
        if (userProflie.isLogin && userProflie.token) {
            this.saveChatHistory(chatId);
        }
    }
    save(chatId: string) {
        this.saveSessionToLocal();
        this.saveSessionToDB(chatId)
    }

    newChat() {
        if (this.type === "chat") {
            this.activeSession = "";
            window.location.hash = "#/";
        } else {
            this.addChat();
        }
    }

    addChat() {
        const data: Array<ISessiondata> = [];

        let chatId = this.type + new Date().getTime();
        if (config.isSlowMsg4AddChat) {
            let tmp: ISessiondata = {
                isSys: true,
                isDefault: true
            };
            if (this.type === "chat") {
                tmp.text = i18n.t<string>("Type something to search on ChatGPT");
            } else if (this.type === "image") {
                tmp.text = i18n.t<string>("Type something to generate a image");
            } else if (this.type === "code") {
                tmp.text = i18n.t<string>("Type the code and your requirement");
            }
            data.push(tmp)
        }
        const sessionData: ISession = {
            chatId: chatId,
            chatName: "New Chat",
            data: data,
            isType: true,
            edit: false,
            favorite: false,
            updateDate: new Date(),
            chatConfig: Object.assign({},chatConfig.apiConfig),
            isDone:true
        };
        this.session.push(sessionData);
        this.activeSession = chatId;
        this.save(chatId);
        return chatId;
    }

    addChatWithRole(role: IRole) {
        const data: Array<ISessiondata> = [];

        let chatId = "chat" + new Date().getTime();
        if (config.isSlowMsg4AddChat) {
            let tmp: ISessiondata = {
                isSys: false,
                isDefault: true
            };
            tmp.text = role.description;
            data.push(tmp)
        }
        const sessionData: ISession = {
            chatId: chatId,
            chatName: role.roleName,
            data: data,
            isType: true,
            edit: false,
            role: role.roleId,
            favorite: false,
            updateDate: new Date(),
            isDone:true,
            chatConfig: role.setting ? role.setting :  Object.assign({},chatConfig.apiConfig)
        };
        this.session.push(sessionData);
        this.save(chatId);
        return chatId;
    }

    get isType() {
        let isType = true;
        this.sessionData.forEach((item) => {
            if (item.chatId === this.activeSession) {
                isType = item.isType;
                return false;
            }
        });
        return isType;
    }

    get needStream() {
        return this.isNeedStream(this.activeSession);
    }

    isNeedStream(chatId: string): boolean {
        let { session } = this;
        let data: Array<ISessiondata> = [];
        for (let i = 0; i < session.length; i++) {
            let item = session[i];
            if (item.chatId === chatId) {
                data = item.data;
                break;
            }
        }
        if (data) {
            if (data[data.length - 1]?.stream === true) {
                return !data[data.length - 1].end;
            } else {
                return false;
            }
        }
        return false;
    }

    endStream(chatId: string) {
        const chatData = this.getChatInfoByChatId(chatId);
        if (chatData && chatData.data && chatData.data.length >= 1) {
            chatData.data[chatData.data.length - 1].end = true;
        }
    }

    triggerFavorite(chatId: string) {
        const chatData = this.getChatInfoByChatId(chatId);
        if (!chatData) {
            return;
        }
        chatData.favorite = !!!chatData.favorite;
        if (userProflie.isLogin && userProflie.token) {
            this.triggerFavorateAPI(chatData, chatData.favorite, userProflie.token);
        } else {
            this.saveSessionToLocal();
        }
    }
    triggerFavorateAPI(chatData: ISession, type: boolean, token: string) {
        return new Promise((resolve, reject) => {
            axios({
                method: type ? "post" : "delete",
                url: config.api.fetFavoriteChatUrl + "/" + chatData.chatId,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "token": token
                }
            }).then((response) => {
                const data = response.data;
                if (data.message) {
                    reject(data.message)
                    return;
                }
                if (data && data.data) {
                    resolve(data);
                } else {
                    reject(data);
                }
            })
        });
    }


    appendData(text: string, chatId: string) {
        const chatData = this.getChatInfoByChatId(chatId);
        if (chatData && chatData.data && chatData.data.length >= 1) {
            const data = chatData.data;
            const choices = chatData.data[data.length - 1].choices;
            if (text && data && choices && choices.length > 0) {
                choices[0].message.content += text;
            }
        }
    }

    addData(newChat: ISessiondata, chatId: string) {
        if (!chatId) {
            chatId = this.activeSession;
        }
        let { session } = this;
        let data: ISessiondata[] = [];
        let curentItem: ISession | null = null;
        for (let i = 0; i < session.length; i++) {
            let item = session[i];
            if (item.chatId === chatId) {
                data = item.data;
                curentItem = item;
                item.updateDate = new Date();
                break;
            }
        }
        if ((data.length === 0 || (data[0].isDefault && data.length === 1)) && newChat.text && curentItem) {
            let text: string = newChat.text;
            if (text.length >= 20) {
                text = text.substring(0, 25) + "...";
            }
            curentItem.chatName = text;
        }
        data.push(newChat);
        this.saveSessionToLocal();
    }


    clear(chatId: string) {
        for (let i = 0; i < this.session.length; i++) {
            let item = this.session[i];
            if (item.chatId === chatId) {
                //remove(this.session,i)
                this.session.splice(i, 1);
                break;
            }
        }
        if (this.sessionData.length) {
            this.activeSession = this.sessionData[this.sessionData.length - 1].chatId;
        } else {
            this.activeSession = "";
        }
        //this.session.splice(deletedItem,1)
        this.saveSessionToLocal();
        this.deleteSessionById(chatId);
    }

    deleteSessionById(chatId: string) {
        if (userProflie.isLogin) {
            const queryUrl = config.api.historyUrl + `/${chatId}`;
            return axios({
                method: "delete",
                url: queryUrl,
                headers: {
                    'token': userProflie.token,
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
            ).then((response) => {

            });
        }
    }

    changeType(type: string) {
        if (!type) {
            return;
        }
        this.type = type;
        config.changeType(type);
        if (type === "code" || type === "image") {
            if (this.sessionList.length) {
                this.activeSession = this.sessionList[this.sessionList.length - 1].key;
            }
        }
    }

    selectChat(chatId: string) {
        if(userProflie.token){
            this.getChatHistory().then(()=>{
                this.getChatHistoryByChatId(chatId).then(()=>{
                    this.activeSession = chatId;
                    this.hideLastData(chatId);
                });
            })
        }else{
            this.activeSession = chatId;
            this.hideLastData(chatId);
        }
    }

    changeRole(chatId: string, role: number | undefined) {
        let { session } = this;
        for (let i = 0; i < session.length; i++) {
            let item = session[i];
            if (item.chatId === chatId) {
                item.role = role;
                if (!role) {
                    item.chatName = "New Chat";
                }
                let chatName;
                roleData.roles.forEach((sItem) => {
                    if (role === sItem.roleId) {
                        chatName = sItem.roleName;
                        if (this.data && this.data.length && config.isSlowMsg4AddChat) {
                            this.data[0].text = this.systemText;
                            this.data[0].isSys = false;
                        }
                    }
                })
                item.chatName = chatName;
                break;
            }
        }
    }

    get role() {
        const { activeSession, session } = this;
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch) {
            return sessionMatch.role;
        } else {
            return null;
        }
    }

    clearCurrentData() {
        const { activeSession, session } = this;
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch) {
            sessionMatch.data = [];
        }
    }
    getChatInfoByChatId(chatId: string): ISession | null {
        let { session } = this;
        const sessionMatch = session.find(item => item.chatId === chatId);
        if (sessionMatch) {
            return sessionMatch
        } else {
            return null;
        }
    }


    setChatApiConfig<K extends keyof IChatAPIConfig>(key: K, value: IChatAPIConfig[K]) {
        if (!userProflie.token && key === "model" && value) {
            if((value as string).startsWith("gpt-4")){
                userProflie.openPage();
                return;
            }
        }
        const { activeSession, session } = this;
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch) {
            if (!sessionMatch.chatConfig) {
                sessionMatch.chatConfig = Object.assign({}, chatConfig.getAPIConfig());
            }
            sessionMatch.chatConfig[key] = value;
        }
    }

    get chatApiConfig(): IChatAPIConfig {
        let { activeSession, session } = this;
        let config: IChatAPIConfig = chatConfig.getAPIConfig();
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch && sessionMatch.chatConfig) {
            config = sessionMatch.chatConfig;
        }
        return config;
    }

    get data(): Array<ISessiondata> {
        let { activeSession, session } = this;
        let data: Array<ISessiondata> = [];
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch && sessionMatch.data) {
            data = sessionMatch.data;
        }
        return data;
    }

    get sessionData(): Array<ISession> {
        return this.session;
    }

    get sessionList(): ISessionMenu[] {
        let arr: ISessionMenu[] = [];
        this.session.forEach((obj) => {
            let item: any = {};
            item.name = obj.chatName ? obj.chatName : "New Chat";
            item.key = obj.chatId;
            item.edit = obj.edit;
            item.date = obj.updateDate;
            item.select = item.key === this.activeSession;
            item.favorite = obj.favorite;
            arr.push(item);
        });
        return arr;
    }

    reSentMsg(index: number, msg: string) {
        this.data[index].text = msg;
        this.data.splice(index + 1, this.data.length - index - 1);
        let chatId = this.activeSession + "";
        this.disableType(chatId);
        try {
            this.callChatAPI(chatId);
        } catch (e) {
            this.enableType(chatId);
        }
    }

    handleAPIError(err: { message: string; }, chatId: string) {
        this.enableType(chatId);
        let msg = "Error";
        if (err.message) {
            msg = err.message;
        }
        this.addData({
            isSys: true,
            title: "Error",
            text: msg
        }, chatId);
    }

    callImageAPI(chatId: string, message: string): Promise<void> {
        return imageData.callImageAPI(chatId, message).then((response) => {
            this.enableType(chatId);
            if (response.data.data.error) {
                this.handleAPIError(response.data.data.error, chatId);
                return;
            }
            const images = response.data.data.data;
            for (let index in images) {
                let msg = {
                    isSys: true,
                    type: "image",
                    image: {
                        uri: images[index].url ? images[index].url : "data:image/png;base64," + images[index].b64_json,
                        width: 256,
                        height: 256
                    }
                }
                this.addData(msg, chatId);
            }
            this.save(chatId);
        }
            , (err) => {
                this.handleAPIError(err, chatId);
            });
    }

    checkChatId(chatId: string) {
        if (chatId) {
            let ret = false;
            this.session.forEach((item) => {
                if (item.chatId === chatId) {
                    ret = true;
                }
                return false;
            })
            if (ret) {
                return chatId;
            } else {
                return this.addChat();
            }
        } else {
            return this.addChat();
        }
    }

    getDataByChatId(chatId: string): ISession | null {
        let data: ISession | null = null;
        this.session.forEach((item) => {
            if (item.chatId === chatId) {
                data = item;
                return false;
            }
        });
        return data;
    }

    hideLastData(chatId: string) {
        const session = this.getDataByChatId(chatId);
        if (session !== null) {
            const data = session.data;
            if (data && data.length >= 2) {
                const lastData = data.slice(0, data.length - 2);
                lastData.forEach((item) => {
                    if (item.isDetails === null || item.isDetails === undefined) {
                        item.isDetails = false;
                    }
                    item.hasShowDetails = false;
                    if (item.choices) {
                        if (JSON.stringify(item.choices).length >= 300) {
                            item.hasShowDetails = true;
                        }
                    }
                })
            }
        }
    }

    callChatAPI(chatId: string) {
        if (chatConfig.getAPIConfig().stream) {
            return this.callChatAPIByStreamByPost(chatId).then(() => {
                this.hideLastData(chatId);
                this.save(chatId);
            })
        } else {
            return this.callChatAPIByHttp(chatId).then(() => {
                this.hideLastData(chatId);
                this.save(chatId);
            })
        }
    }

    callChatAPINotSave(chatId: string) {
        if (chatConfig.getAPIConfig().stream) {
            return this.callChatAPIByStreamByPost(chatId);
        } else {
            return this.callChatAPIByHttp(chatId)
        }
    }

    callChatAPIByStream = (chatId: string) => {
        const params = this.getChatParams();
        const queryString = new URLSearchParams(params as any).toString();
        const queryUrl = `${config.api.chatStreamUrl}?${queryString}`;
        let eventSource = new EventSource(queryUrl, {
            withCredentials: false
        });
        let self = this;
        let msgItem: ISessiondata = {
            isSys: true,
            stream: true,
            end: false,
            choices: [{ message: { content: "" } }]
        }
        const promise = new Promise((resolve, reject) => {
            eventSource.onmessage = function (event) {
                try {
                    let data = event.data.replace("data:", "").trim();
                    if (!data) {
                        return true;
                    }
                    if (!self.isNeedStream(chatId)) {
                        resolve(true);
                        self._closeEventSource(eventSource, chatId);
                        return;
                    }
                    if (data === "[DONE]") {
                        resolve(true);
                        self._closeEventSource(eventSource, chatId);
                    } else {
                        self.appendData(JSON.parse(data).choices[0].delta.content, chatId);
                    }
                } catch (e) {
                    reject(e);
                    self._closeEventSource(eventSource, chatId);
                }
            };

            eventSource.onerror = function (event) {
                reject(event);
                self._closeEventSource(eventSource, chatId);
            };
            self.addData(msgItem, chatId);
        });
        return promise;
    }

    _isValidJSON = (str: string) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    callChatAPIByStreamByPost = (chatId: string) => {
        const params = this.getChatParams();
        const queryUrl = `${config.api.chatStreamUrl}`;
        let self = this;
        let msgItem: ISessiondata = {
            isSys: true,
            stream: true,
            end: false,
            choices: [{ message: { content: "" } }]
        }
        const ctrl = new AbortController();

        const promise = new Promise((resolve) => {
            let errorMsg = "";
            fetchEventSource(queryUrl,
                {
                    method: "POST",
                    signal: ctrl.signal,
                    headers: {
                        'token': userProflie.token,
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(params),
                    onmessage(msg) {
                        let data = msg.data;
                        try {
                            if (!data) {
                                return true;
                            }
                            if (data === "[DONE]") {
                                resolve(true);
                                if (errorMsg) {
                                    try {
                                        let errorObj = JSON.parse(errorMsg);
                                        self.appendData(errorObj?.error?.message, chatId);
                                    } catch (e) {
                                        self.appendData(errorMsg, chatId);
                                    }
                                    errorMsg = "";
                                }
                                self.endStream(chatId);
                                self.enableType(chatId);
                                return;
                            }
                            if (!self.isNeedStream(chatId)) {
                                resolve(true);
                                ctrl.abort();
                                self.endStream(chatId);
                                self.enableType(chatId);
                                return;
                            }
                            if (!self._isValidJSON(data)) {
                                errorMsg = errorMsg + data;
                                return true;
                            } else {
                                self.appendData(JSON.parse(data).choices[0].delta.content, chatId);
                            }
                        } catch (e) {
                            ctrl.abort();
                            self._fetchSSEErrorHandle(resolve, chatId);
                        }
                    }, onerror(e) {
                        ctrl.abort();
                        self._fetchSSEErrorHandle(resolve, chatId);
                        throw e;
                    }, openWhenHidden: true
                });

            self.addData(msgItem, chatId);
        });
        return promise;
    }

    _fetchSSEErrorHandle(resolve: (value: unknown) => void, chatId: string) {
        resolve(false);
        this.appendData("got a unknow exception. please re-try", chatId);
        this.endStream(chatId);
        this.enableType(chatId);
    }

    _closeEventSource(eventSource: EventSource, chatId: string) {
        eventSource.close();
        this.endStream(chatId);
        this.enableType(chatId);
    }

    callChatAPIByHttp(chatId: string) {
        const params = this.getChatParams();
        const queryUrl = config.api.chatUrl;
        return axios({
            method: "post",
            url: queryUrl,
            headers: {
                'token': userProflie.token,
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(params)
        }
        ).then((response) => {
            this.enableType(chatId);
            if (response.data.error) {
                this.handleAPIError(response.data.error, chatId);
                return;
            }
            if (response.data.data.error) {
                this.handleAPIError(response.data.data.error, chatId);
                return;
            }
            const choices = response.data.data.choices;
            let msg = {
                isSys: true,
                choices: choices
            }
            this.addData(msg, chatId);
        }
            , (err) => {
                this.handleAPIError(err, chatId);
            });
    }

    saveChatHistory(chatId: string) {
        const queryUrl = config.api.historyUrl;
        this.session.forEach((item) => {
            if (item.chatId === chatId) {
                const data = item;
                axios({
                    method: "post",
                    url: queryUrl,
                    headers: {
                        'token': userProflie.token,
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify(data)
                });
                return;
            }
        });
    }

    promiseList:any={};

    getChatHistoryByChatId(chatId:string){
        if(this.promiseList[chatId]){
            return this.promiseList[chatId];
        }
        const promise= new Promise((resolve,reject)=>{
            // if(this.isDone(chatId)){
            //     resolve(chatId);
            //     return;
            // }
            if(!userProflie.token){
                resolve(chatId);
                return;
            }
            const queryUrl = config.api.historyUrl+"/"+chatId;
            axios({
                method: "get",
                url: queryUrl,
                headers: {
                    'token': userProflie.token,
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
            ).then((response) => {
                if(response.data.statusCode===0){
                    const data = response.data.data as ISession;
                    this.setChatData(chatId,data);
                    resolve(chatId);
                }else{
                    reject(chatId);
                }
            }).catch(()=>{
                reject(chatId);
            });
        });
        this.promiseList[chatId]=promise;
        return promise;
    }

    getChatHistory() {
        if(this.historyResult){
            return this.historyResult;
        }
        const queryUrl = config.api.historyUrl;
        this.historyResult= axios({
            method: "get",
            url: queryUrl,
            headers: {
                'token': userProflie.token,
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        ).then((response) => {
            const data = response.data.data;
            this.setSession(data);
            axios({
                method: "get",
                url: config.api.fetFavoriteChatUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "token": userProflie.token
                }
            }).then((favoriteResponse) => {
                const favoriteData = favoriteResponse.data;
                if (favoriteData.data) {
                    const arr: string[] = favoriteData.data;
                    this.sessionData.forEach(item => {
                        item.favorite = arr.includes(item.chatId);
                    });
                }
            })
        });
        return this.historyResult;
    }

    get systemText() {
        return this.role ? roleData.getContentByRole(this.role) : i18n.t<string>("Type something to search on ChatGPT")
    }

    getChatParams() {
        const chatAPIConfig = this.chatApiConfig;
        let messageListData = this.getMessageListData();
        let chatTokens = this.encodeChat(messageListData)
        let model = chatAPIConfig.model;
        if (chatTokens + chatAPIConfig.max_tokens >= chatConfig.getMaxTokenByModel(model)
            && !chatConfig.isMaxTokenModel(model)) {
            model = userProflie.isLogin ? chatConfig.getMaxTokenModel(model) : model;
        }
        while (chatTokens + chatAPIConfig.max_tokens >= chatConfig.getMaxTokenByModel(model)) {
            if (messageListData[0].role === "system") {
                messageListData.splice(2, 1);
            } else {
                messageListData.splice(0, 1);
            }
            chatTokens = this.encodeChat(messageListData);
        }
        let params = {
            messages: JSON.stringify(messageListData),
            model: model,
            channel:this.chatApiConfig.channle?this.chatApiConfig.channle:'gpt',
            temperature: chatAPIConfig.temperature,
            top_p: chatAPIConfig.top_p,
            presence_penalty: chatAPIConfig.presence_penalty,
            frequency_penalty: chatAPIConfig.frequency_penalty,
            max_tokens: chatAPIConfig.max_tokens ? chatAPIConfig.max_tokens : 1024,
            stream: chatAPIConfig.stream
        }
        return params;
    }

    get latestMessage() {
        if (this.data.length <= 1) {
            return "";
        }
        const choices = this.data[this.data.length - 1].choices;
        if (choices && choices.length > 0) {
            return choices[0]?.message?.content;
        } else {
            return this.data[this.data.length - 1]?.text;
        }
    }

    encodeChat(messageListData: IMessageListData[]) {
        let tokenNum = 0;
        messageListData.forEach(item => {
            tokenNum += 4;
            if (encodeFun != null) {
                tokenNum += encodeFun(item.content).length;
                tokenNum += encodeFun(item.role).length;
            }
        });
        tokenNum += 2;
        return tokenNum;
    }

    getMessageListData(): IMessageListData[] {
        const messages = [];
        if (this.role) {
            const contentSys = roleData.getContentByRole(this.role);
            if (contentSys) {
                messages.push({
                    role: "system",
                    content: contentSys
                })
            }
        }
        this.data.forEach((item) => {
            if (item.isDefault) {
                return true;
            }
            const msg = { role: "", content: "" };
            if (item.isSys) {
                msg.role = "assistant";
                let content = "";
                if (item.choices && item.choices) {
                    for (let i = 0; i < item.choices.length; i++) {
                        if (item.choices[i].message && item.choices[i].message.content) {
                            content += item.choices[i].message.content;
                        }
                    }
                }
                msg.content = content;
            } else {
                msg.role = "user";
                if (item.text) {
                    msg.content = item.text;
                }
            }
            if (msg.content) {
                messages.push(msg);
            }
        });
        return messages;
    }




    enableType(chatId: string) {
        this.sessionData.forEach((item) => {
            if (item.chatId === chatId) {
                item.isType = true;
                return false;
            }
        });
    }

    disableType(chatId: string) {
        this.sessionData.forEach((item) => {
            if (item.chatId === chatId) {
                item.isType = false;
                return false;
            }
        });
    }

    updateChatName(name: string | undefined, chatId: string) {
        this.sessionData.forEach((item) => {
            if (item.chatId === chatId) {
                item.chatName = name;
                return false;
            }
        });
    }
    updateChatStatus(status: boolean, chatId: string) {
        this.session.forEach((item) => {
            if (item.chatId === chatId) {
                item.edit = status;
            } else {
                item.edit = false;
            }
        });
        if (status === false) {
            this.save(chatId);
        }
    }

    get currentChatName() {
        let chatName = ""
        this.sessionData.forEach((item) => {
            if (item.chatId === this.activeSession) {
                chatName = item.chatName ? item.chatName : ""
                return false;
            }
        });
        return chatName;
    }

    setSession(session: ISession[]) {
        this.session = session;
    }

    isDone(chatId:string){
        const currentSession= this.session.find(item=>item.chatId===chatId);
        if(currentSession){
            return currentSession.isDone;
        }else{
            return false;
        }
    }
    
    setChatData(chatId:string,sessionData:ISession) {
        const currentSession= this.session.find(item=>item.chatId===chatId);
        if(currentSession){
            currentSession.data=sessionData.data;
            currentSession.chatConfig=sessionData.chatConfig;
            currentSession.isDone=true;
        }else{
            this.session.push(sessionData);
        }
    }

    loadDataFromFile(file: Blob) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const fileContent = reader.result?.toString();
            try {
                if (fileContent) {
                    const configJson = JSON.parse(fileContent);
                    if (configJson[this.localSessionName]) {
                        this.setSession(configJson[this.localSessionName]);
                        localStorage[this.localSessionName] = JSON.stringify(this.sessionData);
                    }
                    if (configJson[config.localConfigName]) {
                        config.setConfigData(configJson[config.localConfigName]);
                        localStorage[config.localConfigName] = JSON.stringify(config.getConfigJson());
                    }
                }
            } catch (e) {

            }
        }
    }

    saveDataToFile() {
        const configData: any = {
        }
        configData[this.localSessionName] = this.sessionData
        configData[config.localConfigName] = config.getConfigJson();
        const blob = new Blob([JSON.stringify(configData)]);
        saveAs(blob, 'export_data.json')
    }

    async share(node: any) {
        await import('html-to-image').then(({ toJpeg }) => {
            toJpeg(node, { quality: 0.95, backgroundColor: "" }).then((blob) => {
                saveAs(blob, 'chat.jpeg')
            })
        })
    }


}
const messageData = new MessageData();
export default messageData;