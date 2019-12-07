<template>
  <el-container>
      <el-form>
          <el-form-item label="用户名">
              <el-input v-model="usermessage.username">

              </el-input>
          </el-form-item>
           <el-form-item label="密码">
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

</style>