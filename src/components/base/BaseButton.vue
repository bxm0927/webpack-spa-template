<template>
  <button @click="click" class="base-button">
    <i class="iconfont icon-youjian"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '点击',
    },
  },
  methods: {
    click() {
      this.$emit('on-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  padding: 6px 16px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
}
</style>
