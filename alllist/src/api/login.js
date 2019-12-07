import request from "@/untils/request.js"

export const Verification=(data)=>request.post('/tologin',data)