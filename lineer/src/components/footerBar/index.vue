<template>
  <div class="footer-title">
      <router-link to="/main" >主页</router-link>
      <router-link  to="/type">分类</router-link>
      <router-link to="/search">搜索</router-link>

  </div>
</template>

<script>
import { relative } from 'path'
export default {
    data(){
        return{

            
        }
    }

}
</script>

<style>
.footer-title{
    width: 100%;
    height: 40px;
    display: flex;
   
}
a{
    flex: 1;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    color: black;
}

</style>