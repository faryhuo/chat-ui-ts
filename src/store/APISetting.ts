export interface IAPISetting {
    version: string;
    host: string;
    gateway:string;
    chatServiceName: string;
    chatConfigServiceName: string;
    userServiceName: string;
    smsServiceName: string;
    historyServiceName: string;
    chatUrl: string;
    chatStreamUrl: string;
    imageUrl: string;
    editsUrl: string;
    imageEditUrl: string;
    variationsImageUrl: string;
    imageUploadUrl: string;
    chatRoleUrl: string;
    moduleUrl: string;
    loginUrl: string;
    signUpUrl: string;
    publicKeyUrl: string;
    userInfoUrl: string;
    historyUrl: string;
    sentSmsCodeUrl: string;
}

class APISetting implements IAPISetting {

    version = "3.0"
    host = "https://fary.chat";
    gateway = process.env.REACT_APP_PROFILE==='dev'?"https://api.fary.chat":"https://fary.chat/gateway"
    chatServiceName = "chat-service"
    chatConfigServiceName = "chat-config-service"
    userServiceName = "chat-user-service"
    smsServiceName = "chat-sms-service"
    payServiceName = "chat-pay-service"
    health="/actuator/health";
    historyServiceName = "chat-history-service"

    error:{
        "404":"https://mj.fary.chat/error/404.png",
        "500":"https://mj.fary.chat/error/404.png"
    }

    thridWebSite:{

    }


    chatUrl = `${this.gateway}/${this.chatServiceName}/chat/v2/info`;
    assistantsUrl=`${this.gateway}/${this.chatServiceName}/assistants`;
    chatStreamUrl = `${this.gateway}/${this.chatServiceName}/chat/v2/stream`;
    audioUrl = `${this.gateway}/${this.chatServiceName}/audio/speech`;
    transcriptionsUrl = `${this.gateway}/${this.chatServiceName}/audio/transcriptions`;
    translateUrl= `${this.gateway}/${this.chatServiceName}/translate/deepl`;

    imageUrl = `${this.gateway}/${this.chatServiceName}/image/v2/info`;
    editsUrl = `${this.gateway}/${this.chatServiceName}/edits/v2/info`;
    imageEditUrl = `${this.gateway}/${this.chatServiceName}/image/v2/edit`;
    variationsImageUrl = `${this.gateway}/${this.chatServiceName}/image/v2/variations`;
    imageUploadUrl = `${this.gateway}/${this.historyServiceName}/image/upload`
    chatRoleUrl = `${this.gateway}/${this.chatConfigServiceName}/config/chat-roles`
    moduleUrl = `${this.gateway}/${this.chatConfigServiceName}/config/modules`
    loginUrl = `${this.gateway}/${this.userServiceName}/user/user-tokens`
    signUpUrl = `${this.gateway}/${this.userServiceName}/user/user`
    checkUserIfExistingUrl = `${this.gateway}/${this.userServiceName}/user/user`

    publicKeyUrl = `${this.gateway}/${this.userServiceName}/user/rsapubkey`
    userInfoUrl = `${this.gateway}/${this.userServiceName}/user/user-info`
    userWsUrl = `${this.gateway}/${this.userServiceName}/user/ws/login`
    historyUrl = `${this.gateway}/${this.historyServiceName}/history`

    sentSmsCodeUrl = `${this.gateway}/${this.smsServiceName}/sms/send/`
    sentEmailCodeUrl = `${this.gateway}/${this.smsServiceName}/email/signup`

    favoriteRoleUrl = `${this.gateway}/${this.userServiceName}/favorite/roles`
    fetFavoriteChatUrl = `${this.gateway}/${this.userServiceName}/favorite/chats`

    sharingUrl = `${this.gateway}/${this.historyServiceName}/share`

    aiModelsUrl = `${this.gateway}/${this.userServiceName}/user/models`
    tokenUsageUrl = `${this.gateway}/${this.userServiceName}/token/usage`
    feedbackUrl = `${this.gateway}/${this.userServiceName}/feedback`
    mjImageUrl = `${this.gateway}/${this.historyServiceName}/image`;
    imageSharingUrl = `${this.gateway}/${this.historyServiceName}/image/all`;
    modelAmountUrl = `${this.gateway}/${this.userServiceName}/user/models/limit/`;

    paymentUrl=`${this.gateway}/${this.payServiceName}/payment/alipay/pay`
    
    modelsUrl = `${this.gateway}/${this.chatConfigServiceName}/models/activity`;
    maintenanceUrl =`${this.gateway}/${this.chatConfigServiceName}/sys/setting/maintenance`
    noticeUrl =`${this.gateway}/${this.chatConfigServiceName}/notice`

    websiteDoc='https://docs.qq.com/doc/DSGlBTkhEaWNHRlFF';
    websiteICP='https://beian.miit.gov.cn/#/Integrated/index';
}
const apiSetting = new APISetting()
export default apiSetting;