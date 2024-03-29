import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import APISetting from './APISetting';
import { MessageInstance } from "antd/es/message/interface";
import saveAs from 'file-saver';
import i18n from "../utils/i18n";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import noticeData from "./NoticeData";
import { containsChineseCharacters } from "../utils/CommonUtils";
import userProflie from "./UserProfile";

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
    fetchData:(token:string)=>void;
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
    model:"MJ" | "NIJI" | "DALL-E3";
    quality:string;
    chaos:number;
    iw:number;
    stylize?:number;
    style?:string;
    noNeedEle?:string;
    imageUrl?:string;
    raw?:boolean;
    composition:string;
    chineseStyle:string;
    light:string;
    environment:string;
}

class ImageData implements IImageData {

    imageSize = "256x256";
    disableSubmit=true;
    sharingData:IImageSharing[]=[];

    params:ImageParam={
        size:"1:1",
        model:"MJ",
        quality:"1",
        version:"6",
        chaos:0,
        stylize:100,
        style:"",
        noNeedEle:"",
        iw:1,
        raw:false,
        imageUrl:"",
        composition:"",
        chineseStyle:"",
        light:"",
        environment:""
    }

    get isMJModel(){
        return this.params.model==="MJ" || this.params.model==='NIJI';
    }

    updateParams<K extends keyof ImageParam>(key:K, value:ImageParam[K]){
        this.params[key]=value;
        if(key==="model"){
            this.params.version=(value==="MJ"?"6":"5");
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

    async transactionPrompt(prompt:string){
        const queryUrl = APISetting.chatUrl;
        const messageListData=[{
            role:"system",content:"请帮我把我输入的语言转换成Midjourney能识别的英文单词"
        },{
            role:"user",content:prompt
        }];
        const params = {
            messages: JSON.stringify(messageListData),
            uuid: new Date().getTime(),
            max_tokens: 150,
            stream: false,
            channel:"gpt"
        }
        const  response= await axios({
            method: "post",
            url: queryUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(params)
        })
        const choices = response.data.data.choices;
        if(choices && choices[0] && choices[0].message){
            return choices[0].message.content;
        }else{
            return prompt;
        }
    }

    async transaction(prompt:string){
        this.prompt=await this.transactionPrompt(prompt);
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

    async buildPromptByParams(prompt:string){
        const params =await this.getParamsByPrompt(prompt);
        let val=prompt;
        if(containsChineseCharacters(prompt)){
            val=await this.transactionPrompt(prompt);
        }
        return `${val} ${params.join(" ")}`;
    }



    data:ImageResponse[]=[]

    fetchData(token:string){
        fetch(APISetting.mjImageUrl,{
            headers:{
                token:token
            }
        }).then((res)=>res.json()).then((responseData)=>{
            const data=responseData.data as any[];
            data.forEach((item)=>{
                item.progress=100;
                item.image_url=item.urlBig;
                item.status="success";
                item.params={
                    size:item.size
                };
                item.image_id=item.imageId
            })
            this.data=data;
        })
    }


    async getParamsByPrompt(prompt: string) {
        const { size, stylize, model, quality, chaos, version, noNeedEle, iw, imageUrl,raw,composition,style,light,environment} = this.params;
        let modelVersion = "";
        let modelStyle = "";
        const params = [];

        if(composition){
            params.push(`,${composition} `)
        }
        if(style){
            params.push(`,${style} `)
        }
        if(light){
            params.push(`,${light} `)
        }
        if(environment){
            params.push(`,${environment} `)
        }

        //
        if (model === "MJ") {
            modelVersion = `--v ${version}`;
            if (stylize) {
                modelStyle = `--s ${stylize}`;
            }
            if (raw) {
                modelStyle = `--style raw ${modelStyle}`;
            }else{

            }
        } else if (model === "NIJI") {
            modelVersion = `--niji ${version}`;
            // if (style) {
            //     modelStyle = `--style ${style}`;
            // }
        }
        let noNeedEleStr = "";
        if (noNeedEle) {
            let val=noNeedEle;
            if(containsChineseCharacters(noNeedEle)){
                val=await this.transactionPrompt(noNeedEle);
            }
            noNeedEleStr = `--no ${val}`;
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
                'Content-Type': 'application/json;charset=UTF-8',
                "token":userProflie.token
            }
        })
    }

    updateMJImage(imageId:string,action:string,globalMessageApi:MessageInstance){
        const requestData={
            "action": action,
            "image_id": imageId
        };
        return this.generateByData(requestData,globalMessageApi);    
    }

    showErrorMsg(globalMessageApi:MessageInstance,msg:string){
        const message=i18n.t(msg);
        globalMessageApi.error(message,5);
        noticeData.addErrorMessage(message)
    }
    
    showSuccessMsg(globalMessageApi:MessageInstance,msg:string){
        const message=i18n.t(msg);
        globalMessageApi.success(message,5);
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
            fetchEventSource(APISetting.mjImageUrl,
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
                            const data=JSON.parse(responseData);
                            if(data.error){
                                self.showErrorMsg(globalMessageApi,data.error);
                                reject(data.error)
                                return;
                            }
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
                        console.log(e);
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


    async generate(prompt:string,globalMessageApi:MessageInstance){
        if(this.isMJModel){
            let promptStr=await this.buildPromptByParams(prompt);
            if(this.params.imageUrl){
                promptStr=`< ${this.params.imageUrl} > ${promptStr}`;
            }
            const requestData={
                prompt: promptStr,
                size: this.params.size
            };
            return this.generateByData(requestData,globalMessageApi);
        }else{
            let promptStr= this.getPromptByParams4Dall(prompt);
            const formData=new FormData();
            formData.append("message",promptStr);
            formData.append("size",this.getImageSizeForDall3())
            fetch(APISetting.mjImageUrl+"/dall-3",{
                method:"post",
                body:formData,
                headers:{
                    token:userProflie.token
                }
            }).then((rep)=>rep.json())
            .then(data=>{
                console.log(data);
            })
        }
    }

    getImageSizeForDall3(){
        if(this.params.size==="1:1"){
            return "1024x1024";
        }else if(this.params.size==="5:3"){
            return "1792x1024";
        }else if(this.params.size==="3:5"){
            return "1024x1792";
        }else{
            return "1024x1024";
        }
    }

    getPromptByParams4Dall(prompt: string) {
        const {noNeedEle,composition,style,light,environment} = this.params;
        const params = [];
        if(composition){
            params.push(`,${composition} `)
        }
        if(style){
            params.push(`,${style} `)
        }
        if(light){
            params.push(`,${light} `)
        }
        if(environment){
            params.push(`,${environment} `)
        }
        let noNeedEleStr = "";
        if (noNeedEle) {
            noNeedEleStr = `,(I won't drop those element in here (${noNeedEle}).`;
            params.push(noNeedEleStr)
        }
        return prompt+params.join(" ");
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
            setPrompt:action,
            fetchData:action.bound
        })
        if(localStorage["image_data"]){
            this.data=JSON.parse(localStorage["image_data"]);
        }
    }

}
const imageData = new ImageData()
export default imageData;