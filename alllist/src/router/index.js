import Vue from 'vue'
import VueRouter from 'vue-router'
import {viewList} from "./view.List.js"


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"

  },
  {
    path: '/home',
    beforeEnter(to, from, next){
    let token=window.localStorage.getItem('token');
    if(token&&token.split('.').length===3){
      next();
    }else{
      router.replace('/login')
    }
    },
    
    
    component: ()=>import("../views/HomeBar/home.vue"),
    children:[
      {
        path:'/home',
        redirect:"/home/main"
      },{
        path:'/home/main',
        component:()=>import("../views/HomeBar/child/MainBar/index.vue")
      },
      ...viewList

    ]
  },{
    path:'/login',
    
    component:()=>import("../views/LoginBar/login.vue")
  },{
    path:'/register',
   
    component:()=>import("../views/Register/register.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
