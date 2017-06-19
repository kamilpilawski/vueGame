<template>
  <div class="text-sm-left">

    <div class="container pa-0 container--fluid">
      <div class="layout row wrap">


        <div class="flex xs6 sm6 md4 lg3">
          <v-card img="https://vuetifyjs.com/static/doc-images/cards/girl.jpg" height="300px">

            <v-card-row actions class="white--text pl-3 pt-3 pb-3">
              <v-progress-circular :size="65" :value="blue" class="primary--text"><span class="inf">{{blue}}</span>
              </v-progress-circular>
              <v-card-text class="text-xs-left">Nazwa zasobu</v-card-text>
            </v-card-row>

            <v-card-row>
              <v-divider></v-divider>
              <v-card-row actions>
                <v-btn flat class="green--text darken-1">View Email</v-btn>
              </v-card-row>
            </v-card-row>

          </v-card>
        </div>

        <v-card img="https://vuetifyjs.com/static/doc-images/cards/girl.jpg">
          <v-card-row class="green darken-1">
            <v-card-title>
              <span class="white--text">Marriot Rewards</span>
              <v-spacer></v-spacer>
              <div>
                <v-menu id="marriot" bottom left origin="top right">
                  <v-btn icon="icon" slot="activator" class="white--text">
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Never show rewards</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Remove Card</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                    <v-list-item>
                      <v-list-tile>
                        <v-list-tile-title>Send Feedback</v-list-tile-title>
                      </v-list-tile>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-card-title>
          </v-card-row>
          <v-card-text>
            <v-card-row height="75px">
              <v-icon class="mr-5" dark>card_membership</v-icon>
              <div>
                <div>Membership Number</div><strong>113241423</strong>
              </div>
            </v-card-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-row actions>
            <v-btn flat class="green--text darken-1">View Email</v-btn>
          </v-card-row>
        </v-card>

      </div>
    </div>

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
