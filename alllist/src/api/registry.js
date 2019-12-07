import request from "@/untils/request.js"

export const  getIdentity=()=>request.get('/identity');
export const sendUserInfo=(data)=>request.post('/registry',data);
