<template>
  <div id="app">
    <user-menu></user-menu>
  </div>
</template>

<script>
  import UserMenu from './components/UserMenu.vue'

  export default {
    components: {
      UserMenu
    },
    name: 'app'
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
