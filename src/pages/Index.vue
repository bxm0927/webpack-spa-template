<template>
  <main class="page-list" v-if="classesData">
    <div class="banner">
      <h1 class="title">我的课程笔记</h1>
      <p class="subtitle">你的指尖，有改变世界的力量</p>
    </div>

    <ul class="class-list">
      <li :key="item.id" class="list-item" v-for="item in classesData.data">
        <router-link :to="'/detail/' + item.id">
          <div class="picture">
            <img :alt="item.title" :src="item.image" class="image">
          </div>

          <div class="overview">
            <h2 class="title ellipsis">{{ item.title }}</h2>
            <h3 class="subtitle">{{ item.subtitle }}</h3>

            <p class="time">
              <span class="timespan">{{ item.timespan }}</span>

              <span class="hasnote fr" v-if="+item.hasnote">
                <i class="iconfont icon-yumaoqiu"></i>
                有笔记
              </span>
              <span class="hasnote fr" v-else>
                <i class="iconfont icon-lvyou1"></i>
                无笔记
              </span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { GET_CLASSES } from '@/assets/javascripts/api'

export default {
  name: 'App',
  computed: {
    ...mapState(['classesData']),
  },
  created() {
    this.loadClassesData()
  },
  methods: {
    async loadClassesData() {
      const { data } = await axios.get(GET_CLASSES)
      this.$store.commit('setClassesData', data)
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

.class-list {
  margin-top: 20px;
  padding: 0 24px;
}

.list-item {
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 4px;
  width: 100%;
  border: 0.5px solid #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  .picture {
    position: relative;
    font-size: 0;
    .image {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
  }
  .overview {
    padding: 10px;
    .title {
      color: #333;
      font-weight: bold;
      font-size: 18px;
    }
    .subtitle {
      color: #333;
      font-weight: normal;
      font-size: 12px;
    }
    .time {
      margin-top: 6px;
      color: #8a8a8a;
    }
  }
}
</style>
