<template>
  <main class="page-detail">
    <section class="chapter-wrapper">
      <h2>课程大纲</h2>

      <ul class="chapter-list" v-if="classChapterData && classChapterData.length">
        <li :key="item.id" class="chapter-item" v-for="(item, index) in classChapterData">
          <h3>{{ index + 1 }}. {{ item.title }}</h3>

          <ul class="subtitle-list">
            <li :key="sub.id" class="subtitle-item" v-for="(sub, subIndex) in item.subTitle">
              {{ index + 1 }}-{{ subIndex + 1}}.
              <a
                :href="`http://www.imooc.com/${sub.titletype}/${sub.mid}`"
              >{{ sub.title }}</a>
              <span class="time" v-if="sub.timespan">({{ sub.timespan }})</span>
              <span class="type" v-if="sub.titletype === 'code'">(编程)</span>
              <span class="type" v-if="sub.titletype === 'ceping'">(练习)</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="note-wrapper" v-if="classNoteData && classNoteData.length">
      <h2>课程笔记</h2>

      <ul class="note-list" v-if="classChapterData && classChapterData.length">
        <li :key="item.id" class="note-item" v-for="(item, index) in classNoteData">{{ index }}</li>
      </ul>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { GET_CLASS_CHAPTER, GET_CLASS_NOTE } from '@/assets/javascripts/api'

export default {
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

<style lang="scss" scoped>
.detail {
  color: red;
}
</style>
