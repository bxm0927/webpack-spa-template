/*
 * API requests
 * @Author: baixiaoming
 * @Date: 2019-01-15 14:51:27
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-18 17:15:59
 */

import axios from 'axios'

/**
 * 获取课程列表
 * @param {Number} curPage 页码
 */
export const getClasses = (curPage = 1) => {
  return axios.get('http://imoocnote.calfnote.com/inter/getClasses.php', {
    params: {
      curPage,
    },
  })
}

/**
 * 获取课程大纲
 * @param {String} cid 课程id
 */
export const getClassChapter = cid => {
  return axios.get('http://imoocnote.calfnote.com/inter/getClassChapter.php', {
    params: {
      cid,
    },
  })
}

/**
 * 获取笔记内容
 * @param {String} cid 课程id
 */
export const getClassNote = cid => {
  return axios.get('http://imoocnote.calfnote.com/inter/getClassNote.php', {
    params: {
      cid,
    },
  })
}
