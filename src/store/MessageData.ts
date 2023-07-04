import { makeObservable, observable, computed, action} from "mobx";
import i18n from '../utils/i18n';
import config  from './AppConfig';
import axios from 'axios';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import userProflie from "./UserProfile";
import roleData,{IRoleData,IRole} from "./RoleData";
import imageData from "./ImageData";
import saveAs from 'file-saver';
import { Location } from "react-router-dom";

let encodeFun: any
import('gpt-tokenizer').then(({encode})=>{
    encodeFun=encode;
})

export interface Ichoices{
    message:{
        content:string;
    }
}

export interface  ISessiondata{
    isSys?:boolean;
    isDefault?:boolean;
    isEdit?:boolean;
    isDetails?:boolean;
    hasShowDetails?:boolean;
    text?:string;
    choices?:Ichoices[] | null;
    code?:any;
    image?:any;
    stream?:boolean;
    end?:boolean;
    history?:any;
    currentIndex?:number;
    title?:string;
}

export interface ISessionMenu{
    name:string;
    key:string;
    edit:boolean;
    date:Date;
    select:string;
}

export interface  ISession{
    chatId:string;
    type:string;
    chatName?:string;
    edit:boolean;
    isType:boolean;
    data:Array<ISessiondata>;
    role?:number;
    updateDate?:Date;
}

export interface IMessageListData{
    role:string;
    content:string;
    name?:string;
}


export interface IMessage{
    handleAPIError:(error:any,chatId:string)=>void;
    version:string
    type:string;
    session:Array<ISession>;
    localSessionName:string;
    activeSession:string;
    addChat:()=>string;
    newChat:()=>void;
    addChatWithRole:(role:IRole)=>string;
    endStream:(chatId:string)=>void;
    appendData:(text:any,chatId:string)=>void;
    addData:(newChat: any,chatId: string) =>void;
    clear:(chatId: string) =>void;
    isType:boolean;
    changeType:(type: string)=>void;
    selectChat:(chatId: string)=>void;
    changeRole:(chatId: string,role: number | undefined)=>void;
    role:number | undefined;
    data:Array<ISessiondata>;
    getChatInfoByChatId:(chatId:string)=>ISession | null;
    sessionData:Array<ISession>;
    currentSession:Array<ISession>;
    sessionList:ISessionMenu[];
    getMessageListData:()=>any;
    enableType:(chatId: string)=>void;
    needStream:boolean;
    disableType:(chatId: string)=>void;
    updateChatName:(name: string | undefined,chatId: string)=>void;
    updateChatStatus:(status: boolean,chatId: string)=>void;
    currentChatName:string;
    latestText:string;
    saveDataToFile:()=>void;
    loadDataFromFile:(file:Blob)=>void;
    reSentMsg:(index:number,msg:string)=>void;
    callChatAPI:(chatId: string)=>void;
    hasHistory:(history:any)=>boolean;
    changeMessage:(rowIndex:  number,msgIndex:number)=>void;
    regenerateResponse:()=>void;
    callImageAPI:(chatId: string,message: string)=>Promise<void>;
    getChatHistory:()=>void;
    loadDataFromlocalStore:()=>void;
    checkChatId:(chatId: string)=>string;
    latestMessage:any;
    roleData:IRoleData;
    hideLastData:(chatId:string)=>void;
    changeTypeByUrl:(location: Location)=>void;
    share:(node: any)=>Promise<void>
}

class MessageData implements  IMessage{
    

    version="2.0"
    localSessionName=`session_${this.version}`
    roleData=roleData;
    type="chat"
    activeSession="chat_"+new Date().getTime()
    session:Array<ISession>=[{
        chatId:this.activeSession+"",
        type:"chat",
        chatName:"Chat 1",
        edit:false,
        isType:true,
        data:[
            {
            isSys:true,
            isDefault:true,
            text:i18n.t<string>("Type something to search on ChatGPT")
            }
        ],
        updateDate:new Date()
    },{
        chatId:"image",
        type:"image",
        edit:false,
        isType:true,
        data:[
            {
             isSys:true,
             isDefault:true,
            text:i18n.t<string>("Type something to generate a image"),
            choices:null
            }
        ],
        updateDate:new Date()
    },{
        chatId:"code",
        type:"code",
        edit:false,
        isType:true,
        data:[
            {
                isSys:true,
                isDefault:true,
               text:i18n.t<string>("Type the code and your requirement"),
               choices:null
               }
        ],
        updateDate:new Date()
    }]

