import {requestWithOutAuth} from "./settings";

export const entitiesRequests = {
    getAll:  async ()=>{
        const {data} = await requestWithOutAuth.get('entities');
        return  data;
    }
}