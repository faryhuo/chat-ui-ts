import { action, makeObservable, observable } from "mobx";

export interface Iloading {
    loading: boolean;
    setLoading:(loading:boolean)=>void;
}


class Loading {
    loading = false;

    constructor() {
        makeObservable(this, {
            loading: observable,
            setLoading: action

        })
    }

    setLoading(loading:boolean){
        this.loading=loading;
    }

    showLoading(){
        this.loading=true;
    }
    closeLoading(){
        this.loading=false;
    }
}
const loadingObj= new Loading();
export default loadingObj;