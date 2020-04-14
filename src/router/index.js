import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Map from '@/components/Map'
import Login from '@/components/Login'
import WarnManage from '@/components/WarnManage'
import RightFocast from '@/components/RightFocast'
import LiveWatch from '@/components/LiveWatch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: Map,
      redirect: '/warnManage',
      children:[
        {
          path:'/warnManage',
          component:WarnManage
        },
        {
          path:'/liveWatch',
          component:LiveWatch
        },
        {
          path:'/rightFocast',
          component:RightFocast
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
