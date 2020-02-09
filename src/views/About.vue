<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>{{ testMix2 }}</p>

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
  import { mixinstest } from '../mixins/index' 

  export default {
    mixins: [mixinstest],
    data() {
      return {
        selectValue: '',
        options: []
      }
    },
    created() {
      console.log('这是组件的created')
      this.options = testPageConfig
      this.testMix = ''
      this.mixinsFun()
    },
    methods: {
      _selectChange: function (value) {
        if (value) {
          console.log(value)
          this.selectValue = value
          this.$router.push(`/test/test${value}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    margin-left: 20px;

    .about-title {
      color: $color-text-sub;
      margin-right: 10px
    }

    /deep/ .el-input__inner, /deep/ .el-select__caret {
      color: $color-text-sub
    }
  }
</style>
