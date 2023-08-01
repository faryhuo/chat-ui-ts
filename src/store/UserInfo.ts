import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import apiSetting from "./APISetting";
import userProflie from "./UserProfile";
export interface ITokenUsage {
    modelName: string;
    inputTokenUsage: number;
    outputTokenUsage: number;
    inputTokenPrice: number;
    outputTokenPrice: number;
    total: number;
}

export interface IUserInfo {
    tokenUsage: ITokenUsage[];
    balance: number;
    fetchTokenUsage: () => Promise<any>;
}


class UserInfo implements IUserInfo {
    tokenUsage: ITokenUsage[] = [];
    balance = -99;
    constructor() {
        makeObservable(this, {
            tokenUsage: observable,
            balance: observable,
            setBalance: action,
            fetchTokenUsage: action.bound,
        });
    }

    setBalance(balance: number) {
        this.balance = balance
    }

    fetchTokenUsage() {
        return axios({
            method: "get",
            url: apiSetting.tokenUsageUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': userProflie.token
            }
        }
        ).then((response) => {
            const data = response.data.data;
            if (data) {
                this.tokenUsage = data;
            }
        });
    }
}

const userInfo = new UserInfo();
export default userInfo;