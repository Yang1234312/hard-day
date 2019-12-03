const express=require("express");
const bodyParser = require('body-parser');
let shopdata=require("./data/data.json");
const path=require('path')
const fs=require("fs");
const getData=(path)=>new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
        if(err){
            reject(err)
            return 
        }else{
            resolve(JSON.parse(data.toString())
                )
        }
    })
})




 
let app=express()
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





app.get('/get/list', async (req,res)=>{
    let data=await getData("./data/data.json")
    res.send(data)
})
app.post('/get/typelist',(req,res)=>{
    let arr=[]
 console.log(req.body.name);
 shopdata.map((item,index)=>{
     if(item.typeof==req.body.name){
        
         console.log("dsad")
        
         arr.push(item);
     }
 })
 res.send(arr);

})
app.post('/get/searchdata',async (req,res)=>{
    let data=await getData("./data/data.json")
    console.log(req.body.shopdata);
    let listarr=[]
    listarr=data.filter(item=>{
       
      return item.name.includes(req.body.shopdata)||item.capacity.includes(req.body.shopdata)
       
    })
   
    res.send(listarr)

})
app.listen(8888,function(){
    console.log('port:8888')
})