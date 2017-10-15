<template>
    <div class="text-sm-left container pa-0 container--fluid layout row wrap">

        <v-flex xs12 sm6 offset-sm3>
          <v-card img="https://vuetifyjs.com/static/doc-images/cards/girl.jpg" height="300px">


          </v-card>
        </v-flex>

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
        blue: 10,
        purp: 30
      }
    }

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
