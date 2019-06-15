<template>
  <section class="part note-wrapper" v-if="classNoteData && classNoteData.length">
    <h2 class="part-title">课程笔记</h2>

    <ul class="note-list">
      <li :key="item.id" class="note-item" v-for="item in classNoteData">
        <p class="notetime">{{ formatDate(item.notetime) }}</p>
        <div class="content" v-html="item.content"></div>
      </li>
    </ul>
  </section>
</template>

<script>
import { formatDate } from '@/assets/javascripts/utils'

export default {
  props: {
    classNoteData: {
      type: Array,
      require: true,
    },
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="scss" scoped>
.note-item {
  margin-top: 20px;
  .notetime {
    color: gray;
    font-size: 14px;
  }
  .content {
    margin-top: 6px;
    padding: 14px;
    background-color: #fff0f2;
    box-shadow: 2px 2px 2px #ffc9ce;
  }
}
</style>
