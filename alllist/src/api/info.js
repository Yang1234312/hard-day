import request from "@/untils/request.js"
export  const getUserInfo=()=>request.get('/getuserinfo',{
    headers:{
        token:window.localStorage.getItem('token')
}
})