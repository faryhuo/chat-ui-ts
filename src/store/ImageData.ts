import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import APISetting from './APISetting';
import { MessageInstance } from "antd/es/message/interface";

export interface IImageData {
    imageSize: string;
    params:ImageParam;
    callImageAPI: (chatId: string, message: string) => Promise<any>
    changeImageSize: (size: string) => void;
    setParams:(params: ImageParam)=>void;
    changeNoNeedEle:(val: string)=>void;
    updateMJImage:(imageId:string,action:string,globalMessageApi:MessageInstance) => Promise<any>
    callMJAPI:(prompt:string,action:string,globalMessageApi:MessageInstance) => Promise<any>
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
    prompt?:string;
    date:Date;
}

export interface ImageParam {
    size:string;
    version:string;
    model:string;
    quality:string;
    chaos:number;
    stylize?:number;
    style?:string;
    noNeedEle?:string;
}

class ImageData implements IImageData {

    imageSize = "256x256";

    params:ImageParam={
        size:"16:9",
        model:"MJ",
        quality:"1",
        version:"5.2",
        chaos:0,
        stylize:100,
        style:"",
        noNeedEle:""
    }

    changeNoNeedEle(val:string){
        this.params.noNeedEle=val;
    }

    setParams(params: ImageParam){
        if(params.model!==this.params.model){
            params.version=(params.model==="MJ"?"5.2":"5");
        }
        this.params=params;
    }

    buildPromptByParams(prompt:string){
        const {size,stylize,model,quality,chaos,version,style,noNeedEle} = this.params;
        let modelVersion="";
        let modelStyle="";
        if(model==="MJ"){
            modelVersion=`--v ${version}`;
            modelStyle=`--s ${stylize}`
        }else if(model==="NIJI"){
            modelVersion=`--niji ${version}`;
            if(style){
                modelStyle=`--style ${style}`
            }
        }
        let noNeedEleStr="";
        if(noNeedEle){
            noNeedEleStr=`--no ${noNeedEleStr}`
        }
        return `${prompt} ${modelVersion} --ar ${size} --c ${chaos} --q ${quality} ${modelStyle} ${noNeedEleStr}`
    }



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
        "prompt":"cat",
        "date":new Date(),
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

    updateMJImage(imageId:string,action:string,globalMessageApi:MessageInstance){
        const options = {
            method: "POST",
            headers: {
              "accept": "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({
              "action": action,
              "image_id": imageId
            })
          };
          
        return fetch("https://api.zhishuyun.com/midjourney/imagine/relax?token=449f53e6ab334c52a9359406cc558be8", options)
            .then(response => response.json())
            .then(response => {
                if(response && response.image_url){
                    this.data.push(Object.assign(response,{type:action,status:"success",date:new Date()}));
                    localStorage["image_data"]=JSON.stringify(this.data);
                    globalMessageApi.success("Image generated successlly");
                }
            })
            .catch(err => console.error(err));
    }

    callMJAPI(prompt:string,action:string,globalMessageApi:MessageInstance){
        const options = {
            method: "POST",
            headers: {
              "accept": "application/json",
              "content-type": "application/json"
            },
            body: JSON.stringify({
              "action": action,
              "prompt": this.buildPromptByParams(prompt)
            })
          };
          
        return fetch("https://api.zhishuyun.com/midjourney/imagine/relax?token=449f53e6ab334c52a9359406cc558be8", options)
            .then(response => response.json())
            .then(response => {
                if(response && response.image_url){
                    this.data.push(Object.assign(response,{type:action,date:new Date(),status:"success",prompt:prompt}));
                    localStorage["image_data"]=JSON.stringify(this.data);
                    globalMessageApi.success("Image generated successlly");
                }
            })
            .catch(err => console.error(err));
    }

    constructor() {
        makeObservable(this, {
            imageSize: observable,
            params: observable,
            data: observable,
            changeImageSize: action,
            setParams:action,
            changeNoNeedEle:action
        })
        if(localStorage["image_data"]){
            this.data=JSON.parse(localStorage["image_data"]);
        }
    }

}
const imageData = new ImageData()
export default imageData;