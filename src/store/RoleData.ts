import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import config from './AppConfig';
import Fuse from 'fuse.js';
import userProflie from "./UserProfile";
import i18n from "../utils/i18n";
import { IChatAPIConfig } from "./ChatConfig";
//import prompts from '../data/prompt';
export interface IRoleData {
    currentRoles: IRole[];
    allRoles: IRole[];
    getContentByRole: (role: number) => string;
    checkRoleIsExisting: (name: string) => boolean;
    getToken: () => Promise<any>;
}
export interface IRole {
    roleId: number;
    description: string;
    roleName: string;
    tags: string[];
    token?: string;
    favorite?: boolean;
    setting?: IChatAPIConfig;
    isCustomSetting: boolean;
    language: string;
}

const favorite = "favorite";

class RoleData implements IRoleData {
    roles: IRole[] = [];
    currentTag = favorite;


    constructor() {
        makeObservable(this, {
            roles: observable,
            filterBy: observable,
            currentTag: observable,
            search: action,
            fetchData: action.bound
        })
        //this.loadRolesInLocal();
        this.fetchData();
    }

    filterBy = "";

    triggerFavorite(item: IRole) {
        item.favorite = !!!item.favorite;
        this.roles.push(item);
        this.roles.pop();
        const self = this;
        if (userProflie.token) {
            self.triggerFavorateAPI(item.roleId, item.favorite, userProflie.token);
        }
    }


    search(name: string) {
        this.filterBy = name;
        this.currentTag = "all";
    }


    changeTag(tag: string) {
        this.currentTag = tag;
    }

    get allRoles() {
        const filteredRoles = this.roles.filter((role) => {
            const roleName = this.getRoleName(role);
            const description = this.getDescription(role);
            return roleName && description
        });

        return filteredRoles;
    }

    get currentRoles() {
        const filteredRoles = this.roles.filter((role) => {
            const roleName = this.getRoleName(role);
            const description = this.getDescription(role);
            const hasMatchingTag = this.hasMatchingTag(role);

            return roleName && description && (hasMatchingTag || this.currentTag === 'all');
        });
        if (this.filterBy) {
            const options = {
                keys: [{ name: 'roleNameCN', weight: 1 }, { name: 'roleName', weight: 1 }
                    , { name: 'description', weight: 0.5 }, { name: 'descriptionCN', weight: 0.5 }],
                includeMatches: true
            } // 搜索配置，可以配置多个查找字段
            const fuse = new Fuse(filteredRoles, options);
            const result = fuse.search(this.filterBy);
            const list: IRole[] = [];
            result.forEach((item) => {
                list.push(item.item);
            })
            return list;
        } else {
            return filteredRoles;
        }
    }

    getRoleName(role: IRole) {
        return role.roleName;
    }

    getDescription(role: IRole) {
        return role.description;
    }

    hasMatchingTag(role: IRole) {
        if (this.currentTag === favorite) {
            return role.favorite === true;
        }
        return role.tags && role.tags.includes(this.currentTag);
    }

    keywordMatchesFilter(role: IRole) {
        const filterBy = this.filterBy && this.filterBy.toLowerCase();

        return !filterBy || this.getRoleName(role).toLowerCase().includes(filterBy);
    }


    get currentTags() {
        const tags: string[] = [];
        tags.push("all");
        tags.push(favorite);
        this.roles.forEach((role) => {
            if (!!(role.roleName) && !!(role.description)) {
                if (role.tags && role.tags.length) {
                    role.tags.forEach(tag => {
                        if (!tags.includes(tag)) {
                            tags.push(tag);
                        }
                    })
                }
            }
        });
        return tags;
    }

    // loadRolesInLocal(){
    //     prompts.forEach((item)=>{
    //         let role:IRole={
    //             roleId:"",
    //             description:"",
    //             descriptionCN:"",
    //             roleNameCN:"",
    //             roleName:"",
    //             tags:[]
    //         };
    //         role.roleId=item.id+"";
    //         role.description=item.desc_en;
    //         role.descriptionCN=item.desc_cn;
    //         role.roleName=item.title_en;
    //         role.roleNameCN=item.title;
    //         role.tags=item.tags;
    //         this.roles.push(role);
    //     })
    // }

    checkRoleIsExisting(name: string) {
        let result = false;
        for (let i = 0; i < this.currentRoles.length; i++) {
            const currentRoleName = this.currentRoles[i].roleName;
            if (name === currentRoleName) {
                result = true;
                break;
            }
        }
        return result;
    }


    getContentByRole(role: number) {
        for (let i = 0; i < this.roles.length; i++) {
            if (this.roles[i].roleId === role) {
                return this.roles[i]?.description;
            }
        }
        return "";
    }

    fetchData() {
        axios({
            method: "get",
            url: config.api.chatRoleUrl + `?language=${config.textLanguage}&uuid=${new Date().getTime()}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }
        ).then((response) => {
            if (response.data) {
                const data = response.data;
                if (data.data) {
                    this.roles = data.data;
                    this.fetchFavorite();
                }
            }
        });
    }


    fetchFavorite() {
        let token = userProflie.token;
        if (!token) {
            return;
        }
        axios({
            method: "get",
            url: config.api.favoriteRoleUrl + "?uuid=" + new Date().getTime(),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': token
            }
        }).then((response) => {
            if (response.data) {
                const data = response.data;
                if (data.data) {
                    const arr: number[] = data.data;
                    this.roles.forEach(item => {
                        item.favorite = arr.includes(item.roleId);
                    })
                }
            }
        });
    }

    triggerFavorateAPI(roleId: number, type: boolean, token: string) {
        return new Promise((resolve, reject) => {
            axios({
                method: type ? "post" : "delete",
                url: config.api.favoriteRoleUrl + "/" + roleId,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "token": token
                }
            }).then((response) => {
                const data = response.data;
                if (data.message) {
                    reject(data.message)
                    return;
                }
                if (data && data.data) {
                    resolve(data);
                } else {
                    reject(data);
                }
            })
        });
    }

    saveRole(role: IRole, token: string) {
        role.token = token;
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: config.api.chatRoleUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: JSON.stringify(role)
            }).then((response) => {
                const data = response.data;
                if (data.message) {
                    reject(i18n.t("api." + data.message));
                    return;
                }
                if (data && data.data) {
                    resolve(data);
                } else {
                    reject(data);
                }
            })
        });
    }



    addRole(role: IRole, token: string) {
        return this.saveRole(role, token).then(() => {
            this.fetchData();
        })
    }

    getToken() {
        return axios({
            method: "get",
            url: `${config.api.chatRoleUrl}/token`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
    }

    deleteRole(roleId: number) {
        return new Promise((resolve, reject) => {
            axios({
                method: "delete",
                url: `${config.api.chatRoleUrl}/${roleId}`,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            }).then((response) => {
                const data = response.data;
                if (data && data.data) {
                    this.fetchData();
                    resolve(true);
                } else {
                    reject(data);
                }
            })
        });
    }
}
const roleData = new RoleData()
export default roleData;