    latestText="";
    


    constructor() {
        makeObservable(this, {
            type: observable,
            session: observable,
            activeSession: observable,
            latestText:observable,
            data: computed,
            role: computed,
            sessionList: computed,
            isType: computed,
            needStream: computed,
            latestMessage: computed,
            addData: action,
            addChatWithRole:action,
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
            checkChatId:action,
            loadDataFromFile: action.bound,
            reSentMsg:action.bound,
            callChatAPI:action.bound,
            regenerateResponse:action.bound,
            getChatHistory:action.bound
        })
        if(localStorage["user-token"]){
            userProflie.token=localStorage["user-token"];
            userProflie.loginByToken().then(()=>{
                this.getChatHistory();
            })
        }else{
            this.loadDataFromlocalStore();
        }
        //this.changeTypeByUrl();
    }

    changeTypeByUrl(location: Location){
        const pathname=location.pathname;
        if(pathname.startsWith("/config")){
            this.changeType("config")
        }else if(pathname.startsWith("/share")){
            this.changeType("share")
        }else{
            const type=pathname.replace("/","");
            const types=["chat","image","sd","code"];
            if(types.includes(type)){
                this.changeType(pathname.replace("/",""))
            }
        }
        console.log(this.type)
    }

    loadDataFromlocalStore(){
        if(localStorage[this.localSessionName]){
            this.session=JSON.parse(localStorage[this.localSessionName]);
            this.session.forEach((item)=>{
                item.isType=true;
                if(item.data && item.data.length){
                    if(item.data[item.data.length-1].end===false){
                        item.data[item.data.length-1].end=true;
                    }
                }
            })
            if(this.currentSession.length){
                this.activeSession=this.currentSession[this.currentSession.length-1].chatId;
            }else{
                this.activeSession="";
            }
        }
    }

    hasHistory(history:any){
        return !!history && history.length>0;
    }

    changeMessage(rowIndex:  number,msgIndex:number){
        if(this.type==="image"){
            this.data[rowIndex].image=this.data[rowIndex].history[msgIndex];
            this.data[rowIndex].currentIndex=msgIndex;
        }else{
            this.data[rowIndex].choices=this.data[rowIndex].history[msgIndex];
            this.data[rowIndex].currentIndex=msgIndex;
        }
    }

    regenerateResponse(){
        const oldMsg= this.data.pop();
        let chatId=this.activeSession+"";
        this.disableType(chatId);
        try{
            if(this.type==="image"){
                const msg=this.data[this.data.length-1].text;
                if(!msg){
                    return;
                }
                this.callImageAPI(chatId,msg).then(()=>{
                    this.sessionData.forEach((item)=>{
                        if(item.chatId===chatId){
                            const lastData=item.data[item.data.length-1];
                            if(oldMsg && !oldMsg.history){
                                lastData.history=[oldMsg?.image];
                            }else{
                                lastData.history=oldMsg?.history;
                            }
                            lastData.history.push(lastData.image);
                            lastData.currentIndex=lastData.history.length-1;
                            if(!userProflie.isLogin){
                                localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
                            }
                        }
                    });
                })
            }else{
                this.callChatAPINotSave(chatId).then(()=>{
                    this.sessionData.forEach((item)=>{
                        if(item.chatId===chatId){
                            const lastData=item.data[item.data.length-1];
                            if(oldMsg && !oldMsg.history){
                                lastData.history=[oldMsg?.choices];
                            }else{
                                lastData.history=oldMsg?.history;
                            }
                            lastData.history.push(lastData.choices);
                            lastData.currentIndex=lastData.history.length-1;
                            this.save(chatId);
                        }
                    });
            });
        }
        }catch(e){
            this.enableType(chatId);
        }
        this.saveSessionToLocal();
    }

    
    saveSessionToLocal(){
        if(!userProflie.isLogin){
            localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
        }
    }
    saveSessionToDB(chatId: string){
        if(userProflie.isLogin && userProflie.token){
            this.saveChatHistory(chatId);      
        }
    }
    save(chatId: string){
        this.saveSessionToLocal();
        this.saveSessionToDB(chatId)
    }

