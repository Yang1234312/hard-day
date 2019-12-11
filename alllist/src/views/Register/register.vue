<template>
<el-container>
<el-form :model="userinfo" :rules="userRule" class="user"  ref="myform">
   
    <el-form-item label="姓名"  prop="username">
        <el-input v-model="userinfo.username">
            
        </el-input>
    </el-form-item>
     <el-form-item label="学号"  prop="usercode" v-if="userinfo.identity==='abc123'">
        <el-input v-model="userinfo.usercode">
            
        </el-input>
    </el-form-item>
     <el-form-item label="密码" prop="password">
        <el-input v-model="userinfo.password">
            
        </el-input>
    </el-form-item>
     <el-form-item label="身份" prop="identity">
        <el-select v-model="userinfo.identity" placeholder="请选择身份">
            <el-option v-for="item in options" :key="item.id"  :label="item.title"  :value="item.id" >
                {{item.title }}
            </el-option>
           
            
        </el-select>
    </el-form-item>
     <el-form-item >
         <el-button @click="submit">提交</el-button>
       
    </el-form-item>
    
</el-form>

</el-container>
</template>

<script>
import {getIdentity,sendUserInfo} from '@/api/registry.js'
export default {

    data(){
        return{
            userinfo:{
                username:'',
                usercode:'',
            password:'',
            identity:'' 
            },
            options:[
                
            ],
            userRule:{
                username:[
                    {
                        required:true,
                        message:'请输入姓名',
                        trgger:'change'

                    },
                ],
                usercode:[
                    {
                        required:true,
                        message:'请输入学号',
                        trgger:'change'

                    },

                ],
                password:[
                    {
                         required:true,
                        message:'请输入密码',
                        trgger:'change'

                    },{
                        min:6,
                        max:16,
                        message:"长度在6到16个字符",
                        trgger:'change'
                    }
                ],
                identity:[
                    {
                         required:true,
                        message:'请选择身份  ',
                        trgger:'change'
                    }

                ]

            }
           
        }
    },
    mounted(){
        window.aa=this;
        getIdentity().then(res=>{
            console.log(res.data.data);
            this.options=res.data.data
            this.userinfo.identity=this.options[2].id
        })

    },
    methods:{
        submit(){
           this.$refs['myform'].validate((res,msg)=>{
           if(res){
               //发起axios请求提交数据
               sendUserInfo(this.userinfo).then(res=>{
                   console.log(res);
               })
               this.$router.push('/login')
           }else{

           }

           })
        }

    }

}
</script>

<style>
.user{
    margin:  10px auto;
}
.setimg{
    width: 900px;
    height: 512px;
}
.setimg img{
    width: 100%;
    height: 100%;
}
</style>