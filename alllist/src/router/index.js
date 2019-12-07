import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeBar from "../views/home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/register"

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
    
    
    component: ()=>import("../views/home.vue")
  },{
    path:'/login',
    
    component:()=>import("../views/login.vue")
  },{
    path:'/register',
   
    component:()=>import("../views/register.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
