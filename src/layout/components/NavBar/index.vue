<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>  
  </div>
</template>

<script>
  import Hamburger from '@/components/Hamburger'

  export default {
    name: 'NavBar',
    components: {
      Hamburger
    },
    data() {
      return {
        sidebar: {
          opened: false
        }
      }
    },
    methods: {
      toggleSideBar() {
        this.sidebar.opened = !this.sidebar.opened
        console.log('side:', this.sidebar.opened)
      }
    },
  }
</script>

<style lang="scss">
  .navbar {
    position: relative;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    text-align: center;
    background-color: $color-bg;

    a {
      font-weight: bold;
      color: $color-text-sub;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

    .hamburger-container {
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }
</style>