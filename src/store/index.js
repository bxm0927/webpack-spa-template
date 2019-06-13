/*
 * Vuex
 * @Author: xiaoming.bai
 * @Date: 2019-06-01 18:22:20
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-13 19:34:46
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 'Hello Vuex!',
    classesData: null,
  },
  mutations: {
    setClassesData(state, payload) {
      state.classesData = payload
    },
  },
})

export default store