    newChat(){
        if(this.type==="chat"){
            this.activeSession="";
            window.location.hash="#/";
        }else{
            this.addChat();
        }
    }

    addChat(){
        const data:Array<ISessiondata>=[];
        
        let chatId="chat"+new Date().getTime();
        if(config.isSlowMsg4AddChat){
            let tmp:ISessiondata={
                isSys:true,
                isDefault:true
            };
            if(this.type==="chat"){
                tmp.text=i18n.t<string>("Type something to search on ChatGPT");
            }else if(this.type==="image"){
                tmp.text=i18n.t<string>("Type something to generate a image");
            }else if(this.type==="code"){
                tmp.text=i18n.t<string>("Type the code and your requirement");
            }
            data.push(tmp)
        }
        const sessionData:ISession={
            type:this.type,
            chatId:chatId,
            chatName:"Chat "+(this.session.length+1),
            data:data,
            isType:true,
            edit:false,
            updateDate: new Date()
        };
        this.session.push(sessionData);
        this.activeSession=chatId;
        this.save(chatId);
        return chatId;
    }

    addChatWithRole(role:IRole){
        const data:Array<ISessiondata>=[];
        
        let chatId="chat"+new Date().getTime();
        if(config.isSlowMsg4AddChat){
            let tmp:ISessiondata={
                isSys:true,
                isDefault:true
            };
            tmp.text=config.isChinese?role.descriptionCN:role.description;
            data.push(tmp)
        }
        const sessionData:ISession={
            type:"chat",
            chatId:chatId,
            chatName:config.isChinese?role.roleNameCN:role.roleName,
            data:data,
            isType:true,
            edit:false,
            role:role.roleId,
            updateDate: new Date()
        };
        this.session.push(sessionData);
        this.save(chatId);
        return chatId;
    }

    get isType(){
        let isType=true;
        this.sessionData.forEach((item)=>{
            if(item.chatId===this.activeSession){
                isType=item.isType;
                return false;
            }
        });
        return isType;
    }

    get needStream(){
        return this.isNeedStream(this.activeSession);
    }

