import { makeObservable, observable, computed, action } from "mobx";
import config from './AppConfig';
import axios from 'axios';
import JSEncrypt from 'jsencrypt';
import i18n from 'i18next';

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
    sentSMSCode: (phone: string) => Promise<any>;
    signup: (userId: string, password: string, code: string) => Promise<any>;
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
    modules: IModules[] = [];
    pageOpen = false;
    openPage() {
        this.pageOpen = true;
    }
    closePage() {
        this.pageOpen = false;
    }


    login(userId: string, password: string) {
        this.userId = userId;
        this.password = password;
        const promise = new Promise((resolve, reject) => {
            this.getPulicKey().then(() => {
                const queryUrl = config.api.loginUrl;
                const params = {
                    "phone": this.userId,
                    "password": this.encrypt(this.password)
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
                        const errorMsg = i18n.t<string>("api." + response.data.errors.message);
                        reject(errorMsg)
                    } else {
                        reject(i18n.t<string>("Fail to login"));
                    }
                });
            })
        });
        return promise;
    }

    resetPwd(userId: string, password: string, code: string) {
        const promise = new Promise((resolve, reject) => {
            this.getPulicKey().then(() => {
                const queryUrl = config.api.signUpUrl;
                const params = {
                    "phone": userId,
                    "password": this.encrypt(password),
                    "smsCode": code
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
                        const errorMsg = i18n.t<string>("api." + response.data.errors.message);
                        reject(errorMsg)
                    } else {
                        reject(i18n.t<string>("Fail to Reset password"));
                    }
                });
            })
        })
        return promise;
    }

    signup(userId: string, password: string, code: string) {
        const promise = new Promise((resolve, reject) => {
            this.getPulicKey().then(() => {
                const queryUrl = config.api.signUpUrl;
                const params = {
                    "phone": userId,
                    "password": this.encrypt(password),
                    "smsCode": code
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
                        const errorMsg = i18n.t<string>("api." + response.data.errors.message);
                        reject(errorMsg)
                    } else {
                        reject("Fail to signup");
                    }
                });
            })
        })
        return promise;
    }

    logout() {
        this.token = "";
        this.isLogin = false;
        this.userId = "";
        this.userName = "";
        localStorage[USER_TOKEN_KEY] = "";
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
                this.isLogin = true;
                this.userName = data.data.name;
                this.userId = data.data.userId
                this.premission.push("image");
                this.premission.push("person");
                //this.premission.push("image_edit");
            } else {
                //alert('The login token is expired. Please login it again if need.')
                localStorage[USER_TOKEN_KEY] = "";
            }
        });
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

    sentSMSCode(phone: string) {
        return axios({
            method: "get",
            url: config.api.sentSmsCodeUrl + phone,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': this.token
            }
        }
        );
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