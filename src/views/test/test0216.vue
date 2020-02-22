<template>
  <div class="test-page pl-5">
    <h1>This is an test0216 page</h1>
    <p>学习使用防抖节流知识</p>
    <el-input v-model="input" placeholder="请输入内容" @keyup.native="_input"></el-input><span>防抖结果:{{ inputResult }}</span>
    <section class="test-section" id="mouseOver" @mouseover="_mouseOver"></section>
    <el-button @click="_btnClick">多次点击节流</el-button><span>多次点击的次数:{{ btnCount }}</span>
    <p>当前用户的IP：{{userIP}}</p>
  </div>
</template>

<script>
  import { _debounce, _throttle,  _getUserIP} from '@/utils'

  export default {
    data() {
      return {
        count: 0,
        btnCount: 0,
        userIP: '',
        input: '',
        inputResult: ''
      }
    },
    mounted() {
      this._getIp()
    },
    methods: {
      /** 
       * 获取用户IP
      */
      _getIp() {
        let that = this
        _getUserIP(function(ip) {
          console.log(ip)
          that.userIP = ip
        })
      },

      /** 
       * 鼠标滑过事件，使用防抖函数
      */
      _mouseOver: _debounce(function() {
        console.log('触发了')
        var mouseOver = document.getElementById('mouseOver')
        this.count ++
        mouseOver.innerHTML = `防抖效果：${this.count}`
      }, 1000, true),

      /** 
       * input的输入事件
      */
      _input: _debounce(function() {
        console.log('input:', this.input)
        this.inputResult = this.input
      }, 1000, true),

     /** 
      * 高频率点击节流处理
     */
      _btnClick: _throttle(function() {
        this.btnCount ++
      }, 2000)
    },
  }
</script>

<style lang="scss" scoped>
  .test-page {
    .test-section {
      height: 200px;
      border: 1px solid
    }

    .el-input {
      width: 200px;
      margin-right: 10px
    }

    .el-button {
      border-color: aquamarine
    }

    .test-section, .el-button {
      margin-top: 15px;
      margin-right: 5px
    }
  }
</style>