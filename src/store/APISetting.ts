export interface IAPISetting{
    version:string;
    host:string;
    chatServiceName:string;
    chatConfigServiceName:string;
    userServiceName:string;
    smsServiceName:string;

    historyServiceName:string;
    chatUrl:string;
    chatStreamUrl:string;
    imageUrl:string;
    editsUrl:string;
    imageEditUrl:string;
    variationsImageUrl:string;
    imageUploadUrl:string;
    chatRoleUrl:string;
    moduleUrl:string;
    loginUrl:string;
    signUpUrl:string;

    publicKeyUrl:string;
    userInfoUrl:string;
    historyUrl:string;
    sentSmsCodeUrl:string;
}

class APISetting implements IAPISetting{

    version="3.0"
    host="https://fary.chat:8555"
    chatServiceName="chat-service"
    chatConfigServiceName="chat-config-service"
    userServiceName="chat-user-service"
    smsServiceName="chat-sms-service"

    historyServiceName="chat-history-service"
    
    chatUrl=`${this.host}/${this.chatServiceName}/chat/v2/info`;
    chatStreamUrl=`${this.host}/${this.chatServiceName}/chat/v2/stream`;

    imageUrl=`${this.host}/${this.chatServiceName}/image/v2/info`;
    editsUrl=`${this.host}/${this.chatServiceName}/edits/v2/info`;
    imageEditUrl=`${this.host}/${this.chatServiceName}/image/v2/edit`;
    variationsImageUrl=`${this.host}/${this.chatServiceName}/image/v2/variations`;
    imageUploadUrl=`${this.host}/${this.chatServiceName}/upload/v2/image`
    chatRoleUrl=`${this.host}/${this.chatConfigServiceName}/config/chat-roles`
    moduleUrl=`${this.host}/${this.chatConfigServiceName}/config/modules`
    loginUrl=`${this.host}/${this.userServiceName}/user/user-tokens`
    signUpUrl=`${this.host}/${this.userServiceName}/user/user`
    checkUserIfExistingUrl=`${this.host}/${this.userServiceName}/user/user`

    publicKeyUrl=`${this.host}/${this.userServiceName}/user/rsapubkey`
    userInfoUrl=`${this.host}/${this.userServiceName}/user/user-info`
    historyUrl=`${this.host}/${this.historyServiceName}/history`
    sentSmsCodeUrl=`${this.host}/${this.smsServiceName}/sms/send/`    
  
}
const apiSetting = new APISetting()
export default apiSetting;