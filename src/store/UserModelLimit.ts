import axios from "axios";
import { makeObservable, observable , action } from "mobx";
import apiSetting from "./APISetting";
import userProflie from "./UserProfile";


export interface IUserModelLimit{
    usage:IModelUsage,
    getCurrentModelUsage:()=>void;
    getModelUsage:(model:string)=>void;
    getMjCount:(model:string)=>Promise<number>;
}
export interface IModelUsage{
    enable: boolean;
    modelName: string;
    remainingAmount: number;
    usedAmount: number;
}

class UserModelLimit implements IUserModelLimit {

 
    usage={
        enable: true,
        modelName: "None",
        remainingAmount: 0,
        usedAmount: 0
    }

    setUsage(usage:IModelUsage){
        this.usage=usage;
    }


    constructor() {
        makeObservable(this, {
            usage:observable,
            getModelUsage:action.bound
        })
        
    }
    
    getCurrentModelUsage(){
        const model=this.usage.modelName
        this.getModelUsage(model);
    }

    getMjCount(model:string):Promise<number>{
        const promise=new Promise<number>((resolve,reject)=>{
            if(!userProflie.token){
                reject()
                return;
            }
            const queryUrl = apiSetting.modelAmountUrl+model+"?uuid"+new Date().getTime();
            axios({
                method: "get",
                url: queryUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'token': userProflie.token
                }
            }
            ).then((response) => {
                const data = response.data;
                if (data.statusCode === 0 && data.data) {
                    resolve(data.data.remainingAmount);
                } else {
                    reject()
                }
            });   
        }) 
        return promise;
    }

    getMjFastCount(){
        return this.getModelUsage("mj");
    }


    getModelUsage(model:string){
        if(!userProflie.token){
            return;
        }
        const queryUrl = apiSetting.modelAmountUrl+model+"?uuid"+new Date().getTime();
        axios({
            method: "get",
            url: queryUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': userProflie.token
            }
        }
        ).then((response) => {
            const data = response.data;
            if (data.statusCode === 0 && data.data) {
                this.setUsage(data.data);
            } else {
                this.setUsage({
                    enable: true,
                    modelName: "Error",
                    remainingAmount: 0,
                    usedAmount: 0
                })
            }
        });
    }

 

    

}

const userModelLimit = new UserModelLimit();
export default userModelLimit;