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
    
    chatUrl=`https://8.219.183.208:8080/chat/v2/info`;
    chatStreamUrl=`https://8.219.183.208:8080/chat/v2/stream`;

    imageUrl=`${this.host}/${this.chatServiceName}/image/v2/info`;
    editsUrl=`${this.host}/${this.chatServiceName}/edits/v2/info`;
    imageEditUrl=`${this.host}/${this.chatServiceName}/image/v2/edit`;
    variationsImageUrl=`${this.host}/${this.chatServiceName}/image/v2/variations`;
    imageUploadUrl=`${this.host}/${this.chatServiceName}/upload/v2/image`
    chatRoleUrl=`http://121.37.10.131:8401/config/chat-roles`
    moduleUrl=`https://121.37.10.131:8401/config/modules`
    loginUrl=`https://121.37.10.131:8402/user/user-tokens`
    signUpUrl=`https://121.37.10.131:8402/user/user`

    publicKeyUrl=`https://121.37.10.131:8402/user/rsapubkey`
    userInfoUrl=`https://121.37.10.131:8402/user/user-info`
    historyUrl=`https://121.37.10.131:8403/history`
    sentSmsCodeUrl=`${this.host}/${this.smsServiceName}/sms/send/`    
  
}
const apiSetting = new APISetting()
export default apiSetting;