/*
 * APP Entry
 * @Author: xiaoming.bai
 * @Date: 2019-05-31 20:04:03
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-13 16:05:36
 */

import Vue from 'vue'
import App from './App.vue'
import store from './store' // Vuex
// import routers from './router' // Vue Router

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  store,
})
