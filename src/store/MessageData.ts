import { makeObservable, observable, computed, action } from "mobx";
import i18n from '../utils/i18n';
import config from './AppConfig';
import axios from 'axios';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import userProflie, { USER_TOKEN_KEY } from "./UserProfile";
import roleData, { IRoleData, IRole } from "./RoleData";
import imageData from "./ImageData";
import saveAs from 'file-saver';
import { NavigateFunction } from "react-router-dom";
import chatConfig, { IChatAPIConfig } from "./ChatConfig";
import apiSetting from "./APISetting";
import userModelLimit from "./UserModelLimit";
import loadingObj from "./Loading";

let encodeFun: any
setTimeout(()=>{
    import('gpt-tokenizer').then(({ encode }) => {
        encodeFun = encode;
    })
},2000)
export interface MessageContent {
    type: string;
    text?: string;
    image_url?:{
        url: string;
        detail:'low' | 'high' | 'auto'
    }
}


export interface Ichoices {
    message: {
        content: MessageContent[] | string
    }
}


export interface ISessiondata {
    isSys: boolean;
    isDefault?: boolean;
    isError: boolean;
    isEdit?: boolean;
    isDetails?: boolean;
    hasShowDetails?: boolean;
    text?: string;
    messageContent?:MessageContent[];
    choices?: Ichoices[] | null;
    content?: any[];
    stream?: boolean;
    end?: boolean;
    history?: any;
    currentIndex?: number;
    title?: string;
    file_ids?:string[];
    audioId?:string;
    translateText?: string;
    showTranslateText?:boolean;
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
    assistant_id?:string;
    threadId?:string;
}

export interface IMessageListData {
    role: string;
    content: MessageContent[] | string;
    name?: string;
    file_ids?:string[];
}

export interface IMessage {
    handleAPIError: (error: any, chatId: string) => void;
    version: string
    type: string;
    sessionTotal:number;
    hashMore:boolean
    session: Array<ISession>;
    localSessionName: string;
    activeSession: string;
    isGPTs: boolean;
    addChat: () => Promise<string>;
    addChatWithGPTs:(gptsId: string,description:string,gptsName:string) => Promise<string>;
    deleteMessage:(chatId:string,index:number)=>void;
    newChat: (navigate:NavigateFunction)=>void;
    addChatWithRole: (role: IRole) => Promise<string>;
    endStream: (chatId: string) => void;
    triggerFavorite: (chatId: string) => void;
    appendData: (text: any, chatId: string) => void;
    addData: (newChat: any, chatId: string) => void;
    clear: (chatId: string) => void;
    isType: boolean;
    currentModel:string;
    files:any[];
    setFiles:(files:any)=>void;
    changeType: (type: string) => void;
    selectChat: (chatId: string) => void;
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
    clearHistoryChat:(chatIdList:string[])=> void;
    clearHistoryResult: () => void;
    getChatHistoryByChatId:(chatId: string)=> Promise<void>;
    loadDataFromlocalStore: () => void;
    checkChatId: (chatId: string) => string;
    checkIsImageModel:(chatId: string) => boolean;
    getSupportModelsText:()=>string;
    latestMessage: string | undefined;
    roleData: IRoleData;
    hideLastData: (chatId: string) => void;
    share: (node: any) => Promise<void>;
    chatApiConfig: IChatAPIConfig;
    speech:(item:ISessiondata)=>Promise<string>;
    setChatApiConfig: <K extends keyof IChatAPIConfig>(key: K, value: IChatAPIConfig[K]) => void;
}


export function getMessageFromContent(content:MessageContent[] | string){
    if(typeof content==='string'){
        return content;
    }else  if(typeof content==='object'){
        let result="";
        for(let i=0;i<content.length;i++){
            if(content[i].text){
                result=result+ content[i].text;
            }else if(content[i].image_url){
                result=result+ `[Image](${content[i].image_url?.url})`;
            }
        }
        return result;
    }else{
        return "";
    }
}

export function getMessageFromChoices(choices:Ichoices[] | null){
    if(!!choices){
        return getMessageFromContent(choices[0]?.message?.content);
    }else{
        return "";
    }
}

export function getMessageFromMessageContent(messageContent:any[]){
    let text="";
    messageContent.forEach(item=>{
        if(item.type==='text'){
            text=text+item.text.value;
        }
    })
    return text;
}

class MessageData implements IMessage {


    version = "2.0"
    localSessionName = `session_${this.version}`
    roleData = roleData;
    type = "chat"
    activeSession = "chat_" + new Date().getTime()
    session: Array<ISession> = [];
    files=[];

