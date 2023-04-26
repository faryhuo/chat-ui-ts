import { makeObservable, observable, computed, action, remove} from "mobx";
import i18n from '../utils/i18n';
import config, { IAppConfig } from './AppConfig';
import axios from 'axios';
import { saveAs } from 'file-saver'

export interface  ISessiondata{
    isSys?:boolean;
    isDefault?:boolean;
    isEdit?:boolean;
    text?:any;
    choices?:any;
    code?:any;
    image?:any;
    stream?:boolean;
    end?:boolean;
}

export interface  ISession{
    chatId:string;
    type:string;
    chatName?:string;
    edit:boolean;
    isType:boolean;
    data:Array<ISessiondata>;
    role?:string;
    updateDate?:Date;
    usage?:any;
}

export interface  IRole{
    roleId:string;
    description:string;
    roleNameCN:string;
    roleName:string;
}

export interface IMessage{
    handleAPIError:(error:any,chatId:string)=>void;
    version:string
    type:string;
    session:Array<ISession>;
    localSessionName:string;
    activeSession:string;
    addChat:()=>void;
    endStream:(chatId:string)=>void;
    appendData:(text:any,chatId:string)=>void;
    addData:(newChat: any,chatId: string) =>void;
    clear:(chatId: string) =>void;
    isType:boolean;
    changeType:(type: string)=>void;
    selectChat:(chatId: string)=>void;
    changeRole:(chatId: string,role: string | undefined)=>void;
    role:string | undefined;
    data:Array<ISessiondata>;
    sessionData:Array<ISession>;
    currentSession:Array<ISession>;
    sessionList:any;
    getContentByRole:(role: string)=>string;
    getMessageListData:()=>any;
    enableType:(chatId: string)=>void;
    needStream:boolean;
    disableType:(chatId: string)=>void;
    updateChatName:(name: string | undefined,chatId: string)=>void;
    updateChatStatus:(status: boolean,chatId: string)=>void;
    currentChatName:string;
    latestText:string;
    roles:IRole[];
    saveDataToFile:()=>void;
    loadDataFromFile:(file:Blob)=>void;
    reSentMsg:(index:number,msg:string)=>void;
    callChatAPI:(chatId: string)=>void;
}

class MessageData implements  IMessage{
    
    version="2.0"
    localSessionName=`session_${this.version}`

