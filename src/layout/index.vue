<template>
  <div>
    <!-- sidebar -->
    <side-bar></side-bar>

    <!-- main-container -->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import { SideBar } from './components'

  export default {
    components: {
      SideBar
    }
  }
</script>

