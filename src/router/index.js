/*
 * Vue Router
 * @Author: xiaoming.bai
 * @Date: 2019-06-01 18:22:20
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-14 18:50:50
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/Index'
import Detail from '@/pages/Detail'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/detail/:id(\\d+)',
      name: 'detail',
      component: Detail,
    },
  ],
})

export default router
