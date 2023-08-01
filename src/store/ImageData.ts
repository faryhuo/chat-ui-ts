import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import APISetting from './APISetting';

export interface IImageData {
    imageSize: string;
    callImageAPI: (chatId: string, message: string) => Promise<any>
    changeImageSize: (size: string) => void;
}


class ImageData implements IImageData {

    imageSize = "256x256";

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

    constructor() {
        makeObservable(this, {
            imageSize: observable,
            changeImageSize: action
        })
    }

}
const imageData = new ImageData()
export default imageData;