    setFiles(files){
        this.files=files;
    }


    historyResult:Promise<void> | null=null;

    constructor() {
        makeObservable(this, {
            type: observable,
            files: observable,
            session: observable,
            sessionTotal: observable,
            activeSession: observable,
            hashMore: computed,
            data: computed,
            sessionList: computed,
            isType: computed,
            isGPTs: computed,
            currentModel: computed,
            needStream: computed,
            latestMessage: computed,
            addData: action,
            addChatWithRole: action,
            addChatWithGPTs: action,
            changeType: action,
            clear: action,
            selectChat: action,
            updateChatName: action,
            updateChatStatus: action,
            enableType: action,
            disableType: action,
            appendData: action,
            endStream: action,
            hasHistory: action,
            changeMessage: action,
            deleteMessage:action,
            checkChatId: action,
            setFiles:action,
            setChatApiConfig: action,
            loadDataFromFile: action.bound,
            reSentMsg: action.bound,
            callChatAPI: action.bound,
            regenerateResponse: action.bound,
            getChatHistory: action.bound
        })
        if(window.location.pathname.startsWith("/token/")){
            const token=window.location.pathname.replace("/token/","");
            localStorage[USER_TOKEN_KEY]=token;
            window.location.pathname="/chat";
            return;
        }
        loadingObj.showLoading();
        if (localStorage[USER_TOKEN_KEY]) {
            userProflie.token = localStorage[USER_TOKEN_KEY];
            userProflie.loginByToken().then(() => {
                this.getChatHistory().then(() => {
                    loadingObj.setLoading(false);
                    this.addSharingData();
                });
            })
        } else {
            loadingObj.closeLoading();
            this.loadDataFromlocalStore();
            this.addSharingData();
        }
    }

    clearHistoryResult(){
        this.historyResult=null;
    }

    createSpeech(msg:string,voice:string ):Promise<string>{
        const params={
            model:"cosyvoice-v1",
            text:msg,
            voice:'longxiaoxia'
        };
        const apiUrl = `${apiSetting.audioUrl}`;
        return fetch(apiUrl,{
            method:"post",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(params)
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            return data.data;
        })
        
    }

    async speech(item:ISessiondata):Promise<string>{
        let msg= getMessageFromChoices(item.choices);
        if(item.translateText && item.showTranslateText){
            msg=item.translateText;
        }
        let msgId="";
        if(item  && item.audioId){
            msgId=item.audioId;
        }else{
            msgId=await this.createSpeech(msg,config.audioVoice);
            if(item && msgId){
                item.audioId=msgId;
            }
        }
        const apiUrl = `${apiSetting.audioUrl}?msgId=${encodeURI(msgId)}`;
        return apiUrl;
    }

