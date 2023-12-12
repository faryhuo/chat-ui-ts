import { makeObservable, observable, action } from "mobx";
import i18n from "../utils/i18n";

export interface INoticeMessage {
    content:string;
    type:string;
    date:Date;
    isRead:boolean;
}

export interface INoticeData {
    messages:INoticeMessage[];
}

class NoticeData implements INoticeData {

    messages:INoticeMessage[]=[]
    version = "1.0"
    localConfigName = `notice_${this.version}`;
    constructor() {
        makeObservable(this, {
            messages: observable,
            addMessage: action,
            read: action,
            readAll: action
        });
        const localData=localStorage.getItem(this.localConfigName);
        if(localData){
            this.messages=JSON.parse(localData)
        }
    }

    addMessage(message:INoticeMessage){
        this.messages.push(message);
        localStorage.setItem(this.localConfigName,JSON.stringify(this.messages));
    }

    addSuccessMessage(msg:string){
        const message:INoticeMessage={
            content:i18n.t(msg),
            type:"success",
            date:new Date(),
            isRead:false
        };
        this.addMessage(message);
    }

    addErrorMessage(msg:string){
        const message:INoticeMessage={
            content:i18n.t(msg),
            type:"error",
            date:new Date(),
            isRead:false
        };
        this.addMessage(message);
    }

    read(index:number){
        if(index<this.messages.length){
            this.messages[this.messages.length-index-1].isRead=true;
            localStorage.setItem(this.localConfigName,JSON.stringify(this.messages));
        }
    }

    get count(){
        return this.messages.filter((item)=>!item.isRead).length;
    }

    readAll(){
        this.messages.forEach((item)=>{
            item.isRead=true;
        });
        localStorage.setItem(this.localConfigName,JSON.stringify(this.messages));
    }

    clearAll(){
        this.messages=[];
        localStorage.setItem(this.localConfigName,JSON.stringify(this.messages));
    }

}

const noticeData = new NoticeData();
export default noticeData;