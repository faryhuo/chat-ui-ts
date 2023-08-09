import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import APISetting from './APISetting';
import { MessageInstance } from "antd/es/message/interface";
import saveAs from 'file-saver';
import i18n from "../utils/i18n";
import apiSetting from "./APISetting";
import userProflie from "./UserProfile";
import { IMessageListData } from "./MessageData";

export interface IImageData {
    imageSize: string;
    params:ImageParam;
    prompt:string;
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
    stylize?:number;
    style?:string;
    noNeedEle?:string;
    imageUrl?:string;
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
        noNeedEle:"",
        imageUrl:""
    }

    updateParams<K extends keyof ImageParam>(key:K, value:ImageParam[K]){
        this.params[key]=value;
        if(key==="model"){
            this.params.version=(value==="MJ"?"5.2":"5");
        }
    }

    prompt="";

    setPrompt(prompt:string){
        this.prompt=prompt
    }

    transaction(prompt:string){
        const queryUrl = apiSetting.chatUrl;
        const messageListData:IMessageListData[]=[{
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
                'token': userProflie.token,
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(params)
        }).then((response)=>{
            const choices = response.data.data.choices;
            if(choices && choices[0] && choices[0].message){
                this.prompt=choices[0].message;
            }
        })
    }


    getWidthBySize(size?:string){
        if(size==="1:1"){
            return 256;
        }if(size==="1:2"){
            return 256/2;
        }else if(size==="4:3"){
            return 256;
        }else if(size==="3:4"){
            return 256/4*3;
        }else if(size==="16:9"){
            return 256;
        }else if(size==="9:16"){
            return 256/16*9;
        }else{
            return 256;
        }
    }

    getImageByTaskId(taskId:string){
        return this.data.find(item=>item.task_id===taskId);
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
            return 256;
        }else if(size==="4:3"){
            return 256/4*3;
        }else if(size==="3:4"){
            return 256;
        }else if(size==="16:9"){
            return 256/16*9;
        }else if(size==="9:16"){
            return 256;
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
        const {size,stylize,model,quality,chaos,version,style,noNeedEle} = this.params;
        let modelVersion="";
        let modelStyle="";
        if(model==="MJ"){
            modelVersion=`--v ${version}`;
            if(stylize){
                modelStyle=`--s ${stylize}`
            }
        }else if(model==="NIJI"){
            modelVersion=`--niji ${version}`;
            if(style){
                modelStyle=`--style ${style}`
            }
        }
        let noNeedEleStr="";
        if(noNeedEle){
            noNeedEleStr=`--no ${noNeedEle}`
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
        const requestData={
            "action": action,
            "image_id": imageId
        };
        return this.generateByData(requestData,globalMessageApi);    
    }

    generateByData(requestData:{action:string,prompt?:string,image_id?:string},globalMessageApi:MessageInstance){
        const token="449f53e6ab334c52a9359406cc558be8";
        // this.data.push(
        //     {params:this.params,type:requestData.action,status:"process",
        //     actions:[],image_id:"",image_url:"",task_id:"",date:new Date(),
        //     progress:0})
        return axios({
            url: `https://api.zhishuyun.com/midjourney/imagine/relax?token=${token}`,
            data: requestData,
            headers: {
                'accept': 'application/x-ndjson',
                'content-type': 'application/json'
            },
            responseType: 'stream',
            method: 'POST',
            onDownloadProgress: progressEvent => {
                const response = progressEvent.event.target.response;
                const lines = response.split('\r\n').filter((line: any) => !!line)
                const lastLine = lines[lines.length - 1]
                if(lastLine){
                    console.log(lastLine);
                    const data=JSON.parse(lastLine);
                    const taskId=data.task_id;
                    if(data.code && data.detail){
                        globalMessageApi.error(data.detail)
                        return;
                    }
                    if(data.progress===100){
                        let obj=this.getImageByTaskId(taskId) as ImageResponse;
                        if(!obj){
                            this.data.push(Object.assign(data,{date:new Date(),
                                params:this.params,type:requestData.action,status:"success"}))
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
                            this.setImageByTaskId(taskId,obj);
                        }
                    }else{
                       let obj=this.getImageByTaskId(taskId);
                       if(!obj){
                            this.data.push(Object.assign(data,{params:this.params,type:requestData.action,status:"process"}))
                       }else{
                            obj.progress=data.progress;
                       }
                    }
                }
            }
            }).then(({ data }) =>{
                console.log(data);
                localStorage["image_data"]=JSON.stringify(this.data);
                globalMessageApi.success("Image generated successlly");
            });    
    }


    generate(prompt:string,globalMessageApi:MessageInstance){
        globalMessageApi.open({
            type: 'success',
            content: i18n.t<string>('Submit task successlly. you can go to other page first, I will tall you if done'),
          });
        let promptStr=this.buildPromptByParams(prompt);
        if(this.params.imageUrl){
            promptStr=this.params.imageUrl+" "+promptStr;
        }
        const requestData={
            prompt: promptStr,
            action: 'generate'
        };
        return this.generateByData(requestData,globalMessageApi);
    }

    constructor() {
        makeObservable(this, {
            imageSize: observable,
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