import { makeObservable, observable, action} from "mobx";
import axios from 'axios';
import api  from './APISetting';

export interface IRoleData{
    roles:IRole[];
    getContentByRole:(role: string)=>string;
}
export interface  IRole{
    roleId:string;
    description:string;
    roleNameCN:string;
    roleName:string;
}

class RoleData implements IRoleData{
    roles:IRole[]=[];

    constructor() {
        makeObservable(this, {
            roles: observable,
            fetchData:action.bound
        })
        this.fetchData();
    }
    

    getContentByRole(role: string){
        for(let i=0;i<this.roles.length;i++){
            if(this.roles[i].roleId===role){
                return this.roles[i]?.description;
            }
        }
        return "";
    }

    fetchData() {
        const self=this;
        axios({
            method: "get",
            url: api.chatRoleUrl+"?uuid="+new Date().getTime(),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
          ).then((response)=>{
            if (response.data) {
                const data = response.data;
                if(data.data){
                    const empty={
                        roleId:"",
                        description:"",
                        roleNameCN:"",
                        roleName:""
                    }
                    self.roles=[empty].concat(data.data);
                }
              }
          });
    }
}
const roleData = new RoleData()
export default roleData;