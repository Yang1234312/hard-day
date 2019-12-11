<template>
  <div>
    <el-form>
       <el-form-item label="理论成绩"  >
              <el-input type="number" v-model="readpass">

              </el-input>
          </el-form-item>
           <el-form-item  class="item" label="技能成绩">
              <el-input type="number" v-model="pircepass"></el-input>
          </el-form-item>
          <el-form-item label="选择时间"> 
            <el-date-picker 
            v-model="date"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
            :default-value="new Date()"
            >

            </el-date-picker>

          </el-form-item>
         
          <el-form-item>
              <el-button  @click="submitExam()">提交</el-button>

          </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {submitExam}  from "../../api/info.js"
export default {
  data(){
    return{
      date:new Date().toLocaleDateString(),
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
         
        },
        readpass:null,
        pircepass:null
    }
  },
  methods:{

submitExam(){
  let date=new Date(this.date).toLocaleDateString()
  console.log(date,this.readpass,this.pircepass);
  submitExam({
    date,
    textNum:this.readpass,
    codeNum:this.pircepass
  }).then(res=>{
    console.log(res);
  })
  

}
  }

}
</script>

<style>

</style>