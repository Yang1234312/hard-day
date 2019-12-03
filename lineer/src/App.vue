<template>
  <div class="app">

<HeaderBar/>
     
   <div class="main">
 <router-view />
  </div>    
    <Fotterindex />
    
  </div>
</template>

<script>
import  Fotterindex from './components/footerBar/index.vue'
import  HeaderBar from "./components/headerBar/index.vue"

export default {
  name:'app',
  components:{
   Fotterindex,
   HeaderBar

  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow:auto;
}



</style>
