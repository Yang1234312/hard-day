<template>
  <el-container>
      <el-form>
          <el-form-item label="手机号">
              <el-input v-model="usermessage.username">

              </el-input>
          </el-form-item>
           <el-form-item label="密码">
              <el-input v-model="usermessage.password"></el-input>
          </el-form-item>
           <el-form-item label="身份">
              <el-select placeholder="请选择你的身份" v-model="usermessage.identity">
                  <el-option v-for="item in  options" :key="item.id"   :value="item.id" :label="item.title">
                      {{item.title}}

                  </el-option>

              </el-select>
          </el-form-item>
          <el-form-item>
              <el-button @click="submit">登陆</el-button>

          </el-form-item>
          
      </el-form>
  </el-container>
</template>

<script>
import { getIdentity,Verification} from "@/api/registry.js"
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
                    this.$router.push('/home')
                }
            })
            
        }
    }

}
</script>

<style>

</style>