/*
 * Vuex
 * @Author: xiaoming.bai
 * @Date: 2019-06-01 18:22:20
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-14 17:41:27
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 'Hello Vuex!',

    classesData: null,
    classChapterData: null,
    classNoteData: null,
  },
  mutations: {
    setClassesData(state, payload) {
      state.classesData = payload
    },
    setClassChapterData(state, payload) {
      state.classChapterData = payload
    },
    setClassNoteData(state, payload) {
      state.classNoteData = payload
    },
  },
})

export default store
