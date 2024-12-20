import { makeObservable, observable, action } from "mobx";
import axios from 'axios';
import config from './AppConfig';
import Fuse from 'fuse.js';
import userProflie from "./UserProfile";
import i18n from "../utils/i18n";
import { IChatAPIConfig } from "./ChatConfig";

export interface IRoleData {
    currentRoles: IRole[];
    allRoles: IRole[];
    getContentByRole: (roleId: number) => string;
    checkRoleIsExisting: (name: string) => boolean;
    getToken: () => Promise<string>;
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
    isGlobal: boolean;
}

const FAVORITE_TAG = "favorite";
const ALL_TAG = "all";

class RoleData implements IRoleData {
    roles: IRole[] = [];
    currentTag = FAVORITE_TAG;
    filterBy = "";
    loading = true;

    constructor() {
        makeObservable(this, {
            roles: observable,
            loading: observable,
            filterBy: observable,
            currentTag: observable,
            search: action,
            setRoles: action,
            setRole: action,
            fetchData: action.bound
        });
        this.fetchData();
    }

    setRoles(roles: IRole[]) {
        this.roles = roles;
    }

    setRole<K extends keyof IRole>(index: number, key: K, value: IRole[K]) {
        if (this.roles[index]) {
            this.roles[index][key] = value;
        }
    }

    triggerFavorite(item: IRole) {
        item.favorite = !item.favorite;
        this.roles = [...this.roles]; // Trigger mobx update
        
        if (userProflie.token) {
            this.triggerFavorateAPI(item.roleId, item.favorite, userProflie.token);
        }
    }

    search(name: string) {
        this.filterBy = name;
        this.currentTag = ALL_TAG;
    }

    changeTag(tag: string) {
        this.currentTag = tag;
    }

    get allRoles() {
        return this.roles.filter(role => this.getRoleName(role) && this.getDescription(role));
    }

    get currentRoles() {
        const filteredRoles = this.roles.filter(role => {
            const hasName = this.getRoleName(role);
            const hasDesc = this.getDescription(role);
            const hasMatchingTag = this.hasMatchingTag(role);

            return hasName && hasDesc && (hasMatchingTag || this.currentTag === ALL_TAG);
        });

        if (!this.filterBy) {
            return filteredRoles;
        }

        const fuseOptions = {
            keys: [
                { name: 'roleNameCN', weight: 1 },
                { name: 'roleName', weight: 1 },
                { name: 'description', weight: 0.5 },
                { name: 'descriptionCN', weight: 0.5 }
            ],
            includeMatches: true,
            threshold: 0.3 // Add threshold for better matching
        };

        const fuse = new Fuse(filteredRoles, fuseOptions);
        return fuse.search(this.filterBy).map(result => result.item);
    }

    getRoleName(role: IRole) {
        return role.roleName;
    }

    getDescription(role: IRole) {
        return role.description;
    }

    hasMatchingTag(role: IRole) {
        if (this.currentTag === FAVORITE_TAG) {
            return role.favorite === true;
        }
        return role.tags?.includes(this.currentTag);
    }

    getCurrentTags(all: boolean) {
        const tags = new Set([ALL_TAG, FAVORITE_TAG]);

        this.roles.forEach(role => {
            if (role.roleName && role.description && role.tags?.length) {
                if (!all && role.isGlobal) {
                    return;
                }
                role.tags.forEach(tag => tags.add(tag));
            }
        });

        return Array.from(tags);
    }
    

    checkRoleIsExisting(name: string) {
        return this.currentRoles.some(role => role.roleName === name);
    }

    getContentByRole(roleId: number) {
        return this.roles.find(role => role.roleId === roleId)?.description || "";
    }

    private async makeRequest<T>(config: {
        method: string;
        url: string;
        headers?: Record<string, string>;
        data?: any;
    }): Promise<T> {
        try {
            const response = await axios(config);
            const data = response.data;
            
            if (data.message) {
                throw new Error(i18n.t(`api.${data.message}`));
            }
            
            return data.data;
        } catch (error) {
            console.error(`API request failed: ${config.url}`, error);
            throw error;
        }
    }

    async fetchData() {
        try {
            const response = await this.makeRequest<IRole[]>({
                method: "get",
                url: `${config.api.chatRoleUrl}?language=${config.textLanguage}&uuid=${Date.now()}`,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'token': localStorage['user-token'],
                }
            });

            if (response) {
                this.setRoles(response);
                await this.fetchFavorite();
            }
        } catch (error) {
            console.error('Failed to fetch roles:', error);
        } finally {
            this.loading = false;
        }
    }

    async fetchFavorite() {
        const token = userProflie.token;
        if (!token) {
            this.loading = false;
            return;
        }

        try {
            const favoriteIds = await this.makeRequest<number[]>({
                method: "get",
                url: `${config.api.favoriteRoleUrl}?uuid=${Date.now()}`,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'token': token
                }
            });

            this.roles.forEach((item, index) => {
                this.setRole(index, "favorite", favoriteIds.includes(item.roleId));
            });
        } finally {
            this.loading = false;
        }
    }

    async triggerFavorateAPI(roleId: number, type: boolean, token: string) {
        return this.makeRequest({
            method: type ? "post" : "delete",
            url: `${config.api.favoriteRoleUrl}/${roleId}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "token": token
            }
        });
    }

    async saveRole(role: IRole, token: string) {
        return this.makeRequest({
            method: "post",
            url: config.api.chatRoleUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "token": userProflie.token
            },
            data: JSON.stringify({ ...role, token })
        });
    }

    async addRole(role: IRole, token: string) {
        await this.saveRole(role, token);
        await this.fetchData();
    }

    getToken(): Promise<string> {
        return this.makeRequest({
            method: "get",
            url: `${config.api.chatRoleUrl}/token`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
    }

    async deleteRole(roleId: number) {
        const response = await this.makeRequest<boolean>({
            method: "delete",
            url: `${config.api.chatRoleUrl}/${roleId}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "token": userProflie.token
            }
        });

        if (response) {
            await this.fetchData();
            return true;
        }
        throw new Error('Delete failed');
    }
}

const roleData = new RoleData();
export default roleData;