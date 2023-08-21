import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import APISetting from './APISetting';
import { MessageInstance } from "antd/es/message/interface";
import saveAs from 'file-saver';
import i18n from "../utils/i18n";
import apiSetting from "./APISetting";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import noticeData from "./NoticeData";

export interface IImageSharing{
    visible:boolean;
    urlBig:string;
    urlSmall:string;
    size:string;
    width:number;
    height:number;
    prompt_full:string;
    prompt:string;
}

export interface IImageData {
    imageSize: string;
    params:ImageParam;
    prompt:string;
    disableSubmit:boolean;
    sharingData:IImageSharing[];
    setPrompt:(prompt:string)=>void;
    callImageAPI: (chatId: string, message: string) => Promise<any>
    changeImageSize: (size: string) => void;
    updateParams:<K extends keyof ImageParam>(key:K, value:ImageParam[K])=>void;
    changeNoNeedEle:(val: string)=>void;
    updateMJImage:(imageId:string,action:string,globalMessageApi:MessageInstance) => Promise<any>
    generate:(prompt:string,globalMessageApi:MessageInstance) => Promise<any>
    getWidthBySize:(size:string)=>number;
    getHeightBySize:(size:string)=>number;
    downloadImage:(url: string)=>void;
}


export interface ImageResponse {
    image_url:string;
    image_id:string;
    progress:number;
    actions:string[];
    task_id:string;
    type:string;
    status:string;
    prompt?:string;
    date:Date;
    params?:ImageParam;
}

export interface ImageParam {
    size:string;
    version:string;
    model:string;
    quality:string;
    chaos:number;
    iw:number;
    stylize?:number;
    style?:string;
    noNeedEle?:string;
    imageUrl?:string;
}

class ImageData implements IImageData {

    imageSize = "256x256";
    disableSubmit=true;
    sharingData:IImageSharing[]=[];

    params:ImageParam={
        size:"1:1",
        model:"MJ",
        quality:"1",
        version:"5.2",
        chaos:0,
        stylize:100,
        style:"",
        noNeedEle:"",
        iw:1,
        imageUrl:""
    }

    updateParams<K extends keyof ImageParam>(key:K, value:ImageParam[K]){
        this.params[key]=value;
        if(key==="model"){
            this.params.version=(value==="MJ"?"5.2":"5");
        }
    }

    prompt="";
    hasTask=false;

    setPrompt(prompt:string){
        this.prompt=prompt;
        if(!prompt){
            this.disableSubmit=true;
        }else if(this.hasTask===false){
            this.disableSubmit=false;
        }
    }

    transaction(prompt:string){
        const queryUrl = apiSetting.chatUrl;
        const messageListData=[{
            role:"system",content:"请帮我把中文转换成Midjourney能识别的英文单词"
        },{
            role:"user",content:prompt
        }];
        const params = {
            messages: JSON.stringify(messageListData),
            uuid: new Date().getTime(),
            max_tokens: 150,
            stream: false
        }
        return axios({
            method: "post",
            url: queryUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(params)
        }).then((response)=>{
            const choices = response.data.data.choices;
            if(choices && choices[0] && choices[0].message){
                this.prompt=choices[0].message.content;
            }
        })
    }


    getWidthBySize(size?:string){
        // if(size==="1:1"){
        //     return 256;
        // }if(size==="1:2"){
        //     return 256;
        // }else if(size==="4:3"){
        //     return 256*4/3;
        // }else if(size==="3:4"){
        //     return 256;
        // }else if(size==="16:9"){
        //     return 256*16/9;
        // }else if(size==="9:16"){
        //     return 256;
        // }else{
        //     return 256;
        // }
        return 256
    }

    getImageByTaskId(taskId:string){
        return this.data.find(item=>item.task_id===taskId);
    }

    getImageByImageId(imageId:string){
        return this.data.find(item=>item.image_id===imageId);
    }

    setImageByTaskId(taskId:string,response:ImageResponse){
        this.data.forEach(item=>{
            if(item.task_id===taskId){
                item=response;
            }
        })
    }

    getHeightBySize(size?:string){
        if(size==="1:1"){
            return 256;
        }if(size==="1:2"){
            return 256*2;
        }else if(size==="4:3"){
            return 256/4*3;
        }else if(size==="3:4"){
            return 256*4/3;
        }else if(size==="16:9"){
            return 256/16*9;
        }else if(size==="9:16"){
            return 256*16/9;
        }else{
            return 256;
        }
    }
    

    changeNoNeedEle(val:string){
        this.params.noNeedEle=val;
    }

    downloadImage(url: string) {
        fetch(url, {
            method: 'GET'
          })
            .then(response => response.blob())
            .then(blob => {
                saveAs(blob,"image.jpg");
            });
      }

