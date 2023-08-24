import { makeObservable, observable, action } from "mobx";
import userProflie from "./UserProfile";

export interface IModelOptions {
    value:Model;
    label:string;
}
export interface IChatConfig {
    apiConfig: IChatAPIConfig;
    saveAPIConfig: (config: IChatAPIConfig) => void;
    switchStream: () => void;
    getAPIConfig: () => IChatAPIConfig;
    chatModelList: IModelOptions[];
    getMaxTokenByModel: (model: Model) => number;
}

export interface IChatAPIConfig {
    model: Model;
    temperature: number;
    top_p?: number;
    presence_penalty: number;
    frequency_penalty: number;
    max_tokens: number;
    stream?: boolean;
}

type Model = "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" |
    "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-16k-0613"
    | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "XunFei_1_5" | "XunFei_2" 

class ChatConfig implements IChatConfig {

    version = "2.4"
    localConfigName = `chat_config_${this.version}`;

    apiConfig: IChatAPIConfig = {
        model: "gpt-3.5-turbo",
        temperature: 1,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        max_tokens: 1024,
        stream: true
    }

    chatModelList: IModelOptions[] = [
        {"label":"gpt-3.5-turbo","value":"gpt-3.5-turbo"},
    {"label":"gpt-3.5-turbo-16k","value":"gpt-3.5-turbo-16k"},
    {"label":"gpt-3.5-turbo-0613","value":"gpt-3.5-turbo-0613"},
    {"label":"gpt-3.5-turbo-16k-0613","value":"gpt-3.5-turbo-16k-0613"},
    {"label":"gpt-4","value":"gpt-4"},{"label":"gpt-4-0314","value":"gpt-4-0314"},
    {"label":"gpt-4-0613","value":"gpt-4-0613"},
    {"label":"讯飞星火1.5","value":"XunFei_1_5"},
    {"label":"讯飞星火2.0","value":"XunFei_2"}]


        

    sampleChatModelList: IModelOptions[] = [
        {"label":"gpt-3.5-turbo","value":"gpt-3.5-turbo"},
    {"label":"gpt-4","value":"gpt-4"},{"label":"gpt-4-0314","value":"gpt-4-0314"},
    {"label":"讯飞星火1.5","value":"XunFei_1_5"},
    {"label":"讯飞星火2.0","value":"XunFei_2"}]

    modelMaxTokenMap = {
        "gpt-3.5-turbo": 4096,
        "gpt-3.5-turbo-16k": 16384,
        "gpt-3.5-turbo-0613": 4096,
        "gpt-3.5-turbo-16k-0613": 16384,
        "gpt-4": 8192,
        "gpt-4-0314": 8192,
        "gpt-4-0613": 8192,
        "XunFei_1_5":8192,
        "XunFei_2":8192
    }

    modelMap = {
        "gpt-3.5-turbo": "gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-16k": "gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-0613": "gpt-3.5-turbo-16k-0613",
        "gpt-3.5-turbo-16k-0613": "gpt-3.5-turbo-16k-0613",
        "gpt-4": "gpt-4",
        "gpt-4-0314": "gpt-4-0314",
        "gpt-4-0613": "gpt-4-0613",
        "XunFei_1_5":"XunFei_1_5",
        "XunFei_2":"XunFei_2"
    }

    getMaxTokenByModel(model: Model) {
        return this.modelMaxTokenMap[model]
    }

    isMaxTokenModel(model: Model) {
        if (this.modelMap[model] === model) {
            return true;
        } else {
            return false;
        }
    }

    getMaxTokenModel(model: Model): Model {
        return this.modelMap[model] as Model;
    }


    constructor() {
        makeObservable(this, {
            apiConfig: observable,
            chatModelList: observable,
            saveAPIConfig: action,
            switchStream: action
        })
        if (localStorage[this.localConfigName]) {
            try {
                const configJson = JSON.parse(localStorage[this.localConfigName]);
                this.saveAPIConfig(configJson)
            } catch (e) {
                console.log(e);
            }
        }
    }
    saveAPIConfigValue<K extends keyof IChatAPIConfig>(key:K,value:IChatAPIConfig[K]) {
        this.apiConfig[key]=value;
    }


    saveAPIConfig(config: IChatAPIConfig) {
        const configKeys = Object.keys(config) as Array<keyof IChatAPIConfig>;

        configKeys.forEach((item) => {
            if (item === "model") {
                if (config[item] === this.apiConfig.model) {
                    return;
                }
                this.changeModel(config[item]);
            } else {
                this.saveAPIConfigValue(item,config[item]);
            }
        });
        localStorage.setItem(this.localConfigName, JSON.stringify(this.getAPIConfig()));
    }
    changeModel(model: Model) {
        if (userProflie.token) {
            this.apiConfig.model = model;
        } else {
            userProflie.openPage();
        }
    }
    getAPIConfig() {
        return this.apiConfig;
    }

    switchStream() {
        this.apiConfig.stream = !this.apiConfig.stream;
    }

}
const chatConfig = new ChatConfig()
export default chatConfig;