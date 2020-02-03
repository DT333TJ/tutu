<template>
  <div class="navbar">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>  
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
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
  }
</style>