    addSharingData() {
        if (!window.location.pathname.startsWith("/share")) {
            return;
        }
        const uuidFromUrl = window.location.pathname.replace("/share/", "")
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
            window.location.pathname = `/chat/${uuidFromUrl}`;
            return;
        }
        axios(config.api.sharingUrl + "/" + uuidFromUrl, {
            method: "get"
        }).then((response) => {
            const data: ISession = response.data.data;
            console.log(data);
            if (data) {
                data.chatId = uuidFromUrl;
                data.updateDate = new Date();
                this.sessionData.push(data);
                if (userProflie.isLogin) {
                    this.saveSessionToDB(uuidFromUrl)
                }
                window.location.pathname = `/chat/${uuidFromUrl}`;
                this.saveSessionToLocal();
            }
        })
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
        this.data[rowIndex].choices = this.data[rowIndex].history[msgIndex].data;
        this.data[rowIndex].title= this.data[rowIndex].history[msgIndex].title;
        this.data[rowIndex].currentIndex = msgIndex;
    }

    regenerateResponse() {
        const oldMsg = this.data.pop();
        let chatId = this.activeSession + "";
        const currentModel=this.getModelNameByChatId(chatId);
        this.disableType(chatId);
        try {
            this.callChatAPINotSave(chatId).then(() => {
                this.sessionData.forEach((item) => {
                    if (item.chatId === chatId) {
                        const lastData = item.data[item.data.length - 1];
                        if (oldMsg && !oldMsg.history) {
                            const historyItem={data:oldMsg?.choices,title:oldMsg.title}
                            lastData.history = [historyItem];
                        } else {
                            lastData.history = oldMsg?.history;
                        }
                        const historyItem={data:lastData.choices,title:currentModel}
                        lastData.history.push(historyItem);
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

    deleteMessage(chatId:string,index:number){
        this.getChatInfoByChatId(chatId).data.splice(index, 1);
        this.save(chatId);
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

    newChat(navigate:NavigateFunction) {
        this.activeSession = "";
        navigate("/chat");
        if(config.isMobile){
            config.isSlowLeftMenu=false;
        }
    }

    async addChat() {
        const data: Array<ISessiondata> = [];
        const modelConfig=Object.assign({},chatConfig.apiConfig);
        let chatId = this.type + new Date().getTime();
        if (config.isSlowMsg4AddChat) {
            let tmp: ISessiondata = {
                isSys: true,
                isError:false,
                isDefault: true
            };
            tmp.text=i18n.t(`model.${modelConfig.channel}.${modelConfig.model}.description`)
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
            chatConfig: modelConfig,
            isDone:true
        };
        this.session.push(sessionData);
        this.activeSession = chatId;
        await this.save(chatId);
        return chatId;
    }

    async addChatWithGPTs(gptsId: string,description:string,gptsName:string) {
        if (!userProflie.token) {
            userProflie.openPage();
            return;
        }
        const data: Array<ISessiondata> = [];
        let chatId = "gpts_" + new Date().getTime();
        if (config.isSlowMsg4AddChat) {
            let tmp: ISessiondata = {
                isSys: true,
                isError:false,
                isDefault: true
            };
            tmp.text = description;
            data.push(tmp)
        }
        let gptsConfig=Object.assign({},chatConfig.apiConfig);
        gptsConfig.model=gptsId;
        gptsConfig.channel="gpt";
        const sessionData: ISession = {
            chatId: chatId,
            chatName: gptsName,
            data: data,
            isType: true,
            edit: false,
            favorite: false,
            updateDate: new Date(),
            isDone:true,
            chatConfig: gptsConfig
        };
        console.log(sessionData)
        this.session.push(sessionData);
        await this.save(chatId);
        return chatId;
    }

    async addChatWithRole(role: IRole) {
        const data: Array<ISessiondata> = [];

        let chatId = "chat" + new Date().getTime();
        if (config.isSlowMsg4AddChat) {
            let tmp: ISessiondata = {
                isSys: false,
                isError:false,
                isDefault: false
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
            favorite: false,
            updateDate: new Date(),
            isDone:true,
            chatConfig: role.setting ? role.setting :  Object.assign({},chatConfig.apiConfig)
        };
        this.session.push(sessionData);
        await this.save(chatId);
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

    
    get isGPTs() {
        return this.activeSession.startsWith("gpts_")
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
        chatData.isType=false;
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

    appendErrorData(text: string, chatId: string) {
        const chatData = this.getChatInfoByChatId(chatId);
        if (chatData && chatData.data && chatData.data.length >= 1) {
            const data = chatData.data;
            const recrod=chatData.data[data.length - 1];
            const choices = recrod.choices;
            if (text && data && choices && choices.length > 0) {
                choices[0].message.content = text;
            }
            recrod.title="Error"
            recrod.isError=true;
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
        if(userProflie.isLogin){
            this.deleteSessionById(chatId);
        }else{
            this.saveSessionToLocal();
        }
    }

    clearHistoryChat(chatIdList:string[]){
        if(userProflie.isLogin){
            const queryUrl = config.api.historyUrl;
            return axios({
                method: "delete",
                url: queryUrl,
                headers: {
                    'token': userProflie.token,
                    'Content-Type': 'application/json;charset=UTF-8'
                },data:chatIdList
            }).then((rep)=>{
                if(rep.data.statusCode===0){
                    this.clearHistoryResult();
                    this.getChatHistory();
                }
            })
        }else{
            chatIdList.forEach(chatId=>this.clear(chatId))
        }
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
    }

    selectChat(chatId: string) {
        loadingObj.showLoading();
        if(userProflie.token){
            this.getChatHistory().then(()=>{
                this.getChatHistoryByChatId(chatId).then(()=>{
                    loadingObj.closeLoading();
                    this.activeSession = chatId;
                    const currentData=this.getChatInfoByChatId(chatId);
                    userModelLimit.getModelUsage(currentData?.chatConfig?.model as string);
                    this.hideLastData(chatId);
                });
            })
        }else{
            loadingObj.closeLoading();
            this.activeSession = chatId;
            this.hideLastData(chatId);
        }
        if(config.isMobile){
            config.isSlowLeftMenu=false;
        }
    }

    clearCurrentData() {
        const { activeSession, session } = this;
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch) {
            sessionMatch.data = [];
        }
    }

    get currentModel(): string {
        let { session } = this;
        const sessionMatch = i18n.t(session.find(item => item.chatId === this.activeSession)?.chatConfig?.model as any);
        if (sessionMatch) {
            return sessionMatch
        } else {
            return "gpt-3.5-turbo";
        }
    }

    getModelNameByChatId(chatId: string): string {
        let { session } = this;
        const sessionMatch = i18n.t(session.find(item => item.chatId === chatId)?.chatConfig?.model as any);
        if (sessionMatch) {
            return sessionMatch
        } else {
            return "gpt-3.5-turbo";
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
        if(key === "model" && value){
            if (!userProflie.token) {
                if((value as string).startsWith("gpt-4") && (value!=="gpt-4o-mini")){
                    userProflie.openPage();
                    return;
                }
            }else{
                userModelLimit.getModelUsage(value as string);
            }
        }
        const { activeSession, session } = this;
        const sessionMatch = session.find(item => item.chatId === activeSession);
        if (sessionMatch) {
            if (!sessionMatch.chatConfig) {
                sessionMatch.chatConfig = Object.assign({}, chatConfig.getAPIConfig());
            }
            if(key === "model"){
                const newChannel=chatConfig.getModelChange(value as any);
                sessionMatch.chatConfig['channel'] = newChannel;
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
            isError:true,
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
                    isError:false,
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

    supportModels=["gemini-pro-vision",'gpt-4o-all','gpt-4o-mini','o1-mini-all','o1-pro-all']

    getSupportModelsText(){
        return `( ${this.supportModels.map(item=>i18n.t(item))} )`
    }

    checkIsImageModel(chatId: string) {
        const model=this.getChatInfoByChatId(chatId)?.chatConfig?.model;
        return this.supportModels.includes(model) || this.isGPTs;
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
                this.addChat();
            }
        } else {
            this.addChat();
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
        const chatData=this.getChatInfoByChatId(chatId);
        if(!chatData){
            return;
        }
        if(chatData?.chatConfig?.model==="gpt-all-tool"){
            return this.callAssisantAPI(chatId).then(() => {
                this.hideLastData(chatId);
                this.save(chatId);
            })
        }else if (chatData?.chatConfig?.stream) {
            return this.callChatAPIByStreamByPost(chatId).then(() => {
                userModelLimit.getCurrentModelUsage();
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
        const chatData=this.getChatInfoByChatId(chatId);
        if(chatData?.chatConfig?.model==="gpt-all-tool"){
            return this.callAssisantAPI(chatId);
        }else if (chatConfig.getAPIConfig().stream) {
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
            isError:false,
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
            isError:false,
            stream: true,
            end: false,
            title:this.getModelNameByChatId(chatId),
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
                        try {
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
                                const responseJson=JSON.parse(data);
                                if(responseJson.error==="429"){
                                    self.appendErrorData(i18n.t("Only 5 messages can be sent within 1 minute."), chatId)
                                    resolve(true);
                                    ctrl.abort();
                                    self.endStream(chatId);
                                    self.enableType(chatId);
                                    return;
                                }
                                self.appendData(responseJson.choices[0].delta.content, chatId);
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
        this.appendData(i18n.t("got a unknow exception. please re-try"), chatId);
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
                isError:false,
                choices: choices
            }
            this.addData(msg, chatId);
        }
            , (err) => {
                this.handleAPIError(err, chatId);
            });
    }

    callAssisantAPI(chatId: string) {
        const params = this.getAssistantParams(chatId);
        const queryUrl = apiSetting.assistantsUrl;
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
            const content = response.data.data.content;
            const threadId=response.data.data.thread_id;
            const chatObj=this.getChatInfoByChatId(chatId);
            if(chatObj && threadId){
                chatObj.threadId=threadId;
            }
            let msg = {
                isSys: true,
                isError:false,
                content: content
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

    updateChatHistory(chatId: string,chatName:string) {
        const queryUrl = config.api.historyUrl+"/"+chatId+"?chatName="+encodeURI(chatName);
        const chatObj=this.session.find(item => item.chatId === chatId);;
        if(chatObj){
            axios({
                method: "put",
                url: queryUrl,
                headers: {
                    'token': userProflie.token,
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });
        }
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

   sessionTotal=0;

   get hashMore(){
    if(this.sessionTotal===0){
        return true;
    }
    return this.sessionTotal>this.sessionData.length
   }

   getChatHistory () {
        if(this.sessionTotal>0 && this.sessionTotal===this.sessionData.length){
            return new Promise<void>(resolve=>resolve());
        }
        const queryUrl = config.api.historyUrl;
        this.historyResult= axios({
            method: "get",
            url: queryUrl,
            headers: {
                'token': userProflie.token,
                'Content-Type': 'application/json;charset=UTF-8'
            },params:{
                startAt:this.sessionData.length
            }
        }
        ).then((response) => {
            const data = response.data.data;
            this.sessionTotal=response.data.total;
            this.appendSession(data);
        });
        return this.historyResult;
    }

    
    getMessageListData4Assistant(): IMessageListData[] {
        const messages = [];
        this.data.forEach((item) => {
            if (item.isDefault) {
                return true;
            }
            if(item.isError){
                return true;
            }
            const msg = { role: "user", content: "",file_ids:item.file_ids?item.file_ids:[] };
            if (!item.isSys) {
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



    getAssistantParams(chatId:string){
        let messageListData = this.getMessageListData4Assistant();

        
        return {
            messages:messageListData,
            assistant_id:"asst_pbM93jEndLMj4vRzOv3i61Vb",
            thread_id:this.getChatInfoByChatId(chatId)?.threadId
        }
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
        console.log(chatTokens);
        const channel=chatConfig.getModelChange(model);
        let params = {
            messages: JSON.stringify(messageListData),
            model: model,
            channel:channel,
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
            return getMessageFromContent(choices[0]?.message?.content);
        } else {
            return this.data[this.data.length - 1]?.text;
        }
    }

    encodeChat(messageListData: IMessageListData[]) {
        let tokenNum = 0;
        messageListData.forEach(item => {
            tokenNum += 4;
            if (encodeFun != null) {
                if(typeof item.content==="string"){
                    tokenNum += encodeFun(item.content).length;
                }else if(typeof item.content==="object"){
                    item.content.forEach((contentItem)=>{
                        if(contentItem.text){
                            tokenNum += encodeFun(contentItem.text).length;
                        }else if(contentItem.image_url){
                            if(contentItem.image_url?.detail==='low'){
                                tokenNum += 65;
                            }else{
                                tokenNum += 129;
                            }
                        }
                    });
                }
                tokenNum += encodeFun(item.role).length;
            }
        });
        tokenNum += 2;
        return tokenNum;
    }

    uploadFile(file: File, chatId: string) {
        // const formData = new FormData();
        // formData.append('file', file);
        // const queryUrl = config.api.uploadFileUrl;
        // return axios({
        //     method: "post",
        //     url: queryUrl,
        //     headers: {
        //         'token': userProflie.token,
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     data: formData
        // }
        // ).then((response) => {
        //     const data = response.data;
        //     if (data.error) {
        //         this.handleAPIError(data.error, chatId);
        //         return;
        //     }
        //     if (data.data.error) {
        //         this.handleAPIError(data.data.error, chatId);
        //         return;
        //     }
        //     const url = data.data.url;
        //     let msg = {
        //         isSys: false,
        //         isError:false,
        //         type: "image",
        //         image: {
        //             uri: url,
        //             width: 256,
        //             height: 256
        //         }
        //     }
        //     this.addData(msg, chatId);
        // }
        //     , (err) => {
        //         this.handleAPIError(err, chatId);
        //     });
    }

    getMessageListData(): IMessageListData[] {
        const messages = [];
        this.data.forEach((item) => {
            if (item.isDefault) {
                return true;
            }
            if(item.isError || item.title==='Error'){
                return true;
            }
            console.log(item);
            const msg = { role: "", content: []};
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
                msg.content = [{
                    text:content,
                    type:"text"
                }];
            } else {
                msg.role = "user";
                if (item.text) {
                    msg.content.push({
                        text:item.text,
                        type:"text"
                    });
                }else if(item.messageContent){
                   msg.content=item.messageContent;
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
                if(status===false){
                    if (userProflie.isLogin && userProflie.token && item.chatName) {
                        this.updateChatHistory(chatId,item.chatName);
                    }else{
                        this.saveSessionToLocal();
                    }
                }
            } else {
                item.edit = false;
            }
        });
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

    appendSession(session: ISession[]) {
        session.forEach(item=>{
            let sessionItem=this.session.find((subItem)=>item.chatId===subItem.chatId);
            if(sessionItem){
                sessionItem=item;
            }else{
                this.session.push(item);
            }
        })
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