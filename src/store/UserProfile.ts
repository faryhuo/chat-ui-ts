import { makeObservable, observable, computed, action } from "mobx";
import config from './AppConfig';
import axios from 'axios';
import JSEncrypt from 'jsencrypt';
import i18n from 'i18next';
import apiSetting from "./APISetting";
import { isPhoneNumber4China } from "../utils/CommonUtils";
import loadingObj from "./Loading";

const USER_TOKEN_KEY = "user-token"

export { USER_TOKEN_KEY }

export interface IUserProflie {
    userId: string;
    userName: string;
    password: string;
    isLogin: boolean;
    pageOpen: boolean;
    login: (userId: string, password: string) => void;
    resetPwd: (userId: string, password: string, code: string) => Promise<any>;
    currentUser: string;
    token: string;
    logout: () => void;
    sentCode: (account: string) => Promise<any>;
    signup: (userId: string, password: string, code: string, type:string) => Promise<any>;
    checkUserIfExisting: (userId: string) => Promise<any>;
    openPage: () => void;
    closePage: () => void;
}
export interface IModules {
    id: string;
    component?: string;
    enable: boolean;
    path?: string;
    mobileOnly?: boolean;
    pcOnly?: boolean;

}
class UserProflie implements IUserProflie {

    userId = ""
    userName = ""
    password = ""
    isLogin = false
    publicKey = "";
    token = "";
    type = "email";
    modules: IModules[] = [];
    pageOpen = false;
    openPage() {
        this.pageOpen = true;
    }
    closePage() {
        this.pageOpen = false;
    }

    getQRCode(){
        const appId="wx9c2b92a723dc3e4b";
        const redirectUri=apiSetting.userWsUrl;
        const WxLoginLogin:any = window;
        new WxLoginLogin.WxLogin({
            self_redirect:false,
            id:"login_container", 
            appid:appId, 
            scope: "snsapi_login", 
            redirect_uri:redirectUri,
            state: 'init', // 随机字符串
            style: 'black'
        });
    }



    login(userId: string, password: string) {
        this.userId = userId;
        this.password = password;
        const type=isPhoneNumber4China(userId)?"phone":"email";
        const promise = new Promise((resolve, reject) => {
            this.getPulicKey().then(() => {
                const queryUrl = config.api.loginUrl;
                const params = {
                    "userId": userId,
                    "password": this.encrypt(this.password),
                    "type":type
                };
                axios({
                    method: "post",
                    url: queryUrl,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify(params)
                }
                ).then((response) => {
                    if (response.data.statusCode === 0) {
                        this.token = response.data.data;
                        this.isLogin = true;
                        this.loginByToken();
                        localStorage[USER_TOKEN_KEY] = this.token;
                        resolve(this.token)
                    } else if (response.data.errors.message) {
                        const errorMsg = i18n.t("api." + response.data.errors.message);
                        reject(errorMsg)
                    } else {
                        reject(i18n.t("Fail to login"));
                    }
                });
            })
        });
        return promise;
    }

    resetPwd(userId: string, password: string, code: string) {
        const type=isPhoneNumber4China(userId)?"phone":"email";
        const promise = new Promise((resolve, reject) => {
            this.getPulicKey().then(() => {
                const queryUrl = config.api.signUpUrl;
                const params = {
                    "userId": userId,
                    "password": this.encrypt(password),
                    "smsCode": code,
                    "type":type
                };
                axios({
                    method: "put",
                    url: queryUrl,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify(params)
                }
                ).then((response) => {
                    if (response.data.statusCode === 0 && response.data.data) {
                        this.login(userId, password);
                        resolve(response.data.data)
                    } else if (response.data.errors.message) {
                        const errorMsg = i18n.t("api." + response.data.errors.message);
                        reject(errorMsg)
                    } else {
                        reject(i18n.t("Fail to Reset password"));
                    }
                });
            })
        })
        return promise;
    }

