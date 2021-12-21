//引入vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
//第三方库需要use一下才能用

import personalCenter from '../components/PersonalCenter.vue'
import home from '../views/Home.vue'

//定义routes路由的集合，数组类型
const routes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件

  {
    path: '/personal',
    name: 'personal',
    component: personalCenter
  },
  {
    path: '/',
    name: 'home',
    component: home
  }
]
//实例化VueRouter并将routes添加进去
const router = createRouter({
  history: createWebHashHistory(),
  //ES6简写，等于routes：routes
  routes: routes
})

export default router
