import axios from "axios";
import { makeObservable, observable , action, computed } from "mobx";
import apiSetting from "./APISetting";


export interface IUserModelLimit{
    usage:IModelUsage[]
    gptUsage:IModelUsage;
    fetchUsage:(token:string)=>void;
}
export interface IModelUsage{
    enable: boolean;
    modelName: string;
    remainingAmount: number;
    usedAmount: number;
}

class UserModelLimit implements IUserModelLimit {

    usage:IModelUsage[]=[];



    constructor() {
        makeObservable(this, {
            usage: observable,
            gptUsage: computed,
            fetchUsage:action.bound
        })
        
    }

    get mjStandardUsage(){
        const defaultUsage:IModelUsage= {
            enable:true,
            modelName:"mj",
            remainingAmount:0,
            usedAmount:0
        };
        if(!this.usage.length){
            return defaultUsage;
        }
        const result= this.usage.find(item=>item.modelName==='mj');
        if(result){
            return result;
        }else{
            return defaultUsage;
        }
    }

    get mjFastUsage(){
        const defaultUsage:IModelUsage= {
            enable:true,
            modelName:"mj_fast",
            remainingAmount:0,
            usedAmount:0
        };
        if(!this.usage.length){
            return defaultUsage;
        }
        const result= this.usage.find(item=>item.modelName==='mj_fast');
        if(result){
            return result;
        }else{
            return defaultUsage;
        }
    }

    get gptUsage(){
        const defaultUsage:IModelUsage= {
            enable:true,
            modelName:"gpt4",
            remainingAmount:0,
            usedAmount:0
        };
        if(!this.usage.length){
            return defaultUsage;
        }
        const result= this.usage.find(item=>item.modelName==='gpt4');
        if(result){
            return result;
        }else{
            return defaultUsage;
        }
    }

    fetchUsage(token:string){
        const queryUrl = apiSetting.modelAmountUrl;
        axios({
            method: "get",
            url: queryUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': token
            }
        }
        ).then((response) => {
            const data = response.data;
            if (data.statusCode === 0) {
                this.usage=data.data;
            } else {
            }
        });
    }

}

const userModelLimit = new UserModelLimit();
export default userModelLimit;