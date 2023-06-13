import { makeObservable, observable, computed, action} from "mobx";
import IatRecorder from '../utils/IatRecorder';
import i18n from '../utils/i18n';
import {isMobile} from 'react-device-detect';
import apiSetting,{IAPISetting} from "./APISetting";
import imageData,{IImageData} from "./ImageData";


export interface IAppConfig{
    version:string;
    style:string;
    image:IImageData;
    localConfigName:string;
    isSlowLeftMenu:boolean;
    colorPrimary:string;
    textLanguage:string;
    api:IAPISetting;
    imageSize:string;
    language:string;
    accent:string;
    weChatQRCode: string;
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
    hideMenuTypeList:String[];
    isMobile:boolean;
    clearConfig:()=>void;
    clearHistory:()=>void;
    iatRecorder:any;
}

export interface IChatAPIConfig{
    model:string;
    temperature:number;
    top_p ?: number;
    presence_penalty:number;
    frequency_penalty:number;
    max_tokens:number;
    stream?:boolean;
}

export interface ICodeEditsAPIConfig{
    model:string;
    temperature:number;
    top_p : number;
}


class AppConfig implements IAppConfig{

    version="3.0"
    style="chat";
    localConfigName=`config_${this.version}`;
    type="";
    hideMenuTypeList=["tips","config","sd"]
    isSlowLeftMenu=isMobile?false:true;
    isMobile=isMobile;
    api=apiSetting
    image=imageData;
    get weChatQRCode() {
        const redirectUri = encodeURIComponent(window.location.href);
        const scope = 'snsapi_login'; // 或者snsapi_base
        const state = 'wechat_login_state';
        const appId="wxb4e93c99797a1111";
        const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
        return url;
    }

    colorPrimary='#87e8de'
    textLanguage="zh";
    imageSize="256x256";
    language="zh_cn";
    accent="mandarin";

    isSlowMsg4AddChat=true;

    iatRecorder =new IatRecorder({language:this.language,accent:this.language} as any);
    get isSlowLeftMenuFlag(){
        return !this.hideMenuTypeList.includes(this.type) && this.isSlowLeftMenu;
    }

    codeStyle="a11yDark";

    chatConfig={
        model:"gpt-3.5-turbo",
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
            type:  observable,
            textLanguage: observable,
            imageSize: observable,
            style:observable,
            chatConfig:observable,
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
            if(item==="isMobile"){
                continue;
            }
            if(Object.keys(this).includes(item)){
                (this as any)[item] = configJson[item]
            }
        }
        document.documentElement.style.setProperty('--color-primary', this.colorPrimary);
    }

    clearConfig(){
        localStorage[this.localConfigName]='';
        window.location.reload();
    }

    clearHistory(){
        localStorage.clear();
        window.location.reload();
    }

    switchStream(){
        this.chatConfig.stream=!this.chatConfig.stream;
    }

    getConfigJson(){
        const {imageSize,language,accent,codeStyle,textLanguage,chatConfig,isSlowMsg4AddChat,colorPrimary,style} = this;
        return {imageSize,language,accent,codeStyle,textLanguage,chatConfig,isSlowMsg4AddChat,colorPrimary,style};
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
