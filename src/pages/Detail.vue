<template>
  <main class="page-detail">
    <header class="header">
      <span @click="$router.go(-1)" class="back">&lt;</span>
      <span class="title">课程详情</span>
      <router-link class="home" to="/">首页</router-link>
    </header>

    <ChapterList :class-chapter-data="classChapterData"/>

    <NoteList :class-note-data="classNoteData"/>
  </main>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import NoteList from '@/components/detail/NoteList'
import ChapterList from '@/components/detail/ChapterList'
import { GET_CLASS_CHAPTER, GET_CLASS_NOTE } from '@/assets/javascripts/api'

export default {
  components: {
    ChapterList,
    NoteList,
  },
  data() {
    return {
      id: '',
    }
  },
  computed: {
    ...mapState(['classChapterData', 'classNoteData']),
  },
  created() {
    this.parseParams()
    this.loadData()
  },
  methods: {
    parseParams() {
      const { id } = this.$route.params
      this.id = id
    },
    async loadData() {
      const data = await axios.all([
        axios.get(GET_CLASS_CHAPTER, { params: { cid: this.id } }),
        axios.get(GET_CLASS_NOTE, { params: { cid: this.id } }),
      ])

      this.$store.commit('setClassChapterData', data[0].data)
      this.$store.commit('setClassNoteData', data[1].data)
    },
  },
}
</script>

<style lang="scss" >
.part {
  margin: 20px;
  padding: 14px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
}

.part-title {
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: #86ff00;
  border-radius: 20px;
}
</style>

<style lang="scss" scoped>
.page-detail {
  background-color: #f8fafc;
}

.header {
  display: flex;
  justify-content: space-between;

  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.1);
  .title {
    font-weight: bold;
  }
}
</style>
