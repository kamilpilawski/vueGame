<template>
  <div class="text-sm-left">
    <h1>Armia</h1>
    <h4>Działania na armii</h4>
  </div>

</template>


<script>
  export default {
    name: 'userInfo',
    data () {
      return {
        interval: {},
        value: 0,
        red: 50,
        blue: 60,
        purp: 30
      }
    }
//    beforeDestroy () {
//      clearInterval(this.interval)
//    },
//    mounted () {
//      this.interval = setInterval(() => {
//        if (this.value === 100) {
//          return (this.value = 0)
//        }
//        this.value += 10
//      }, 1000)
//    }

  }
</script>

<style lang="stylus" scoped>
  div
    text-align: center

  .progress-circular
    margin: 1rem

  .inf
    color: lightgrey

</style>
