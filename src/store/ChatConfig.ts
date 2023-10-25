import { makeObservable, observable, action } from "mobx";
import i18n from "../utils/i18n";
import userProflie from "./UserProfile";

export interface IModelOptions {
    value: Model;
    label: string;
    channle: 'gpt' | 'xunfei' | 'baidu' | 'aliyun' |'google';
    isMain: boolean;
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
    channle?:string;
}

type Model = "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" |
    "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-16k-0613"
    | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" 
    | "spark-desk-1.5" | "spark-desk-2" | "ernie-bot" | "ernie-bot-4" | "ernie-bot-turbo"
    | "qwen-turbo" | "qwen-plus" | "palm"

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
        stream: true,
        channle:"gpt"
    }

    chatModelList: IModelOptions[] = [
        { "label": "gpt-3.5-turbo", "value": "gpt-3.5-turbo", "channle": "gpt", isMain: true },
        { "label": "gpt-3.5-turbo-16k", "value": "gpt-3.5-turbo-16k", "channle": "gpt", isMain: false },
        { "label": "gpt-3.5-turbo-0613", "value": "gpt-3.5-turbo-0613", "channle": "gpt", isMain: false },
        { "label": "gpt-3.5-turbo-16k-0613", "value": "gpt-3.5-turbo-16k-0613", "channle": "gpt", isMain: false },
        { "label": "gpt-4", "value": "gpt-4", "channle": "gpt", isMain: true },
        { "label": "gpt-4-0314", "value": "gpt-4-0314", "channle": "gpt", isMain: false },
        { "label": "gpt-4-0613", "value": "gpt-4-0613", "channle": "gpt", isMain: false },
        { "label": i18n.t<string>("SparkDesk 1.5"), "value": "spark-desk-1.5", "channle": "xunfei", isMain: true },
        { "label": i18n.t<string>("SparkDesk 2.0"), "value": "spark-desk-2", "channle": "xunfei", isMain: true },
        { "label": i18n.t<string>("ernie-bot-4"), "value": "ernie-bot-4", "channle": "baidu", isMain: true },
        { "label": i18n.t<string>("ernie-bot"), "value": "ernie-bot", "channle": "baidu", isMain: true },
        { "label": i18n.t<string>("ernie-bot-turbo"), "value": "ernie-bot-turbo", "channle": "baidu", isMain: false },
        { "label": i18n.t<string>("qwen-turbo"), "value": "qwen-turbo", "channle": "aliyun", isMain: true },
        { "label": i18n.t<string>("qwen-plus"), "value": "qwen-plus", "channle": "aliyun", isMain: false },
        { "label": "palm", "value": "palm", "channle": "google", isMain: true}]

        


    modelMaxTokenMap = {
        "gpt-3.5-turbo": 4096,
        "gpt-3.5-turbo-16k": 16384,
        "gpt-3.5-turbo-0613": 4096,
        "gpt-3.5-turbo-16k-0613": 16384,
        "gpt-4": 8192,
        "gpt-4-0314": 8192,
        "gpt-4-0613": 8192,
        "spark-desk-1.5": 8192,
        "spark-desk-2": 8192,
        "ernie-bot":4 * 1024,
        "ernie-bot-4":4 * 1024,
        "ernie-bot-turbo":8 * 1024,
        "qwen-turbo":6 * 1024,
        "qwen-plus":6 * 1024,
        "palm":4096
    }

    getModelChange(model:Model){
       const channel= this.chatModelList.find(item=>item.value===model)?.channle
       return channel?channel:'gpt';
    }

    modelMap = {
        "gpt-3.5-turbo": "gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-16k": "gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-0613": "gpt-3.5-turbo-16k-0613",
        "gpt-3.5-turbo-16k-0613": "gpt-3.5-turbo-16k-0613",
        "gpt-4": "gpt-4",
        "gpt-4-0314": "gpt-4-0314",
        "gpt-4-0613": "gpt-4-0613",
        "spark-desk-1.5": "spark-desk-1.5",
        "spark-desk-2": "spark-desk-2",
        "ernie-bot": "ernie-bot",
        "ernie-bot-4": "ernie-bot-4",
        "ernie-bot-turbo": "ernie-bot-turbo",
        "qwen-turbo":"qwen-turbo",
        "qwen-plus":"qwen-plus",
        "palm":"palm"
    }

    getMaxTokenByModel(model: Model) {
        return this.modelMaxTokenMap[model];
    }

    isMaxTokenModel(model: Model) {
        if (!this.modelMap[model] || this.modelMap[model] === model) {
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
    saveAPIConfigValue<K extends keyof IChatAPIConfig>(key: K, value: IChatAPIConfig[K]) {
        this.apiConfig[key] = value;
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
                this.saveAPIConfigValue(item, config[item]);
            }
        });
        localStorage.setItem(this.localConfigName, JSON.stringify(this.getAPIConfig()));
    }
    changeModel(model: Model) {
        const newChannel=this.getModelChange(model);
        const oldChannel=this.getModelChange(this.apiConfig.model);
        if(newChannel==='gpt' && model.startsWith('gpt-4')){
            if (userProflie.token) {
                this.apiConfig.model = model;
            } else {
                userProflie.openPage();
                return;
            }
        }else{
            this.apiConfig.stream=true;
            this.apiConfig.model = model;
        }
        this.apiConfig.channle=newChannel;
        if(oldChannel!==newChannel){
            this.apiConfig.temperature=1;
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