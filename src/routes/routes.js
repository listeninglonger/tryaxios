import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Message from "../pages/children/Message.vue"
import News from "../pages/children/News.vue"
import User from "../pages/User.vue"
import detail from "../pages/children/detail.vue"
import notFound from "../pages/NotFound.vue"
import md from "../pages/children/MessageDetail.vue"
export default[
    {
        path:"/home",
        component:Home,
        children:[
            {path:"news",component:News},
            {
                path:"message",
                component:Message,
                children:[
                    {path:":newsid",
                    component:md,
                    props:true
                }
                ]
            },
            {path:"",redirect:"news"},
           
            
        ]

    },
    {path:"/about",component:About},
    {
        path:"/user",
        component:User,
        children:[
            //布尔值形式
            // {path:":userid",component:detail,props:true}
            // 对象形式，传递的是固定值
           /*  {
                path:":userid",
                component:detail,
                props:{
                    userid:2,
                    name:"nicai"
                }

            } */
            //回调函数形式
            {path:":userid",
            name:"UD",
            component:detail,
            props:(route)=>({
                userid:route.params.userid
            })}

        ]
    },
    {path:"/",redirect:"/home"},
    {path:"*",component:notFound}
]
