<template>
  <div class="example">
    <div class="banner">
      <img alt="banner" src="@/assets/images/banner.png">
    </div>

    <h2>{{ msg }}</h2>
    <h2>fetchData: {{ fetchMsg }}</h2>
    <h2>Vuex state: {{ count }}</h2>

    <BaseButton @on-click="onClick" text="发送"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseButton from '@/components/BaseButton'
import { getData } from '@/assets/javascripts/util'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello webpack with Vue!',
      fetchMsg: '',
    }
  },
  computed: {
    ...mapState(['count']),
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const data = await getData()
      this.fetchMsg = data
    },
    onClick() {
      this.$store.commit('increment')
    },
  },
  components: {
    BaseButton,
  },
}
</script>

<style lang="scss" scoped>
.example {
  .banner {
    width: 80%;
    img {
      width: 100%;
    }
  }
  h1 {
    color: red;
  }
}
</style>
