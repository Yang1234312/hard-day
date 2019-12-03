import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexBar from "../views/child/home.vue"
import SearchBar from "../views/child/search.vue"
import TypeBar from "../views/child/type.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/main'

  },
  {
    path:'/main',
    component:IndexBar

  },{
    path:'/type',
    component:TypeBar

  },{
    path:'/search',
    component:SearchBar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
