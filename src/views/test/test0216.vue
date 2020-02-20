<template>
  <div class="test-page pl-5">
    <h1>This is an test0216 page</h1>
    <p>学习使用防抖节流知识</p>
    <section class="test-section" id="mouseOver" @mouseover.passive="_mouseOver1"></section>
    <p>当前用户的IP：{{userIP}}</p>
  </div>
</template>

<script>
  import { _debounce ,  _getUserIP} from '@/utils'

  export default {
    data() {
      return {
        count: 0,
        userIP: ''
      }
    },
    mounted() {
      let that = this
      _getUserIP(function(ip) {
        console.log(ip)
        that.userIP = ip
      })
    },
    methods: {
      _mouseOver() {
        var mouseOver = document.getElementById('mouseOver')
        this.count ++
        mouseOver.innerHTML = this.count
      },

      _mouseOver1: _debounce (function() {
        // this.mouseOver()
        console.log('触发了')
        var mouseOver = document.getElementById('mouseOver')
        this.count ++
        mouseOver.innerHTML = this.count
      }, 1000, true),


    },
  }
</script>

<style lang="scss" scoped>
  .test-page {
    .test-section {
      height: 200px;
      margin-right: 5px;
      border: 1px solid;
    }
  }
</style>