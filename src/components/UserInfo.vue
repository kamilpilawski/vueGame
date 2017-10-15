<template>
    <div class="text-sm-left container pa-0 container--fluid layout row wrap">

        <v-flex xs12 sm6 offset-sm3>
          <v-card img="https://vuetifyjs.com/static/doc-images/cards/girl.jpg" height="300px">
            <v-card-row actions class="white--text pl-3 pt-3 pb-3"></v-card-row>

            <v-card-row>
              <v-divider></v-divider>
              <v-card-row actions>
                <v-btn flat class="green--text darken-1">View Email</v-btn>
              </v-card-row>
            </v-card-row>

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
