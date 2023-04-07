import { makeObservable, observable, computed, action} from "mobx";
import IatRecorder from '../utils/IatRecorder';
import i18n from '../utils/i18n';


export interface IAppConfig{
    version:string;
    style:string;
    localConfigName:string;
    isSlowLeftMenu:boolean;
    host:string;
    chatUrl:string;
    chatStreamUrl:string;
    imageUrl:string;
    editsUrl:string;
    imageEditUrl:string;
    variationsImageUrl:string;
    imageUploadUrl:string;
    chatRoleUrl:string;
    colorPrimary:string;
    textLanguage:string;
    imageSize:string;
    language:string;
    accent:string;
    isSlowMsg4AddChat:boolean;
    chatConfig:IChatAPIConfig;
    codeStyle:string;
    codeEditConfig:ICodeEditsAPIConfig;
    isSlowLeftMenuFlag:boolean;
    switchStream:()=>void;
    getConfigJson:()=>Object;
    saveChatConfig:(config:IChatAPIConfig)=>void;
    getChatConfig:()=>IChatAPIConfig;
    saveCodeEditConfig:(config:ICodeEditsAPIConfig)=>void;
    getCodeEditConfig:()=>ICodeEditsAPIConfig;
    save:(config:any)=>void;
    triggerMenu:()=>void;
}

export interface IChatAPIConfig{
    model:string;
    temperature:number;
    top_p : number;
    presence_penalty:number;
    frequency_penalty:number;
    max_tokens:number;
    stream:boolean;
}

export interface ICodeEditsAPIConfig{
    model:string;
    temperature:number;
    top_p : number;
}

class AppConfig implements IAppConfig{

    version="2.0"
    style="chat";
    localConfigName=`config_${this.version}`;

    isSlowLeftMenu=true;

    host="https://faryhuo.online:8080"
    chatUrl=`${this.host}/chat/v2/info`;
    chatStreamUrl=`${this.host}/chat/v2/stream`;
    imageUrl=`${this.host}/image/v2/info`;
    editsUrl=`${this.host}/edits/v2/info`;
    imageEditUrl=`${this.host}/image/v2/edit`;
    variationsImageUrl=`${this.host}/image/v2/variations`;
    imageUploadUrl=`${this.host}/upload/v2/image`
    chatRoleUrl=`https://faryhuo.online:8401/config/chat-roles`

    colorPrimary='#87e8de'
    textLanguage="zh";
    imageSize="256x256";
    language="zh_cn";
    accent="mandarin";

    isSlowMsg4AddChat=true;

    iatRecorder =new IatRecorder({language:this.language,accent:this.language} as any);
    get isSlowLeftMenuFlag(){
        return this.isSlowLeftMenu;
    }

    codeStyle="a11yDark";

    chatConfig={
        model:"gpt-3.5-turbo-0301",
        temperature:1,
        top_p : 1,
        presence_penalty:0,
        frequency_penalty:0,
        max_tokens:1024,
        stream:false
    }

    codeEditConfig={
        model:"code-davinci-edit-001",
        temperature:1,
        top_p:1
    }
    

    constructor() {
        makeObservable(this, {
            isSlowLeftMenu: observable,
            textLanguage: observable,
            style:observable,
            colorPrimary: observable,
            isSlowLeftMenuFlag: computed,
            triggerMenu: action,
            save: action,
            saveChatConfig: action,
            switchStream: action
        });
        if(localStorage[this.localConfigName]){
            try{
                const configJson=JSON.parse(localStorage[this.localConfigName]);
                this.setConfigData(configJson)
            }catch(e){
                console.log(e);
            }
        }else{
            document.documentElement.style.setProperty('--color-primary', this.colorPrimary);
        }
    }

    setConfigData(configJson:IAppConfig){
        let item:keyof IAppConfig;
        for (item in configJson) {
            if(Object.keys(this).includes(item)){
                (this as any)[item] = configJson[item]
            }
        }
        document.documentElement.style.setProperty('--color-primary', this.colorPrimary);
    }



    switchStream(){
        this.chatConfig.stream=!this.chatConfig.stream;
    }

    getConfigJson(){
        const {chatUrl,imageSize,imageUrl,language,accent,codeStyle,textLanguage,chatConfig,isSlowMsg4AddChat,colorPrimary,style} = this;
        return {chatUrl,imageSize,imageUrl,language,accent,codeStyle,textLanguage,chatConfig,isSlowMsg4AddChat,colorPrimary,style};
    }
    saveChatConfig(config:IChatAPIConfig){
        let item:keyof IChatAPIConfig;
        for(item in config){
            (this.chatConfig as any)[item]=config[item];
        }
        localStorage[this.localConfigName]=JSON.stringify(this.getConfigJson());
    }
    getChatConfig(){
        return this.chatConfig;
    }

    saveCodeEditConfig(config:ICodeEditsAPIConfig){
        let item:keyof ICodeEditsAPIConfig;
        for(item in config){
            (this.codeEditConfig as any)[item]=config[item];
        }
        localStorage[this.localConfigName]=JSON.stringify(this.getConfigJson());
    }
    getCodeEditConfig(){
        return this.codeEditConfig;
    }


    

    save(config: any){
        // this.chatUrl=config.chatUrl;
        // this.imageUrl=config.imageUrl;
        // this.imageSize=config.imageSize;
        // this.codeStyle=config.codeStyle;
        // this.textLanguage=config.textLanguage;
        let isNeedReoload=false;
        if(config.textLanguage && this.textLanguage!==config.textLanguage){
            this.textLanguage=config.textLanguage;
            i18n.changeLanguage(this.textLanguage);
        }
        if(config.colorPrimary && this.colorPrimary!==config.colorPrimary){
            this.colorPrimary=config.colorPrimary;
            document.documentElement.style.setProperty('--color-primary', config.colorPrimary);
            isNeedReoload=true;
        }
        for(let item in config){
            (this as any)[item]=config[item];
        }
        localStorage[this.localConfigName]=JSON.stringify(this.getConfigJson());
        if(isNeedReoload){
            window.location.reload();
        }
    }


    triggerMenu(){
        this.isSlowLeftMenu=!this.isSlowLeftMenu;
    }
}
const config = new AppConfig()
export default config;