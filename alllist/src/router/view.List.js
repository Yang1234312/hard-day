import router from "./index.js"
 export const viewList =[
    {
        path:"/home/submit",
        meta:{
            title:"提交成绩",
            isAside:true,
            name:'submit'
        },
        component:()=>import("../views/Submit/index.vue")
       
    },
    {
        path:"/home/show",
        meta:{
            title:"查看成绩",
            isAside:true,
            name:'show' 

        },
        component:()=>import("../views/ShowBar/index.vue")
       
    }
]
// export const findViewList=(arr)=>{
//     //arr该用户所拥有的用户权限
    
//    router.addRoutes(viewList.filter(item=>{
//        let res=arr.find(val=>val.name===item.meta.name);
//        return res&&item.meta.isAside;
//    }))
// }