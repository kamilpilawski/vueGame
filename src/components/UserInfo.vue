<template>
  <div class="text-sm-left">
    <span>
    <v-progress-circular :value="blue" class="primary--text"><span class="inf">{{blue}}</span></v-progress-circular>

    <br>

    <v-progress-circular :value="red" class="red--text"><span class="inf">{{red}}</span></v-progress-circular>

    <br>

    <v-progress-circular :value="purp" class="purple--text"><span class="inf">{{purp}}</span></v-progress-circular>
    </span>

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
