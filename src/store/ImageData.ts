import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import APISetting from './APISetting';

export interface IImageData {
    imageSize: string;
    callImageAPI: (chatId: string, message: string) => Promise<any>
    changeImageSize: (size: string) => void;
    callMJAPI:(prompt:string,action:string) => Promise<any>
}

type imageType="generate" | "select" | "update"

export interface ImageResponse {
    image_url:string;
    image_id:string;
    progress:number;
    actions:string[];
    task_id:string;
    type:imageType;
    status:string;
}


class ImageData implements IImageData {

    imageSize = "256x256";

    data:ImageResponse[]=[{
        "image_url": "https://midjourney.cdn.zhishuyun.com/attachments/1124768570157564029/1138095471592755230/charlesrobinson6451504_cat_id5138048_18edb79d-9791-42d6-bcc0-3f7611a1ff68.png",
        "image_id": "1138095471592755230",
        "progress": 100,
        "actions": [
            "upsample1",
            "upsample2",
            "upsample3",
            "upsample4",
            "reroll",
            "variation1",
            "variation2",
            "variation3",
            "variation4"
        ],
        "task_id": "7cb36efd-9b78-44b4-b547-eaeb3b2cb363",
        "type":"generate",
        "status":"success"
    }]


    changeImageSize(size: string) {
        this.imageSize = size;
    }

    callImageAPI(chatId: string, message: string): Promise<any> {
        const params = {
            message: message,
            uuid: chatId,
            size: this.imageSize ? this.imageSize : "256x256"
        }
        const queryString = new URLSearchParams(params as any).toString();
        const queryUrl = `${APISetting.imageUrl}?${queryString}`;
        return axios({
            method: "post",
            url: queryUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
    }

    callMJAPI(prompt:string,action:string){
        const options = {
            method: "POST",
            headers: {
              "accept": "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({
              "action": action,
              "prompt": prompt
            })
          };
          
        return fetch("https://api.zhishuyun.com/midjourney/imagine/relax?token=f483e2f5eefc4385a08897a7bffcbaf5", options)
            .then(response => response.json())
            .then(response => {
                this.data.push(Object.assign(response,{type:action,status:"success"}));
            })
            .catch(err => console.error(err));
    }

    constructor() {
        makeObservable(this, {
            imageSize: observable,
            changeImageSize: action
        })
    }

}
const imageData = new ImageData()
export default imageData;