    type="chat"
    roles:IRole[]=[];
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
            text:i18n.t("Type something to search on ChatGPT")
            }
        ],
        usage:{
            completion_tokens:0,
            prompt_tokens:0,
            total_tokens:0
        },
        role:"",
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
            text:i18n.t("Type something to generate a image"),
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
               text:i18n.t("Type the code and your requirement"),
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
            roles: observable,
            data: computed,
            role: computed,
            sessionList: computed,
            isType: computed,
            needStream: computed,
            addData: action,
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
            fetchData: action.bound,
            loadDataFromFile: action.bound,
            reSentMsg:action.bound,
            callChatAPI:action.bound
        })
        if(localStorage[this.localSessionName]){
            this.session=JSON.parse(localStorage[this.localSessionName]);
            this.session.forEach((item)=>{
                item.isType=true;
            })
            this.activeSession=this.currentSession[this.currentSession.length-1].chatId;
        }
        this.fetchData();
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
                tmp.text=i18n.t("Type something to search on ChatGPT");
            }else if(this.type==="image"){
                tmp.text=i18n.t("Type something to generate a image");
            }else if(this.type==="code"){
                tmp.text=i18n.t("Type the code and your requirement");
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
        localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
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
            if(data[data.length-1].stream===true){
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
        if(text && data){
            data[data.length-1].choices[0].message.content+=text;
            this.latestText=data[data.length-1].choices[0].message.content;
            localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
        }
    }

    addData(newChat: any,chatId: string) {
        if(!chatId){
            chatId=this.activeSession;
        }
        let {type,session}=this;
        let data=[];
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                data=item.data;
                item.updateDate=new Date();
                break;
            }
        }
        data.push(newChat);
        localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
    }


    clear(chatId: string) {
        if(this.currentSession.length===1 || !chatId){
            this.clearCurrentData();
        }else{
            for(let i=0;i<this.session.length;i++){
                let item=this.session[i];
                if(item.type===this.type && item.chatId===chatId){
                    //remove(this.session,i)
                    this.session.splice(i,1);
                    break;
                }
            }
            this.activeSession=this.currentSession[0].chatId;
            //this.session.splice(deletedItem,1)
        }
        localStorage[this.localSessionName]=JSON.stringify(this.session);
    }

    changeType(type: string) {
        if(!type){
            return;
        }
        this.type=type;
        config.type=type;
        if(this.sessionList.length){
            this.activeSession=this.sessionList[0].key;
        }
    }

    selectChat(chatId: string){
        this.activeSession=chatId;
    }

    changeRole(chatId: string,role: string | undefined){
        let {type,session}=this;
        for(let i=0;i<session.length;i++){
            let item=session[i];
            if(item.type===type && item.chatId===chatId){
                item.role=role;
                if(!role){
                    item.chatName="New Chat";
                }
                let chatName;
                this.roles.forEach((sItem)=>{
                    if(role===sItem.roleId){
                        chatName=config.textLanguage==="zh"?sItem.roleNameCN:sItem.roleName
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

    get sessionList(){
        let arr:any=[];
        this.session.forEach((obj) => {
            if(obj.type!==this.type){
                return true;
            }
            let item:any={};
            item.name=obj.chatName?obj.chatName:"Chat "+(arr.length+1);
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
        localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
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

    callChatAPI(chatId: string){
        if(config.getChatConfig().stream){
          return this.callChatAPIByStream(chatId)
        }else{
          return this.callChatAPIByHttp(chatId)
        }
      }

    callChatAPIByStream=(chatId:string)=>{
        const params=this.getChatParams();
        const queryString = new URLSearchParams(params as any).toString();
        const queryUrl =`${config.chatStreamUrl}?${queryString}`;
  
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
        eventSource.onmessage = function(event) {
            try{
              let data=event.data.replace("data:","").trim();
              if(!data){
                return true;
              }
              if(!self.isNeedStream(chatId)){
                self._closeEventSource(eventSource, chatId);
                return;
              }
              if(data==="[DONE]"){
                self._closeEventSource(eventSource, chatId);
              }else {
                self.appendData(JSON.parse(data).choices[0].delta.content,chatId);
              }
            }catch(e){
                self._closeEventSource(eventSource, chatId);
            }
        };
      
        eventSource.onerror = function(event) {
            self._closeEventSource(eventSource, chatId);
        };
        self.addData(msgItem,chatId);   
      } 

    _closeEventSource(eventSource: EventSource, chatId: string) {
        eventSource.close();
        this.endStream(chatId);
        this.enableType(chatId);
    }

    callChatAPIByHttp(chatId: string){
       const params=this.getChatParams();
       const queryUrl = config.chatUrl;
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
            if(response.data.data.error){
              this.handleAPIError(response.data.data.error,chatId);
              return;
            }
            const choices = response.data.data.choices;
            const usage = response.data.data.usage;
            for(let i=0;i<this.session.length;i++){
                let item=this.session[i];
                if(item.chatId===chatId){
                    item.usage=usage;
                    break;
                }
            }
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


    getChatParams(){
        const chatConfig=config.getChatConfig();
        let params={ 
          messages:JSON.stringify(this.getMessageListData()),
          uuid: this.activeSession,
          model: chatConfig.model,
          temperature:chatConfig.temperature,
          top_p:chatConfig.top_p,
          presence_penalty:chatConfig.presence_penalty,
          frequency_penalty:chatConfig.frequency_penalty,
          max_tokens:chatConfig.max_tokens?chatConfig.max_tokens:1024,
          stream:chatConfig.stream
        }
        return params;
      }


    getContentByRole(role: string){
        for(let i=0;i<this.roles.length;i++){
            if(this.roles[i].roleId===role){
                return this.roles[i]?.description;
            }
        }
        return "";
    }

    fetchData() {
        const self=this;
        axios({
            method: "get",
            url: config.chatRoleUrl+"?uuid="+new Date().getTime(),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
          ).then((response)=>{
            if (response.data) {
                const data = response.data;
                if(data.data){
                    self.roles=data.data;
                }
              }
          });
      }


    getMessageListData(){
        const messages=[];
        if(this.role){
            const contentSys=this.getContentByRole(this.role);
            if(contentSys){
                messages.push({
                    role:"system",
                    content:contentSys
                })
            }
        }
        this.data.map((item)=>{
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
                msg.role="user"
                msg.content=item.text;
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
        localStorage[this.localSessionName]=JSON.stringify(this.sessionData);
    }
    updateChatStatus(status: boolean,chatId: string){
        this.session.forEach((item)=>{
            if(item.chatId===chatId){
                item.edit=status;
            }else{
                item.edit=false;
            }
        });
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



}
const messageData=new MessageData();
export default messageData;