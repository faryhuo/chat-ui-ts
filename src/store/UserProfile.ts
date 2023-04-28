import { makeObservable, observable, computed, action} from "mobx";


export interface IUserProflie{
    userId:string;
    userName:string;
    password:string;
    isLogin:boolean;
    login:(userId:string,password:string)=>void;
    currentUser:string;
}

class UserProflie implements IUserProflie{

    userId=""
    userName=""
    password=""
    isLogin=false
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

    premission=["chat","code","config","tips","sd"];

    
    constructor() {
        makeObservable(this, {
            userId: observable,
            userName: observable,
            currentUser:computed,
            login: action
        })
    }

}

const userProflie=new UserProflie();
export default userProflie;