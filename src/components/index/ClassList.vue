<template>
  <ul class="class-list">
    <li :key="item.id" class="list-item" v-for="item in classes">
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
</template>

<script>
export default {
  props: {
    classes: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
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
}

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
</style>
