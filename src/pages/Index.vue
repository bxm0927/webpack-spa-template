<template>
  <main class="page-list" v-if="classesData">
    <div class="banner">
      <h1 class="title">我的课程笔记</h1>
      <p class="subtitle">你的指尖，有改变世界的力量</p>
    </div>

    <ClassList :classes="classesData.data"/>

    <div class="pagination">
      <van-button @click="prevPage" class="next-page" round type="primary">上一页</van-button>
      <span>（{{ classesData.curPage }} / {{ classesData.totalCount }}）</span>
      <van-button @click="nextPage" class="next-page" round type="primary">下一页</van-button>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Button } from 'vant'
import { mapState } from 'vuex'
import ClassList from '@/components/index/ClassList'
import { GET_CLASSES } from '@/assets/javascripts/api'

Vue.use(Button)

export default {
  name: 'App',
  components: {
    ClassList,
  },
  data() {
    return {
      pageIndex: 1,
    }
  },
  computed: {
    ...mapState(['classesData', 'curPage']),
  },
  created() {
    this.loadClassesData()
  },
  methods: {
    async loadClassesData() {
      const { data } = await axios.get(GET_CLASSES, {
        params: { curPage: this.curPage },
      })

      this.$store.commit('setClassesData', data)
    },
    async prevPage() {
      const nextPage = this.curPage - 1
      if (nextPage < 1) return

      this.loadPageData(nextPage)
    },
    async nextPage() {
      const nextPage = this.curPage + 1
      if (nextPage > this.classesData.totalCount) return

      this.loadPageData(nextPage)
    },
    async loadPageData(curPage) {
      const { data } = await axios.get(GET_CLASSES, {
        params: { curPage },
      })

      console.info('data: ', data)

      this.$store.commit('setCurPage', curPage)
      this.$store.commit('setClassesData', data)

      document.documentElement.scrollTop = document.body.scrollTop = 0
    },
  },
}
</script>

<style lang="scss" scoped>
.page-list {
  background-color: #f9f9f9;
}

.banner {
  padding: 20px;
  background-color: #f2f2f2;
}

.pagination {
  display: flex;
  align-items: center;
}

.next-page {
  display: inline-block;
  margin: 10px auto;
}
</style>
