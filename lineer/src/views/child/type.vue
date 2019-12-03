<template>
  <div class="type-title">
        <div class="type-left">
            <p v-for="(item,index) in typelist" :key="index" @click="btnclick(index)">
                {{item.name}}
            </p>

        </div>
        <div class="type-right" >
            <div   v-for="(item,index) in typedata.data" :key="index" class="every"> 
                <div class="setimgs">
                    <img :src="item.url" />


                </div>
                  <p> {{item.name}}</p>
                   

            </div>

        </div>
  </div>
</template>

<script>
import  axios from 'axios'
export default {
    name:"type-title",
    data(){
        return{
            typelist:[

                {
                    name:"京东自营产品",
                    id:0
                },{
                    name:"精品商城",
                    id:1,
                },{
                    name:'优质食品',
                    id:2,
                },{
                    name:'任天堂天下第一',
                    id:3
                },{
                    name:"索尼大法好",
                    id:4
                }
            ],
            typedata:[]
        }
    },
    methods:{
        btnclick(index){
            console.log(index);
            axios.post('/api/get/typelist',{
                "name":index
            }).then(res=>{
                console.log(res)
                this.typedata=res
            })
        }

    },
    mounted(){

         axios.post('/api/get/typelist',{
                "name":0
            }).then(res=>{
                console.log(res)
                this.typedata=res
            })
    }
    

}
</script>

<style>
.type-title{
    width: 100%;
    height: auto;
    display: flex;
}

.type-left{
    width: 30%;
    height: 500px;

  
    display: flex;
    flex-direction: column
}
.type-left p{
    flex: 1;
    text-align: center;
    line-height: 100px;
}
.type-right{
    
    width: 62%;
    height: 700px;
    margin-left: 3%;
   
 
}
.every{
    width: 100%;
    height: 300px;
   
    text-align: center;
}

.setimgs{
    width: 100%;
    height: 200px;
}
.setimgs img{
    width: 100%;
    height: 100%;
}
</style>