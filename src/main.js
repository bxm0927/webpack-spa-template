/*
 * APP Entry
 * @Author: xiaoming.bai
 * @Date: 2019-05-31 20:04:03
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-14 17:17:41
 */

import '@/assets/fonts/iconfont.css'
import '@/assets/stylesheets/common.scss'
import '@/assets/stylesheets/reset.scss'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  store,
  router,
})
