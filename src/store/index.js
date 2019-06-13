/*
 * Vuex
 * @Author: xiaoming.bai
 * @Date: 2019-06-01 18:22:20
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-01 18:28:06
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})

export default store
