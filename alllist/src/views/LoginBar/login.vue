<template>
  <el-container>
      <el-form class="login">
          <div>
              <img src="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=31ae4c2cac611321b2816410a594ec94&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F9f5b6ac2d5628535ddc0f85898ef76c6a7ef63b5.jpg" />
          </div>
          <el-form-item label="用户名"  class="item">
              <el-input v-model="usermessage.username">

              </el-input>
          </el-form-item>
           <el-form-item  class="item" label="密码">
              <el-input v-model="usermessage.password"></el-input>
          </el-form-item>
         
          <el-form-item>
              <el-button @click="submit">登陆</el-button>

          </el-form-item>
          
      </el-form>
  </el-container>
</template>

<script>
import { getIdentity}  from "@/api/registry.js"
import {Verification} from "@/api/login.js"
export default {
    data(){
        return {
            usermessage:{
                username:'',
                password:'',
                identity:'',
                
            },
            options:[

            ]
        }
    },
    mounted(){
        getIdentity().then(res=>{
            console.log(res.data.data);
            this.options=res.data.data
        })
    },
    methods:{
        submit(){
            Verification(this.usermessage).then(res=>{
                console.log(res.data);
                if(res.data.code==1){
                    window.localStorage.setItem('token',res.data.data.token)
                    this.$router.push('/home')
                }else{
                    alert(res.data.msg)
                }
            })
            
        }
    }

}
</script>

<style>
html,body{
    background: #2e5f83;
   

}
.login{
     margin:  10px auto;
     
  
}
.item .el-form-item__label{ 
color: white;
}
</style>