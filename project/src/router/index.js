import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/Home/Home'
import Categray from 'pages/Categray/Categray'
import Shopcar from 'pages/Shopcar/Shopcar'
import My from 'pages/My/My'
import Theme from 'pages/Theme/Theme'
import Err from '@/components/common/Err'

Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {path:'/',redirect:"/home"},//redirect重定向
        {path:'/home',component: Home},
        {path:'/categray',component: Categray},
        {path:'/shopcar',component: Shopcar},
        {path:'/my',component: My},
        {name:'theme', path:'/theme/themeId',component: Theme},
        {path:'/notfind',component: Err},
        {path:'**',redirect:"/notfind"}
    ]
})

export default router