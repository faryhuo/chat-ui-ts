import { makeObservable, observable, action} from "mobx";

export interface IChatConfig{
    apiConfig:IChatAPIConfig;
    saveAPIConfig:(config:IChatAPIConfig)=>void;
    switchStream:()=>void;
    getAPIConfig:()=>IChatAPIConfig;
    chatModelList:Model[];
    getMaxTokenByModel:(model:Model)=>number;
}

export interface IChatAPIConfig{
    model:Model;
    temperature:number;
    top_p ?: number;
    presence_penalty:number;
    frequency_penalty:number;
    max_tokens:number;
    stream?:boolean;
}

type Model="gpt-3.5-turbo" | "gpt-3.5-turbo-16k"|
"gpt-3.5-turbo-0613" | "gpt-3.5-turbo-16k-0613"
| "gpt-4"

class ChatConfig implements IChatConfig{
    
    version="2.1"
    localConfigName=`chat_config_${this.version}`;

    apiConfig:IChatAPIConfig={
        model:"gpt-3.5-turbo",
        temperature:1,
        top_p : 1,
        presence_penalty:0,
        frequency_penalty:0,
        max_tokens:1024,
        stream:true
    }

    chatModelList:Model[] = ["gpt-3.5-turbo","gpt-3.5-turbo-16k",
    "gpt-3.5-turbo-0613","gpt-3.5-turbo-16k-0613"
    ,"gpt-4"]

    modelMaxTokenMap = {
        "gpt-3.5-turbo":4096,
        "gpt-3.5-turbo-16k":16384,
        "gpt-3.5-turbo-0613":4096,
        "gpt-3.5-turbo-16k-0613":16384,
        "gpt-4":8192 
    }

    modelMap = {
        "gpt-3.5-turbo":"gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-16k":"gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-0613":"gpt-3.5-turbo-16k-0613",
        "gpt-3.5-turbo-16k-0613":"gpt-3.5-turbo-16k-0613",
        "gpt-4":"gpt-4" 
    }

    getMaxTokenByModel(model:Model){
        return this.modelMaxTokenMap[model]
    }

    isMaxTokenModel(model:Model){
        if(this.modelMap[model]===model){
            return true;
        }else{
            return false;
        }
    }

    getMaxTokenModel(model:Model):Model{
        return this.modelMap[model] as Model;
    }


    constructor() {
        makeObservable(this, {
            apiConfig: observable,
            chatModelList: observable,
            saveAPIConfig:action,
            switchStream:action
        })
        if(localStorage[this.localConfigName]){
            try{
                const configJson=JSON.parse(localStorage[this.localConfigName]);
                this.saveAPIConfig(configJson)
            }catch(e){
                console.log(e);
            }
        }
    }

    saveAPIConfig(config:IChatAPIConfig){
        let item:keyof IChatAPIConfig;
        for(item in config){
            (this.apiConfig as any)[item]=config[item];
        }
        localStorage[this.localConfigName]=JSON.stringify(this.getAPIConfig());
    }
    getAPIConfig(){
        return this.apiConfig;
    }

    switchStream(){
        this.apiConfig.stream=!this.apiConfig.stream;
    }
    
}
const chatConfig = new ChatConfig()
export default chatConfig;