<template>
  <div class="demo pl-5">
    <h2>自定义基础组件展示:</h2>

    <div class="demo-color">
      <span>色值:</span>
      <el-color-picker class="demo-color-picker fr" v-model="theme"></el-color-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    components: {
      // HelloWorld
    },
    data() {
      return {
        theme: ''
      }
    },
    computed: {
      defalutTheme() {
        return this.$store.state.settings.theme
      }
    },
    watch: {
      defalutTheme: {
        handler(val) {
          this.theme = val
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
  .demo {
    .demo-color {
      width: 200px
    }
    /deep/ .demo-color-picker {
      height: 26px;
    }
    /deep/ .el-color-picker__trigger {
      width: 26px;
      height: 26px
    }
  }
</style>