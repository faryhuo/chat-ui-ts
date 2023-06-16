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
}

class RoleData implements IRoleData{
    roles:IRole[]=[{
        roleId:"",
        description:"",
        roleNameCN:"",
        descriptionCN:"",
        roleName:""
    }];


    constructor() {
        makeObservable(this, {
            roles: observable,
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

    loadRolesInLocal(){
        prompts.forEach((item)=>{
            let role:IRole={
                roleId:"",
                description:"",
                descriptionCN:"",
                roleNameCN:"",
                roleName:""
            };
            role.roleId=item.id+"";
            role.description=item.desc_en;
            role.descriptionCN=item.desc_cn;
            role.roleName=item.title_en;
            role.roleNameCN=item.title;
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