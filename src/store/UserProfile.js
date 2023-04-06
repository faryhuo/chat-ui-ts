import { makeObservable, observable, computed, action} from "mobx";
class UserProflie {

    userId=""
    userName=""
    password=""
    isLogin=false
    login(userId,password){
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

    premission=["chat","code","config","tips"];

    
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