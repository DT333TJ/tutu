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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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