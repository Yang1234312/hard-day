<template>
<div class="search-for">
  <div class="search-title">
        <input @change="setchange(shopdata)" v-model="shopdata" />
  </div>
  <div >
    <p v-for="(item,index) in datafor.data" :key="index">
      {{item.name}}

    </p>

  </div>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
    name:'search-for',
    data(){
      return{
        shopdata:'',
        datafor:[]
      }

    },
    methods:{
      setchange(data){
        console.log(data)
        axios.post('/api/get/searchdata',{
        "shopdata":data
        }).then(res=>{
          console.log(res);
          this.datafor=res
          
        })

      }
      
    }

}
</script>

<style>
.search-title{
  width: 100%;
  height: 50px; 
  text-align: center;
  
}
.search-title input{
  border: 1px solid #ccc;
  width: 60%;
  height: 30px;
  outline: none;
  border-radius: 10px;

}

</style>