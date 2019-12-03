<template>
  <div  class="container">

      <div class="every-shops"   v-for="(item,index) in list" :key="index">
          <div class="setimg">
              <img :src="item.url" />

          </div>
          <div class="formessage">
              <p>{{item.name}}</p>
              <p>{{item.capacity}}</p>
              <p>{{item.pirce}}</p>
          </div>
          
 
      </div>
      
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        axios.get('/api/get/list').then(res=>{
            console.log(res)
            this.list=res.data
        })

    }

}
</script>

<style>

.every-shops{
    width: 30%;
    height: 200px;

    float: left;
    margin-left: 3%;
    margin-top: 10px;
}
.setimg{
    width: 100%;
    height: 130px;
}
.setimg img {
    width: 100%;
    height: 100%;
}


</style>