    isNeedStream(chatId: string):boolean {
        let {type,session}=this;
        let data:Array<ISessiondata>=[];
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                data=item.data;
                break;
            }
        }
        if(data){
            if(data[data.length-1]?.stream===true){
                return !data[data.length-1].end;
            }else{
                return false;
            }
        }
        return false;
    }

    endStream(chatId: string) {
        if(!chatId){
            chatId=this.activeSession;
        }
        let {type,session}=this;
        let data:Array<ISessiondata>=[];
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                data=item.data;
                break;
            }
        }
        if(data){
            data[data.length-1].end=true;
        }
    }

    appendData(text: any,chatId: string) {
        if(!chatId){
            chatId=this.activeSession;
        }
        let {type,session}=this;
        let data:Array<ISessiondata>=[];
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                data=item.data;
                item.updateDate=new Date();
                break;
            }
        }
        const choices=data[data.length-1].choices;
        if(text && data && choices && choices.length>0){
            choices[0].message.content+=text;
            this.latestText=choices[0].message.content;
            this.saveSessionToLocal();
        }
    }

    addData(newChat: ISessiondata,chatId: string) {
        if(!chatId){
            chatId=this.activeSession;
        }
        let {type,session}=this;
        let data:ISessiondata[]=[];
        let curentItem:ISession | null=null;
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                data=item.data;
                curentItem=item;
                item.updateDate=new Date();
                break;
            }
        }
        if((data.length===0 || data[0].isDefault) && newChat.text && curentItem){
            let text:string=newChat.text;
            if(text.length>=20){
                text=text.substring(0,20)+"...";
            }
            curentItem.chatName=text;
        }
        data.push(newChat);
        this.saveSessionToLocal();
    }


    clear(chatId: string) {
        for(let i=0;i<this.session.length;i++){
            let item=this.session[i];
            if(item.type===this.type && item.chatId===chatId){
                //remove(this.session,i)
                this.session.splice(i,1);
                break;
            }
        }
        if(this.currentSession.length){
            this.activeSession=this.currentSession[this.currentSession.length-1].chatId;
        }else{
            this.activeSession="";
        }
        //this.session.splice(deletedItem,1)
        this.saveSessionToLocal();
        this.deleteSessionById(chatId);
    }

    deleteSessionById(chatId: string){
        if(userProflie.isLogin){
            const queryUrl = config.api.historyUrl+`/${chatId}`;
            return axios({
                method: "delete",
                url: queryUrl,
                headers: {
                'token':userProflie.token,
                'Content-Type': 'application/json;charset=UTF-8'
                }
            }
            ).then((response)=>{

            });
        }
    }

    changeType(type: string) {
        if(!type){
            return;
        }
        this.type=type;
        config.changeType(type);
        if(type==="code" || type === "image"){
            if(this.sessionList.length){
                this.activeSession=this.sessionList[this.sessionList.length-1].key;
            }
        }
    }

    selectChat(chatId: string){
        this.activeSession=chatId;
        this.hideLastData(chatId);
    }

    changeRole(chatId: string,role: number | undefined){
        let {type,session}=this;
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                item.role=role;
                if(!role){
                    item.chatName="New Chat";
                }
                let chatName;
                roleData.roles.forEach((sItem)=>{
                    if(role===sItem.roleId){
                        chatName=config.isChinese?sItem.roleNameCN:sItem.roleName;
                        if(this.data && this.data.length && config.isSlowMsg4AddChat){
                            this.data[0].text=this.systemText;
                            this.data[0].isSys=false;
                        }
                    }
                })
                item.chatName=chatName;
                break;
            }
        }
    }

    get role(){
        let {type,activeSession,session}=this;
        let role;
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===activeSession){
                role=item.role;
                break;
            }
        }
        return role;
    }

    clearCurrentData(){
        let {type,activeSession,session}=this;
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===activeSession){
                item.data=[]
            }
        }
    }
    getChatInfoByChatId(chatId:string):ISession | null{
        let {type,session}=this;
        let data: ISession | null=null;
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                data=item;
                break;
            }
        }
        return data;
    }

    get data():Array<ISessiondata>{
        let {type,activeSession,session}=this;
        let data: Array<ISessiondata>=[];
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===activeSession){
                data=item.data;
                break;
            }
        }
        return data;
    }
    get sessionData():Array<ISession>{
        return this.session;
    }

    get currentSession():Array<ISession>{
        return this.session.filter((item)=>{
            return item.type===this.type;
        })    
    }

    get sessionList():ISessionMenu[]{
        let arr:ISessionMenu[]=[];
        this.session.forEach((obj) => {
            if(obj.type!==this.type){
                return true;
            }
            let item:any={};
            item.name=obj.chatName?obj.chatName:"New Chat";
            item.key=obj.chatId;
            item.edit=obj.edit;
            item.date=obj.updateDate;
            item.select=item.key===this.activeSession;
            arr.push(item);
        });
        return arr;
    }

    reSentMsg(index:number,msg:string){
        this.data[index].text=msg;
        this.data.splice(index+1,this.data.length-index-1);
        let chatId=this.activeSession+"";
        this.disableType(chatId);
        try{
            this.callChatAPI(chatId);
        }catch(e){
            this.enableType(chatId);
        }
    }

    handleAPIError(err: { message: string; },chatId: string){
        this.enableType(chatId);
        let msg="Error";
        if(err.message){
          msg=err.message;
        }
        this.addData({
          isSys:true,
          title:"Error",
          text:msg
        },chatId);
    }

    callImageAPI(chatId: string,message: string):Promise<void>{
        return imageData.callImageAPI(chatId,message).then((response)=>{
          this.enableType(chatId);
          if(response.data.data.error){
            this.handleAPIError(response.data.data.error,chatId);
            return;
          }
          const images = response.data.data.data;
          for(let index in images){
            let msg={
                isSys:true,
                type:"image",
                image:{
                  uri: images[index].url?images[index].url:"data:image/png;base64,"+images[index].b64_json,
                  width:256,
                  height:256
                }               
            }
            this.addData(msg,chatId);              
           }   
          }
        ,(err)=>{
            this.handleAPIError(err,chatId);
        });
    }

    checkChatId(chatId: string){
        if(chatId){
            let ret=false;
            this.session.forEach((item)=>{
                if(item.chatId===chatId){
                    ret=true;
                }
                return false;
            })
            if(ret){
                return chatId;
            }else{
                return this.addChat();
            }
        }else{
           return this.addChat();
        }
    }

    getDataByChatId(chatId:string):ISession | null{
        let data:ISession | null=null;
        this.session.forEach((item)=>{
            if(item.chatId===chatId){
                data=item;
                return false;
            }
        });
        return data;
    }

    hideLastData(chatId:string){
        const session= this.getDataByChatId(chatId);
        if(session!==null){
           const data= session.data;
           if(data.length>=2){
                const lastData=data.slice(0,data.length-2);
                lastData.forEach((item)=>{
                    if(item.isDetails===null || item.isDetails===undefined){
                        item.isDetails=false;
                    }
                    item.hasShowDetails=false;
                    if(item.choices){
                        if(JSON.stringify(item.choices).length>=300){
                            item.hasShowDetails=true;
                        }
                    }
                })
           }
        }
    }

    callChatAPI(chatId: string){
        if(config.chatConfig.getAPIConfig().stream){
          return this.callChatAPIByStreamByPost(chatId).then(()=>{
            this.hideLastData(chatId);
            this.save(chatId);
          })
        }else{
          return this.callChatAPIByHttp(chatId).then(()=>{
            this.hideLastData(chatId);

            this.save(chatId);
          })
        }
    }

    callChatAPINotSave(chatId: string){
        if(config.chatConfig.getAPIConfig().stream){
          return this.callChatAPIByStreamByPost(chatId);
        }else{
          return this.callChatAPIByHttp(chatId)
        }
    }

    callChatAPIByStream=(chatId:string)=>{
        const params=this.getChatParams();
        const queryString = new URLSearchParams(params as any).toString();
        const queryUrl =`${config.api.chatStreamUrl}?${queryString}`;
        let eventSource = new EventSource(queryUrl,{
          withCredentials:false
        });
        let self=this;
        let msgItem:ISessiondata={
            isSys:true,
            stream:true,
            end:false,
            choices:[{message:{content:""}}]
        }
        const promise=new Promise((resolve, reject)=>{
            eventSource.onmessage = function(event) {
                try{
                let data=event.data.replace("data:","").trim();
                if(!data){
                    return true;
                }
                if(!self.isNeedStream(chatId)){
                    resolve(true);
                    self._closeEventSource(eventSource, chatId);
                    return;
                }
                if(data==="[DONE]"){
                    resolve(true);
                    self._closeEventSource(eventSource, chatId);
                }else {
                    self.appendData(JSON.parse(data).choices[0].delta.content,chatId);
                }
                }catch(e){
                    reject(e);
                    self._closeEventSource(eventSource, chatId);
                }
            };
        
            eventSource.onerror = function(event) {
                reject(event);
                self._closeEventSource(eventSource, chatId);
            };
            self.addData(msgItem,chatId);   
        });
        return promise;
    } 

    callChatAPIByStreamByPost=(chatId:string)=>{
        const params=this.getChatParams();
        const queryUrl =`${config.api.chatStreamUrl}`;
        let self=this;
        let msgItem:ISessiondata={
            isSys:true,
            stream:true,
            end:false,
            choices:[{message:{content:""}}]
        }
        const promise=new Promise((resolve, reject)=>{
            let errorMsg="";
            fetchEventSource(queryUrl, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body:JSON.stringify(params),
                onmessage(msg) {
                  //console.log("message", msg.data); // this works - data is here!
                  let data = msg.data; 
                  try{
                    if(!data){
                        return true;
                    }
                    if(data.indexOf("data: ")===0){
                        data=data.replace("data: ","")
                    }else{
                        errorMsg=errorMsg+data;
                        return true;
                    }
                    if(!self.isNeedStream(chatId)){
                        resolve(true);
                        self.endStream(chatId);
                        self.enableType(chatId);
                        return;
                    }
                    if(data==="[DONE]"){
                        resolve(true);
                        if(errorMsg){
                            try{
                                let errorObj=JSON.parse(errorMsg);
                                self.appendData(errorObj?.error?.message,chatId);
                            }catch(e){
                                self.appendData(errorMsg,chatId);
                            }
                            errorMsg="";
                        }
                        self.endStream(chatId);
                        self.enableType(chatId);
                        return;
                    }else {
                        self.appendData(JSON.parse(data).choices[0].delta.content,chatId);
                    }
                    }catch(e){
                        reject(e);
                        self.endStream(chatId);
                        self.enableType(chatId);
                    }
                },onerror(e){
                    reject(e);
                    self.endStream(chatId);
                    self.enableType(chatId);
                }
              });
        
            self.addData(msgItem,chatId);   
        });
        return promise;
    } 

    _closeEventSource(eventSource: EventSource, chatId: string) {
        eventSource.close();
        this.endStream(chatId);
        this.enableType(chatId);
    }

    callChatAPIByHttp(chatId: string){
       const params=this.getChatParams();
       const queryUrl = config.api.chatUrl;
       return axios({
            method: "post",
            url: queryUrl,
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data : JSON.stringify(params)
          }
        ).then((response)=>{
            this.enableType(chatId);
            if(response.data.error){
                this.handleAPIError(response.data.error,chatId);
                return;
            }
            if(response.data.data.error){
              this.handleAPIError(response.data.data.error,chatId);
              return;
            }
            const choices = response.data.data.choices;
            let msg={
                isSys:true,
                choices:choices
            }
            this.addData(msg,chatId);
          }
          ,(err)=>{
            this.handleAPIError(err,chatId);
          });
    }

    saveChatHistory(chatId:string){
        const queryUrl = config.api.historyUrl;
        this.session.forEach((item)=>{
            if(item.chatId===chatId){
                const data=item;
                axios({
                    method: "post",
                    url: queryUrl,
                    headers: {
                      'token':userProflie.token,
                      'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data : JSON.stringify(data)
                  }
                ).then((response)=>{

                });
                return;
            }
        });
    }

    getChatHistory(){
        const queryUrl = config.api.historyUrl;
        return axios({
            method: "get",
            url: queryUrl,
            headers: {
              'token':userProflie.token,
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
        ).then((response)=>{
            const data=response.data.data;
            //console.log(data);
            this.session.forEach(item=>{
                if(item.type==="image"){
                    data.push(item);
                }
            })
            this.setSession(data);
            //this.changeType("chat");
        });
    }

    get systemText(){
        return this.role?roleData.getContentByRole(this.role):i18n.t<string>("Type something to search on ChatGPT")
    }

    getChatParams(){
        const chatConfig=config.chatConfig.getAPIConfig();
        let messageListData= this.getMessageListData();
        let chatTokens = this.encodeChat(messageListData)
        let model=chatConfig.model;
        if(chatTokens+chatConfig.max_tokens>=config.chatConfig.getMaxTokenByModel(model) 
        && !config.chatConfig.isMaxTokenModel(model)){
            model=config.chatConfig.getMaxTokenModel(model);
        }
        while(chatTokens+chatConfig.max_tokens>=config.chatConfig.getMaxTokenByModel(model)){
            if(messageListData[0].role==="system"){
                messageListData.splice(2,1);
            }else{
                messageListData.splice(0,1);
            }
            chatTokens = this.encodeChat(messageListData);
        }
        console.log(chatTokens);
        let params={ 
          messages:JSON.stringify(messageListData),
          uuid: this.activeSession,
          model: model,
          temperature:chatConfig.temperature,
          top_p:chatConfig.top_p,
          presence_penalty:chatConfig.presence_penalty,
          frequency_penalty:chatConfig.frequency_penalty,
          max_tokens:chatConfig.max_tokens?chatConfig.max_tokens:1024,
          stream:chatConfig.stream
        }
        return params;
    }

    get latestMessage(){
        if(this.data.length<=1){
            return this.data;
        }
        const choices=this.data[this.data.length-1].choices;
        if(choices && choices.length>0){
            return choices[0]?.message?.content;
        }else{
            return this.data[this.data.length-1].text;
        }
    }  

    encodeChat(messageListData:IMessageListData[]){
        let tokenNum=0;
        messageListData.forEach(item=>{
            tokenNum += 4; 
            if(encodeFun!=null){
                tokenNum += encodeFun(item.content).length;
                tokenNum += encodeFun(item.role).length;
            }
        });
        tokenNum +=2;
        return tokenNum;
    }

    getMessageListData():IMessageListData[]{
        const messages=[];
        if(this.role){
            const contentSys=roleData.getContentByRole(this.role);
            if(contentSys){
                messages.push({
                    role:"system",
                    content:contentSys
                })
            }
        }
        this.data.forEach((item)=>{
            if(item.isDefault){
                return true;
            }
            const msg={role:"",content:""};
            if(item.isSys){
                msg.role="assistant";
                let content="";
                if(item.choices && item.choices){
                    for(let i=0;i<item.choices.length;i++){
                        if(item.choices[i].message && item.choices[i].message.content){
                            content+=item.choices[i].message.content;
                        }
                    }
                }
                msg.content=content;
            }else{
                msg.role="user";
                if(item.text){
                    msg.content=item.text;
                }
            }
            if(msg.content){
                messages.push(msg);
            }
        });
        return messages;
    }


    

    enableType(chatId: string){
        this.sessionData.forEach((item)=>{
            if(item.chatId===chatId){
                item.isType=true;
                return false;
            }
        });
    }

    disableType(chatId: string){
        this.sessionData.forEach((item)=>{
            if(item.chatId===chatId){
                item.isType=false;
                return false;
            }
        });
    }

    updateChatName(name: string | undefined,chatId: string){
        this.sessionData.forEach((item)=>{
            if(item.chatId===chatId){
                item.chatName=name;
                return false;
            }
        });
    }
    updateChatStatus(status: boolean,chatId: string){
        this.session.forEach((item)=>{
            if(item.chatId===chatId){
                item.edit=status;
            }else{
                item.edit=false;
            }
        });
        if(status===false){
            this.save(chatId);
        }
    }

    get currentChatName(){
        let chatName="Chat 1"
        this.sessionData.forEach((item)=>{
            if(item.chatId===this.activeSession){
                chatName=item.chatName?item.chatName:""
                return false;
            }
        });
        return chatName;
    }

    setSession(session: ISession[]){
        this.session=session;
    }

    loadDataFromFile(file: Blob){
        const reader= new FileReader();
        reader.readAsText(file);
        reader.onload = ()=>{
            const fileContent= reader.result?.toString();
            try{
                if(fileContent){
                    const configJson=JSON.parse(fileContent);    
                    if(configJson[this.localSessionName]){
                        this.setSession(configJson[this.localSessionName]);
                        localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
                    }
                    if(configJson[config.localConfigName]){
                        config.setConfigData(configJson[config.localConfigName]);
                        localStorage[config.localConfigName]=JSON.stringify(config.getConfigJson());
                    }
                }
            }catch(e){
                
            }
        }
    }

    saveDataToFile(){
        const configData:any={
        }
        configData[this.localSessionName]=this.sessionData
        configData[config.localConfigName]=config.getConfigJson();
        const blob = new Blob([JSON.stringify(configData)]);
        saveAs(blob, 'export_data.json')
    }

    async share(node: any){
        await import('html-to-image').then(({toJpeg})=>{
            toJpeg(node, { quality: 0.95,backgroundColor:""}).then((blob)=>{
                saveAs(blob, 'chat.jpeg')
            })
        })
    }


}
const messageData=new MessageData();
export default messageData;