    signup(userId: string, password: string, code: string,type:string) {
        const promise = new Promise((resolve, reject) => {
            this.checkUserIfExisting(userId).then((result)=>{
                if(result){
                  reject(i18n.t("The account is exsiting, please go to login."));
                  return;
                }
                this.getPulicKey().then(() => {
                    const queryUrl = config.api.signUpUrl;
                    const params = {
                        "userId": userId,
                        "password": this.encrypt(password),
                        "smsCode": code,
                        "type":type
                    };
                    axios({
                        method: "post",
                        url: queryUrl,
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data: JSON.stringify(params)
                    }
                    ).then((response) => {
                        if (response.data.statusCode === 0 && response.data.data) {
                            this.login(userId, password);
                            resolve(response.data.data)
                        } else if (response.data.errors.message) {
                            const errorMsg = i18n.t("api." + response.data.errors.message);
                            reject(errorMsg)
                        } else {
                            reject("Fail to signup");
                        }
                    });
                })
            });
        })
        return promise;
    }

    logout() {
        this.token = "";
        this.isLogin = false;
        this.userId = "";
        this.userName = "";
        localStorage[USER_TOKEN_KEY] = "";
        window.location.reload();
    }

    get currentUser() {
        if (this.userName) {
            return this.userName;
        } else {
            return i18n.t("Login");
        }
    }

    premission = ["chat", "config", "tips"];


    constructor() {
        makeObservable(this, {
            token: observable,
            userId: observable,
            userName: observable,
            premission: observable,
            pageOpen: observable,
            currentUser: computed,
            login: action,
            openPage: action,
            closePage: action,
            logout: action,
            fetchModulesData: action.bound,
            loginByToken: action.bound
        })

        this.fetchModulesData().then(() => {
            this.modules.forEach((item => {
                if (item.enable) {
                    if (item.pcOnly === true) {
                        if (!config.isMobile) {
                            this.premission.push(item.id);
                        }
                    } else {
                        this.premission.push(item.id);
                    }
                }
            }))
        })
    }

    loginByToken() {
        const queryUrl = config.api.userInfoUrl
        return axios({
            method: "get",
            url: queryUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': this.token
            }
        }
        ).then((response) => {
            const data = response.data;
            if (data.statusCode === 0) {
                try{
                    this.isLogin = true;
                    if(!data.data){
                        this.relogin();
                        return;
                    }
                    this.userName = data.data.name;
                    this.userId = data.data.userId
                    this.premission.push("image");
                    this.premission.push("person");
                    //this.premission.push("image_edit");
                }catch(e){
                    this.relogin();
                }
            } else {
                //alert('The login token is expired. Please login it again if need.')
                this.relogin();
            }
        });
    }

    relogin(){
        localStorage[USER_TOKEN_KEY] = "";
        this.openPage();
        loadingObj.closeLoading();
    }

    getPulicKey() {
        const queryUrl = config.api.publicKeyUrl;
        const promise = new Promise((resolve, reject) => {
            if (this.publicKey) {
                resolve(this.publicKey);
            }
            axios({
                method: "get",
                url: queryUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
            ).then((response) => {
                if (response.data.statusCode === 0) {
                    this.publicKey = response.data.data;
                    resolve(this.publicKey);
                }
            });
        });
        return promise;
    }

    checkUserIfExisting(userId: string) {
        const queryUrl = config.api.checkUserIfExistingUrl;
        const promise = new Promise((resolve, reject) => {
            if (this.publicKey) {
                resolve(this.publicKey);
            }
            axios({
                method: "get",
                url: queryUrl + "/" + userId,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }
            ).then((response) => {
                if (response.data.statusCode === 0) {
                    resolve(response.data.data);
                } else {
                    reject(false)
                }
            });
        });
        return promise;
    }

    sentCode(account: string) {
        const type=isPhoneNumber4China(account)?"phone":"email";
        if(type==='phone'){
            return axios({
                method: "get",
                url: apiSetting.sentSmsCodeUrl + account,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'token': this.token
                }
            }
            );
        }else{
            return axios({
                method: "post",
                url: apiSetting.sentEmailCodeUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'token': this.token
                },
                params:{
                    email:account
                }
            }
            );
        }
    }


    encrypt(text: string) {
        const encrypt = new JSEncrypt({ default_key_size: '2048' });
        encrypt.setPublicKey(this.publicKey);
        const encrypted = encrypt.encrypt(text);
        return encrypted;
    }


    fetchModulesData() {
        const self = this;
        return axios({
            method: "get",
            url: config.api.moduleUrl + "?uuid=" + new Date().getTime(),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        ).then((response) => {
            if (response.data) {
                const data = response.data;
                if (data.data) {
                    self.modules = data.data;
                }
            }
        });
    }
}

const userProflie = new UserProflie();
export default userProflie;