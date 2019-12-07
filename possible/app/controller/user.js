const Controller=require('egg').Controller;
const uid=require("uid");
const jwt=require("jsonwebtoken")//sign
module.exports=class  extends Controller{
    async  index(ctx){
        let {request}=ctx;

        // console.log(ctx.request.body);
        
       //通过验证 向数据库存储
       
       await this.app.mysql.insert('user',{
           ...request.body,
           id:uid(10)
       })
       ctx.body={
           code:1,
           msg:"注册成功"
       }

    }
    async getIdntity(){
        //查询表
        let data=await this.app.mysql.select('identi');
        console.log(data)
        this.ctx.body={
            msg:'success',
            code:1,
            data:[...data]
        }

    }
    async veriuser(ctx){
        let {request}=ctx;
        
        
        let {username,password} = request.body
        let data=await this.app.mysql.get('user',{
            username,
            password
        });
      
       
      
        if(data!=null){
            delete data.password
            ctx.body={
                code:1,
                msg:'登陆成功',
                data:{
                    token:jwt.sign({...data},this.app.config.keys,{
                        expiresIn:60
                    })
                }
            }

        }else{
            ctx.body={
                code:0,
                msg:'用户不存在'
            }
        }
      

    }
    async info(ctx){
        console.log(1);
        console.log(this.ctx.get('token'))
        let token=this.ctx.get('token');
        try{
           let userinfo= jwt.verify(token,this.app.config.keys);
           this.ctx.body=userinfo
           console.log(userinfo) 
        }catch(err){
            console.log(error.message)
            this.ctx.status=401;
            this.ctx.body={
                code:0,
                msg:'用户信息错误,可能信息被篡改'
            }
        }
       
       

    }
 
}
