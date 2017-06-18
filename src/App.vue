<template>
  <div id="app">
    <user-menu></user-menu>
  </div>
</template>

<script>
  import UserMenu from './components/UserMenu.vue'
  import UserHome from './components/UserHome.vue'

  export default {
    components: {
      UserMenu,
      UserHome
    },
    name: 'app'
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
