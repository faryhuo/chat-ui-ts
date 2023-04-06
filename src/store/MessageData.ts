import { makeObservable, observable, computed, action, remove} from "mobx";
import i18n from '../utils/i18n';
import config from './AppConfig';
import axios from 'axios';

export interface  ISessiondata{
    isSys?:boolean;
    isDefault?:boolean;
    text?:any;
    choices?:any;
    code?:any;
    image?:any;
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
}

export interface  IRole{
    roleId:string;
    description:string;
}

export interface IMessage{
    version:string
    type:string;
    session:Array<ISession>;
    localSessionName:string;
    activeSession:string;
    preIsSlowLeftMenu?:boolean | null;
    addChat:()=>void;
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
    disableType:(chatId: string)=>void;
    updateChatName:(name: string | undefined,chatId: string)=>void;
    updateChatStatus:(status: boolean,chatId: string)=>void;
    currentChatName:string;
    hideMenuTypeList:string[];
    latestText:string;
    roles:any[]
}

class MessageData implements  IMessage{
    
    version="2.0"
    localSessionName=`session_${this.version}`

    type="chat"
    roles:IRole[]=[];
    activeSession="chat_"+new Date().getTime()
    preIsSlowLeftMenu:boolean | null=false;
    hideMenuTypeList=["tips","config"]
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
            addData: action,
            changeType: action,
            clear: action,
            selectChat: action,
            updateChatName: action,
            updateChatStatus: action,
            enableType: action,
            disableType: action,
            appendData: action,
            changeRole: action,
            fetchData: action.bound,
        })
        if(localStorage[this.localSessionName]){
            this.session=JSON.parse(localStorage[this.localSessionName]);
            this.activeSession=this.session[0].chatId;
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
            //this.data=[];
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
        if(this.hideMenuTypeList.includes(type)){
            this.preIsSlowLeftMenu=config.isSlowLeftMenu;
            config.isSlowLeftMenu=false;
        }else{
            if(this.preIsSlowLeftMenu!=null){
                config.isSlowLeftMenu=this.preIsSlowLeftMenu;
                this.preIsSlowLeftMenu=null;
            }
        }
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
                item.role=role
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

}
const messageData=new MessageData();
export default messageData;