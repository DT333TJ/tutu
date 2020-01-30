<template>
  <div class="about">
    <h1>This is an about page</h1>

    <span class="about-title">当前所有的练习页面</span>
    <el-select v-model="selectValue" @change="_selectChange">
      <el-option
        v-for="item in options"
        :key="item.code"
        :label="item.page"
        :value="item.code">
    </el-option>
    </el-select>
  </div>
</template>

<script>
  import { testPageConfig } from '../config/setting'

  export default {
    data() {
      return {
        selectValue: '',
        options: []
      }
    },
    created() {
      this.options = testPageConfig
    },
    methods: {
      _selectChange: function (value) {
        if (value) {
          console.log(value)
          this.selectValue = value
          this.$router.push(`/test${value}`)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .about-title {
    color: $color-text-sub
  }
</style>
