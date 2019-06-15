<template>
  <section class="part chapter-wrapper" v-if="classChapterData && classChapterData.length">
    <h2 class="part-title">课程大纲</h2>

    <ul class="chapter-list">
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
</template>

<script>
export default {
  props: {
    classChapterData: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.chapter-wrapper {
  .chapter-list {
    line-height: 2;
  }
  .chapter-item {
    margin-top: 10px;
  }
  .subtitle-list {
    padding-left: 2em;
    background-color: #f5f5f5;
  }
}
</style>
