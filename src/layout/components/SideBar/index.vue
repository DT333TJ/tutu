<template>
  <div class="sidebar-container">
    <!-- logo -->

    <!-- menu -->
    <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  // 引入样式变量对象数据 :export导出的
  import variables from '@/style/variables.scss'

  export default {
    name: 'SideBar',
    data() {
      return {
        activeMenu: '2'
      }
    },
    computed: {
      variables() {
        return variables
      },
      isCollapse() {
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    background-color: $menuBg;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden
  }  
</style>

<style lang="scss">
  .scrollbar-wrapper {
    overflow-x: hidden !important
  }
</style>