module.exports=(app)=>{

    app.validator.addRule('phone',(rule,value)=>{
        let reg=/^1[35678]\d{9}$/
   if(!reg.test(value)){
       return '请输入正确的手机号'
   } 
    })
  

}