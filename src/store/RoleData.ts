import { makeObservable, observable, action} from "mobx";
import axios from 'axios';
import config  from './AppConfig';
import prompts from '../data/prompt';
export interface IRoleData{
    roles:IRole[];
    currentRoles:IRole[];
    getContentByRole:(role: string)=>string;

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
            role.tags.includes(this.currentTag)
          });
    }

    
    get currentTags(){
        const tags:string[]=[];

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
    

    getContentByRole(role: string){
        for(let i=0;i<this.roles.length;i++){
            if(this.roles[i].roleId===role){
                return config.isChinese?this.roles[i]?.descriptionCN:this.roles[i]?.description;
            }
        }
        return "";
    }

    fetchData() {
        const self=this;
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
                    self.roles=self.roles.concat(data.data);
                }
              }
          });
    }
}
const roleData = new RoleData()
export default roleData;