import { makeObservable, observable , action, computed } from "mobx";
import apiSetting from "./APISetting";
import userProflie from "./UserProfile";


export interface IPayment{
    getAlipayQRCode:()=>Promise<any>;
}

class Payment implements IPayment {




    constructor() {
        makeObservable(this, {
        })
        
    }

    async getAlipayQRCode(){
        const response= await fetch("https://fary.chat:8409/payment/alipay/qrcode",{
            headers:{
                token:localStorage["user-token"]
            }
        });
        if (!response.ok) {
            //创造一个错误类型
            throw new Error("");
        }
        const data = await response.json();
        const responseJson=JSON.parse(data.data);
        return responseJson.alipay_trade_precreate_response?.qr_code;
    }

  
}

const payment = new Payment();
export default payment;