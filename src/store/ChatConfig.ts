import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import i18n from "../utils/i18n";
import apiSetting from "./APISetting";
import userModelLimit from "./UserModelLimit";
import userProflie from "./UserProfile";

export interface IModelOptions {
    value: string;
    label: string;
    channel: string;
    isMain: boolean;
    maxToken: number;
    description?: string;
    maxModelId?: string;
    trainingDate?: string;
    callTimerPrice:number;
}
export interface IChatConfig {
    apiConfig: IChatAPIConfig;
    saveAPIConfig: (config: IChatAPIConfig) => void;
    switchStream: () => void;
    getAPIConfig: () => IChatAPIConfig;
    chatModelList: IModelOptions[];
    getMaxTokenByModel: (model: string) => number;
    getTrainingDate: (model: string) => string;
    getCallTimerPrice: (model: string) => number;
}

export interface IChatAPIConfig {
    model: string;
    temperature: number;
    top_p?: number;
    presence_penalty: number;
    frequency_penalty: number;
    max_tokens: number;
    stream?: boolean;
    channel?:string;
}

interface IChatAPIResponse {
    modelId: string;
    maxToken: number;
    channel: string;
    description?: string;
    maxModelId: string;
    trainingDate?: string;
    main:boolean;
    callTimerPrice:number;
}


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
        channel:"gpt"
    }

    chatModelList: IModelOptions[] = [];

    getModelChange(model:string){
       const channel= this.chatModelList.find(item=>item.value===model)?.channel
       return channel?channel:'gpt';
    }


    getMaxTokenByModel(model: string):number {
        if(model.startsWith("gpt-4-gizmo")){
            model="gpt-4-all";
        }
        const maxToken= this.chatModelList.find((item)=>item.value===model)?.maxToken;
        return maxToken?maxToken:4*1024;
    }

    isMaxTokenModel(model: string) {
        if(model.startsWith("gpt-4-gizmo")){
            model="gpt-4-all";
        }
        const maxTokenModel= this.chatModelList.find((item)=>item.value===model)?.maxModelId;
        if (!maxTokenModel) {
            return true;
        }if (maxTokenModel===model) {
            return true;
        } else {
            return false;
        }
    }

    getCallTimerPrice(model: string):number {
        const callTimerPrice= this.chatModelList.find((item)=>item.value===model)?.callTimerPrice;
        return callTimerPrice?callTimerPrice:0.3;
    }

    getMaxTokenModel(model: string): string {
        if(model.startsWith("gpt-4-gizmo")){
            model="gpt-4-all";
        }
        const maxTokenModel= this.chatModelList.find((item)=>item.value===model)?.maxModelId;
        return maxTokenModel?maxTokenModel:"";
    }

    getTrainingDate(model: string): string {
        const trainingDate= this.chatModelList.find((item)=>item.value===model)?.trainingDate;
        return trainingDate?trainingDate:"";
    }

    constructor() {
        makeObservable(this, {
            apiConfig: observable,
            chatModelList: observable,
            saveAPIConfig: action,
            switchStream: action,
            fetchData: action.bound
        })
        if (localStorage[this.localConfigName]) {
            try {
                const configJson = JSON.parse(localStorage[this.localConfigName]);
                this.saveAPIConfig(configJson)
            } catch (e) {
                console.log(e);
            }
        }
        this.fetchData();
    }

    fetchData() {
        this.chatModelList=[];
        axios({
            method: "get",
            url: apiSetting.modelsUrl + `?uuid=${new Date().getTime()}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        ).then((response) => {
            if (response.data) {
                const data = response.data;
                if (data.data) {
                    const repData=data.data as IChatAPIResponse[];
                    repData.forEach((item)=>{
                        const obj:IModelOptions={
                            channel:item.channel,
                            label:i18n.t(`model.${item.channel}.${item.modelId}.name`),
                            value:item.modelId,
                            isMain:item.main,
                            description:i18n.t(`model.${item.channel}.${item.modelId}.description`),
                            maxToken:item.maxToken,
                            trainingDate:item.trainingDate,
                            callTimerPrice:item.callTimerPrice,
                            maxModelId:item.maxModelId?item.maxModelId:item.maxModelId
                        }
                        this.chatModelList.push(obj);
                    })
                }
            }
        });
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
    changeModel(model:string) {
        const newChannel=this.getModelChange(model);
        const oldChannel=this.getModelChange(this.apiConfig.model);
        userModelLimit.getModelUsage(model);
        if(newChannel==='gpt' && (model.startsWith('gpt-4') || model==='free-gpt-4')){
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
        this.apiConfig.channel=newChannel;
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