    buildPromptByParams(prompt:string){
        const params = this.getParamsByPrompt(prompt);
        return `${prompt} ${params.join(" ")}`;
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


    getParamsByPrompt(prompt: string) {
        const { size, stylize, model, quality, chaos, version, style, noNeedEle, iw, imageUrl } = this.params;
        let modelVersion = "";
        let modelStyle = "";
        const params = [];
        if (model === "MJ") {
            modelVersion = `--v ${version}`;
            if (stylize) {
                modelStyle = `--s ${stylize}`;
            }
        } else if (model === "NIJI") {
            modelVersion = `--niji ${version}`;
            if (style) {
                modelStyle = `--style ${style}`;
            }
        }
        let noNeedEleStr = "";
        if (noNeedEle) {
            noNeedEleStr = `--no ${noNeedEle}`;
        }
        const arr = prompt.split(" ");
        if (!arr.includes("--v") || !arr.includes("--niji")) {
            params.push(modelVersion);
            params.push(modelStyle);
        }
        if (!arr.includes("--ar")) {
            params.push(`--ar ${size}`);
        }
        if (!arr.includes("--c")) {
            params.push(`--c ${chaos}`);
        }
        if (!arr.includes("--q")) {
            params.push(`--q ${quality}`);
        }
        if (!arr.includes("--no")) {
            params.push(noNeedEleStr);
        }
        if (imageUrl && iw && !arr.includes("--iw")) {
            params.push(`--iw ${iw}`);
        }
        return params;
    }

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
        const requestData={
            "action": action,
            "image_id": imageId
        };
        return this.generateByData(requestData,globalMessageApi);    
    }

    showErrorMsg(globalMessageApi:MessageInstance,msg:string){
        const message=i18n.t<string>(msg);
        globalMessageApi.error(message,15);
        noticeData.addErrorMessage(message)
    }
    
    showSuccessMsg(globalMessageApi:MessageInstance,msg:string){
        const message=i18n.t<string>(msg);
        globalMessageApi.success(message,15);
        noticeData.addSuccessMessage(message)
    }

    generateByData(requestData:{action?:string,prompt?:string,size?:string,image_id?:string},globalMessageApi:MessageInstance){
        this.disableSubmit=true;
        this.hasTask=true;
        setTimeout(()=>{ this.disableSubmit=false},60000);
        const ctrl = new AbortController();
        const self=this;
        const message='Submit task successlly. you can go to other page first, I will tall you if done';
        self.showSuccessMsg(globalMessageApi,message);
        const promise = new Promise((resolve,reject) => {
            fetchEventSource(apiSetting.mjImageUrl,
                {
                    method: "POST",
                    signal: ctrl.signal,
                    headers: {
                        'token': localStorage['user-token'],
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(requestData),
                    onmessage(msg) {
                        let responseData = msg.data;
                        if(responseData){
                            console.log(responseData);
                            const data=JSON.parse(responseData);
                            const taskId=data.task_id;
                            if(data.code && data.detail){
                                self.showErrorMsg(globalMessageApi,data.detail);
                                reject(data.detail)
                                return;
                            }
                            if(data.progress===100){
                                resolve(data);
                                let obj=self.getImageByTaskId(taskId) as ImageResponse;
                                if(!obj){
                                    self.data.push(Object.assign(data,{date:new Date(),
                                        params:self.params,type:requestData.action,status:"success"}))
                                }else{
                                    obj.status="success";
                                    obj.date=new Date();
                                    obj.progress=100;
                                    if(requestData.prompt){
                                        obj.prompt=requestData.prompt;
                                    }
                                    obj.actions=data.actions;
                                    obj.image_id=data.image_id;
                                    obj.image_url=data.image_url;
                                    self.setImageByTaskId(taskId,obj);
                                }
                            }else{
                               let obj=self.getImageByTaskId(taskId);
                               if(!obj){
                                    let params:any={};
                                    if(requestData.prompt){
                                        params = Object.assign({},self.params);
                                    }else if(requestData.image_id){
                                        params=self.getImageByImageId(requestData.image_id)?.params;
                                    }
                                    self.data.push(Object.assign(data,{params:params,type:requestData.action,status:"process"}))
                               }else{
                                    obj.progress=data.progress;
                               }
                            }
                        }
                    }, onerror(e) {
                        reject(e);
                        ctrl.abort();
                        throw e;
                    }, openWhenHidden: true
            });
        });
        promise.then(() =>{
            this.disableSubmit=false;
            this.hasTask=false;
            localStorage["image_data"]=JSON.stringify(this.data);
            const message="Image generated successlly";
            self.showSuccessMsg(globalMessageApi,message);
        }).catch(()=>{
            const message="Image generated failure.";
            self.showErrorMsg(globalMessageApi,message);
            this.disableSubmit=false;
            this.hasTask=false;
        });  
        return promise;
    }


    generate(prompt:string,globalMessageApi:MessageInstance){
        let promptStr=this.buildPromptByParams(prompt);
        if(this.params.imageUrl){
            promptStr=`< ${this.params.imageUrl} > ${promptStr}`;
        }
        const requestData={
            prompt: promptStr,
            size: this.params.size
        };
        return this.generateByData(requestData,globalMessageApi);
    }

    

    constructor() {
        makeObservable(this, {
            imageSize: observable,
            sharingData:observable,
            disableSubmit: observable,
            params: observable,
            prompt:observable,
            data: observable,
            changeImageSize: action,
            updateParams:action,
            changeNoNeedEle:action,
            setPrompt:action
        })
        if(localStorage["image_data"]){
            this.data=JSON.parse(localStorage["image_data"]);
        }
    }

}
const imageData = new ImageData()
export default imageData;