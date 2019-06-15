/*
 * Vuex
 * @Author: xiaoming.bai
 * @Date: 2019-06-01 18:22:20
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-15 14:51:15
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 'Hello Vuex!',

    curPage: 1,
    classesData: null,
    classChapterData: null,
    classNoteData: null,
  },
  mutations: {
    setCurPage(state, payload) {
      state.curPage = payload
    },
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
