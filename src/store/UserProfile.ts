import { makeObservable, observable, computed, action} from "mobx";
import config, { IAppConfig } from './AppConfig';
import axios from 'axios';


export interface IUserProflie{
    userId:string;
    userName:string;
    password:string;
    isLogin:boolean;
    login:(userId:string,password:string)=>void;
    currentUser:string;
}
export interface IModules{
    id:string;
    component?:string;
    enable : boolean;
    path ?: string;
    mobileOnly ?:boolean;
    pcOnly ?:boolean;

}
class UserProflie implements IUserProflie{

    userId=""
    userName=""
    password=""
    isLogin=false
    modules:IModules[]=[];

    login(userId: string,password: string){
        this.userId=userId;
        this.userName=userId;
        this.password=password;
        this.isLogin=true;
        if(userId==="admin"){
            this.premission.push("image");
            this.premission.push("image_edit");
        }
    }

    get currentUser(){
        if(this.userName){
            return this.userName;
        }else{
            return "Login"
        }
    }

    premission=["chat","config","tips"];

    
    constructor() {
        makeObservable(this, {
            userId: observable,
            userName: observable,
            premission: observable,
            currentUser:computed,
            login: action,
            fetchModulesData: action.bound
        })
        this.fetchModulesData().then(()=>{
            this.modules.forEach((item=>{
                if(item.enable){
                    if(item.pcOnly===true){
                        if(!config.isMobile){
                            this.premission.push(item.id);
                        }
                    }else{
                        this.premission.push(item.id);
                    }
                }
            }))
        })
    }

    fetchModulesData() {
        const self=this;
        return axios({
            method: "get",
            url: config.moduleUrl+"?uuid="+new Date().getTime(),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
          ).then((response)=>{
            if (response.data) {
                const data = response.data;
                if(data.data){
                    self.modules=data.data;
                }
              }
          });
    }
}

const userProflie=new UserProflie();
export default userProflie;