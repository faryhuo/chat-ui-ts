import { makeObservable, observable, computed, action } from "mobx";
import i18n from '../utils/i18n';
import { isMobile } from 'react-device-detect';
import apiSetting, { IAPISetting } from "./APISetting";
import { FormLayout } from "antd/es/form/Form";

export interface IAppConfig {
    version: string;
    style: string;
    localConfigName: string;
    isSlowLeftMenu: boolean;
    colorPrimary: string;
    textLanguage: string;
    audioVoice:string;
    api: IAPISetting;
    accent: string;
    // weChatQRCode: string;
    isSlowMsg4AddChat: boolean;
    codeStyle: string;
    currentPath:string;
    setCurrentPath:(currentPath:string)=>void;
    codeEditConfig: ICodeEditsAPIConfig;
    isSlowLeftMenuFlag: boolean;
    getConfigJson: () => Object;
    saveCodeEditConfig: (config: ICodeEditsAPIConfig) => void;
    getCodeEditConfig: () => ICodeEditsAPIConfig;
    save: (config: any) => void;
    triggerMenu: () => void;
    isMobile: boolean;
    clearConfig: () => void;
    clearHistory: () => void;
    setHasMenu:(flag:boolean)=>void;
    formLayout: FormLayout ;
    isChinese: boolean;
    isEnglish: boolean;
}


export interface ICodeEditsAPIConfig {
    model: string;
    temperature: number;
    top_p: number;
}

type configKey="colorPrimary" | "textLanguage"  | "accent" | "style" 


class AppConfig implements IAppConfig {

    audioVoice="alloy"
    version = "3.2"
    style = "chat";
    localConfigName = `config_${this.version}`;
    hasMenu=true;
    isSlowLeftMenu = isMobile ? false : true;
    isMobile = isMobile;
    api = apiSetting
    isSlowMsg4AddChat = true;
    currentPath="chat";

    setCurrentPath(currentPath:string){
        this.currentPath=currentPath
    }

    // get weChatQRCode() {
    //     const redirectUri = encodeURIComponent('fary.chat');
    //     const scope = 'snsapi_login'; // 或者snsapi_base
    //     const appId="wx9c2b92a723dc3e4b";
    //     const d="42297595ac4caa542e92c5a0a1773cc0"
    //     const url = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}#wechat_redirect`;
    //     return url;
    // }

    get formLayout():FormLayout {
        return isMobile ? "vertical" : "horizontal"
    }

    colorPrimary = '#41dfec'
    textLanguage = (navigator.language?navigator.language:"zh").substr(0,2);
    accent = "mandarin";

    get isChinese() {
        return this.textLanguage === "zh" || this.textLanguage === "zh_tw";
    }
    

    get isEnglish() {
        return this.textLanguage === "en";
    }

    getLanguage(){
        return this.textLanguage;
    }

    setHasMenu(flag:boolean){
        this.hasMenu=flag;
    }


    // iatRecorder = new IatRecorder({ language: this.language, accent: this.language } as any);
    get isSlowLeftMenuFlag() {
        return this.hasMenu && this.isSlowLeftMenu;
    }

    codeStyle = "a11yDark";

    codeEditConfig = {
        model: "code-davinci-edit-001",
        temperature: 1,
        top_p: 1
    }



    constructor() {
        makeObservable(this, {
            isSlowLeftMenu: observable,
            hasMenu: observable,
            textLanguage: observable,
            style: observable,
            currentPath:observable,
            colorPrimary: observable,
            isSlowLeftMenuFlag: computed,
            triggerMenu: action,
            setHasMenu: action,
            setCurrentPath:action,
            save: action
        });
        if (localStorage[this.localConfigName]) {
            try {
                const configJson = JSON.parse(localStorage[this.localConfigName]);
                this.setConfigData(configJson)
            } catch (e) {
                console.log(e);
            }
        } else {
            document.documentElement.style.setProperty('--color-primary', this.colorPrimary);
        }
    }


    setConfig(key:configKey,value:IAppConfig[configKey]){
        this[key]=value;
    }

    setConfigData(configJson: IAppConfig) {
        let item: keyof IAppConfig;
        for (item in configJson) {
            const configKey = ["colorPrimary", "textLanguage", "language", "accent", "style","isSlowMsg4AddChat","audioVoice"]
            if (configKey.includes(item)) {
                const key=item as configKey;
                this.setConfig(key,configJson[key]);
            }
        }
        document.documentElement.style.setProperty('--color-primary', this.colorPrimary);
    }

    clearConfig() {
        localStorage[this.localConfigName] = '';
        window.location.reload();
    }

    clearHistory() {
        localStorage.clear();
        window.location.reload();
    }


    getConfigJson() {
        const {  accent, codeStyle, textLanguage, colorPrimary, style,isSlowMsg4AddChat,audioVoice } = this;
        return {  accent, codeStyle, textLanguage, colorPrimary, style,isSlowMsg4AddChat,audioVoice };
    }

    saveCodeEditConfig(config: ICodeEditsAPIConfig) {
        let item: keyof ICodeEditsAPIConfig;
        for (item in config) {
            (this.codeEditConfig as any)[item] = config[item];
        }
        localStorage[this.localConfigName] = JSON.stringify(this.getConfigJson());
    }
    getCodeEditConfig() {
        return this.codeEditConfig;
    }




    save(config: any) {
        let isNeedReoload = false;
        if (config.textLanguage && this.textLanguage !== config.textLanguage) {
            this.textLanguage = config.textLanguage;
            i18n.changeLanguage(this.textLanguage);
            isNeedReoload = true;
        }
        if (config.colorPrimary && this.colorPrimary !== config.colorPrimary) {
            this.colorPrimary = config.colorPrimary;
            document.documentElement.style.setProperty('--color-primary', config.colorPrimary);
            isNeedReoload = true;
        }
        this.setConfigData(config);
        localStorage[this.localConfigName] = JSON.stringify(this.getConfigJson());
        if (isNeedReoload) {
            window.location.reload();
        }
    }


    triggerMenu() {
        this.isSlowLeftMenu = !this.isSlowLeftMenu;
    }
}
const config = new AppConfig()
export default config;
