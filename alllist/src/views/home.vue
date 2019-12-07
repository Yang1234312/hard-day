<template>
  
 <el-container>

  <el-container>
    <el-aside width="200px">
       <img  src="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=31ae4c2cac611321b2816410a594ec94&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F9f5b6ac2d5628535ddc0f85898ef76c6a7ef63b5.jpg"/>
    </el-aside>
    <el-main>  <el-header>
     
      
      </el-header></el-main>
  </el-container>
</el-container>













</template>

<script>
import {getUserInfo} from "@/api/info.js"
export default {
  data(){
    return {

    }
  },
  created(){
    getUserInfo().then(res=>{
      console.log(res)
    }).catch(error=>{
      this.$router.replace("/login")
    })
  }

}
</script>

<style>
.el-container{
  width: 100%;
  height: 100%;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #2e5f83;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>