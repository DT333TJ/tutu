<template>
  <div class="fill-height">
    <!-- sidebar -->
    <side-bar></side-bar>

    <!-- main-container -->
    <div class="main-container">
      <el-scrollbar wrap-class="scrollbar-wrapper" class="fill-height">
        <!-- navbar -->
        <nav-bar></nav-bar>

        <!-- app-main -->
        <app-main></app-main>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import { SideBar, NavBar, AppMain } from './components'

  export default {
    components: {
      SideBar,
      NavBar,
      AppMain
    }
  }
</script>

<style lang="scss" scoped>
  .main-container {
    height: 100%;
    margin-left: $sideBarWidth
  }
</style>