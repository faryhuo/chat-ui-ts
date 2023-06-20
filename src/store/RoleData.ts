import { makeObservable, observable, action} from "mobx";
import axios from 'axios';
import config  from './AppConfig';
import prompts from '../data/prompt';
export interface IRoleData{
    roles:IRole[];
    currentRoles:IRole[];
    getContentByRole:(role: string)=>string;
    checkRoleIsExisting:(name:string)=>boolean;

}
export interface  IRole{
    roleId:string;
    description:string;
    descriptionCN:string;
    roleNameCN:string;
    roleName:string;
    tags:string[];
}

class RoleData implements IRoleData{
    roles:IRole[]=[];
    currentTag="favorite";


    constructor() {
        makeObservable(this, {
            roles: observable,
            currentTag: observable,
            fetchData:action.bound
        })
        this.loadRolesInLocal();
        this.fetchData();
    }

    get currentRoles(){
        return this.roles.filter((role)=>{
            return !!(config.isChinese?role.roleNameCN:role.roleName) && 
            !!(config.isChinese?role.descriptionCN:role.description)
          });
    }

    changeTag(tag:string){
        this.currentTag=tag;
    }

    get currentRolesByTag(){
        return this.roles.filter((role)=>{
            return !!(config.isChinese?role.roleNameCN:role.roleName) && 
            !!(config.isChinese?role.descriptionCN:role.description) &&
            role.tags && role.tags.includes(this.currentTag)
          });
    }

    
    get currentTags(){
        const tags:string[]=[];
        tags.push("all");
        this.roles.forEach((role)=>{
            if(!!(config.isChinese?role.roleNameCN:role.roleName) && 
            !!(config.isChinese?role.descriptionCN:role.description)){
                if(role.tags && role.tags.length){
                    role.tags.forEach(tag=>{
                        if(!tags.includes(tag)){
                            tags.push(tag);
                        }
                    })
                }
            }
          });
        return tags;
    }

    loadRolesInLocal(){
        prompts.forEach((item)=>{
            let role:IRole={
                roleId:"",
                description:"",
                descriptionCN:"",
                roleNameCN:"",
                roleName:"",
                tags:[]
            };
            role.roleId=item.id+"";
            role.description=item.desc_en;
            role.descriptionCN=item.desc_cn;
            role.roleName=item.title_en;
            role.roleNameCN=item.title;
            role.tags=item.tags;
            this.roles.push(role);
        })
    }

    checkRoleIsExisting(name:string){
        let result=false;
        for(let i=0;i<this.currentRoles.length;i++){
            const currentRoleName=config.isChinese?this.currentRoles[i].roleNameCN:this.currentRoles[i].roleName;
            if(name===currentRoleName){
                result=true;
                break;
            }
        }
        return result;
    }
    

    getContentByRole(role: string){
        for(let i=0;i<this.roles.length;i++){
            if(this.roles[i].roleId===role){
                return config.isChinese?this.roles[i]?.descriptionCN:this.roles[i]?.description;
            }
        }
        return "";
    }

    fetchData() {
        axios({
            method: "get",
            url: config.api.chatRoleUrl+"?uuid="+new Date().getTime(),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
          ).then((response)=>{
            if (response.data) {
                const data = response.data;
                if(data.data){
                    (data.data as IRole[]).forEach(item => {
                        let hasKey=false;
                        for(let i=0;i<this.roles.length;i++){
                            if(this.roles[i].roleId==item.roleId){
                                hasKey=true;
                                this.roles[i]=item;
                                break;
                            }
                        }
                        if(!hasKey){
                            this.roles.push(item);
                        }
                    });
                }
              }
        });
    }


    addRole(role:IRole){
       return new Promise((resolve,reject)=>{
        axios({
                method: "post",
                url: config.api.chatRoleUrl,
                headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                },
                data:JSON.stringify(role)
            }).then((response)=>{
                const data=response.data;
                if(data && data.data){
                    this.fetchData();
                    resolve(true);
                }else{
                    reject(data);
                }
            })
        });
    }


    deleteRole(roleId: string){
        return new Promise((resolve,reject)=>{
         axios({
                 method: "delete",
                 url: `${config.api.chatRoleUrl}/${roleId}`,
                 headers: {
                 'Content-Type': 'application/json;charset=UTF-8'
                 }
             }).then((response)=>{
                 const data=response.data;
                 if(data && data.data){
                     this.fetchData();
                     resolve(true);
                 }else{
                     reject(data);
                 }
             })
         });
     }
}
const roleData = new RoleData()
export default roleData;