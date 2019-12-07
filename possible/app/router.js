module.exports=app=>{
    let {router,controller}=app;
    

    console.log('router',controller);
    router.get("/",controller.index.init);
    router.post("/registry",controller.user.index);
    router.get("/identity",controller.user.getIdntity);
    router.post("/tologin",controller.user.veriuser);
    router.get('/getuserinfo',controller.user.info)
  
   
}