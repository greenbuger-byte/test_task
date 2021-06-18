import { requestWithOutAuth, errors } from "./settings";

export const likesRequests = {
    forUser: async ()=> {
        try{
            const {data} = await requestWithOutAuth.get(`likes?userId=1`);
            return data;
        }catch (err){
            errors(err);
        }
    },
    setLike: async (apartmentId)=>{
        try{
            const {data} = await requestWithOutAuth.post('likes', {userId:1, apartmentId, status: true})
            return data;
        }catch(err){
            errors(err);
        }
    },
    updateLike: async (id, status)=>{
        try{
            const {data} = await requestWithOutAuth.patch(`likes/${id}`, {status});
            return data;
        }catch(err){
            errors(err);
        }
    }
}