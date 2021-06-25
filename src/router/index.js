/*
 * @Author: stmy 
 * @Date: 2021-06-14 23:56:51 
 * @Last Modified by: stmy
 * @Last Modified time: 2021-06-26 01:11:05
 */
/*
 * @Author: stmy 
 * @Date: 2021-06-10 17:18:34 
 * @Last Modified by: stmy
 * @Last Modified time: 2021-06-14 23:53:50
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/* 按需引入 */
/* 首页 */
const index = r =>require.ensure([],()=> r(require('@/views/index')),'index')
/* 地图 */
const map = r =>require.ensure([],()=>r(require('@/views/map')),'map')
/* 发现 */
const explore = r =>require.ensure([],()=>r(require('@/views/explore')),'explore') 
/* 问题详情 */
const question = r =>require.ensure([],()=>r(require('@/views/question')),'question')
/* 文章分享 */
const p = r =>require.ensure([],()=>r(require('@/views/p')),'p')
/* 登录 */
const login = r =>require.ensure([],()=>r(require('@/views/login')),'login')
/* 注册 */
const register = r =>require.ensure([],()=>r(require('@/views/register')),'register')
/* 404 */
const error = r =>require.ensure([],()=>r(require('@/views/404')),'error')

/* header */
const header = r =>require.ensure([],()=>r(require('@/views/header')),'header')

/* 写攻略 */
const editplan = r =>require.ensure([],()=>r(require('@/views/editplan')),'editplan')

/* 攻略中心  */
const plancenter = r =>require.ensure([],()=>r(require('@/views/plancenter')),'plancenter')

const hot = r => require.ensure([],()=>r(require('@/views/index/child/hot')),'hot')
const recommond = r => require.ensure([],()=>r(require('@/views/index/child/recommond'),'recommond'))
const follow = r => require.ensure([],()=>r(require('@/views/index/child/follow'),'follow'))
const people = r =>  require.ensure([],()=>r(require('@/views/people'),'people'))
const search = r =>  require.ensure([],()=>r(require('@/views/search'),'search'))

/* people子路由 */
const dynamics = r => require.ensure([],()=>r(require('@/views/people/child/dynamics')))
const videos = r => require.ensure([],()=>r(require('@/views/people/child/videos')))
const plans = r => require.ensure([],()=>r(require('@/views/people/child/plans')))
const ideas = r => require.ensure([],()=>r(require('@/views/people/child/ideas')))
const collections = r => require.ensure([],()=>r(require('@/views/people/child/collections')))
const following = r => require.ensure([],()=>r(require('@/views/people/child/following')))
const edit = r => require.ensure([],()=>r(require('@/views/people/child/edit')))
Vue.use(VueRouter)

/* 导航子路由 */
export const navRoutes = [
  {
    path:'/',
    name:'index',
    component:index,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        name:recommond,
        component:recommond
      },
      {
        path:'hot',
        name:hot,
        component:hot
      },
      {
        path:'follow',
        name:follow,
        component:follow
      }
    ]
  },
  {
    path:'/map',
    name:'map',
    component:map,
    meta:{
      title:'地图'
    }
  },
  {
    path:'/explore',
    name:'explore',
    component:explore,
    meta:{
      title:'发现'
    }
  },
  {
    path:'/question',
    name:'question',
    component:question,
    meta:{
      title:'等你来说'
    }
  }
]

/* people子路由 */
export const profileRoutes = [
  {
    path:'',
    name:'index',
    component:dynamics,
    meta:{
      title:'动态'
    }
  },
  {
    path:'videos',
    name:'videos',
    component:videos,
    meta:{
      title:'视频'
    }
    
  },
  {
    path:'plans',
    name:'plans',
    component:plans,
    meta:{
      title:'攻略'
    }
  },
  {
    path:'ideas',
    name:'ideas',
    component:ideas,
    meta:{
      title:'想法'
    }
  },
  {
    path:'collections',
    name:'collections',
    component:collections,
    meta:{
      title:'收藏'
    }
  },
  {
    path:'following',
    name:'following',
    component:following,
    meta:{
      title:'关注'
    }
  }
]

const routes = [
  {
    path:'',
    name:'header',
    component:header,
    children:[
      ...navRoutes,
      {
        path:'/plancenter',
        name:"plancenter",
        component:plancenter
      },
      {
        path:'/editplan',
        name:'editplan',
        component:editplan,
        meta:{
          title:'写攻略',
          auth:true
        }
      },
      {
        path:'/people/edit',
        name:'edit',
        component:edit,
        meta:{
          title:'编辑',
          auth:true
        }
      },
      {
        path:'/people/:id',
        name:"people",
        component:people,
        meta:{
          title:'人'
        },
        children:[
          ...profileRoutes
        ]
      },
      {
        path:'/search',
        name:'search',
        component:search
      },
    ]
  },
  {
    path:'/p',
    name:'p',
    component:p,
  },
    {
      path:'/login',
    name:'login',
    component:login,
  },{
    path:'/register',
    name:'register',
    component:register
  },
  {
    path:'/error',
    name:'error',
    component:error
  },
  {
    path:'*',
    redirect:'/error'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
