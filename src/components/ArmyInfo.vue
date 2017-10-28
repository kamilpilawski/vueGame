<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Statystyka</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>pie_chart</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
        <v-card-title primary-title>
          <span class="grey--text">Twoje ostatnie potyczki</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid grid-list-md>

            <v-layout row wrap v-for="fight in fights" :key="fight.id">

              <v-list two-line subheader>
                <v-list-tile avatar>

                  <v-list-tile-avatar>
                    <v-icon>border_clear</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ fight.enemy }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ fight.result }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-btn icon>
                      <v-icon class="grey--text text--lighten-1">info</v-icon>
                    </v-btn>
                  </v-list-tile-action>


                </v-list-tile>
              </v-list>
              {{ fight.description }}

            </v-layout>

          </v-container>
        </v-card-text>
      </v-card>

    </v-flex>


    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Atakuj</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>accessibility</v-icon>
        </v-btn>
      </v-toolbar>

      <form @submit.prevent="attackVillage">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">Wybierz jaką wioskę zaatakujesz</span>
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-md>
              <v-layout row wrap v-for="village in villages" :key="village.id">

                <v-flex xs11>
                  {{ village.title }} posiadają armie: {{ village.army }}

                  <v-progress-linear v-model="village.army" color-front="lime"
                                     color-back="blue-grey"></v-progress-linear>
                </v-flex>

                <v-checkbox v-model="village.attack" label="Atak" dark></v-checkbox>

              </v-layout>
              <v-btn block color="grey" type="submit">Atakuj</v-btn>

            </v-container>

            <v-snackbar :timeout=2000 :success="context === 'success'" :error="context === 'error'" v-model="snackbar">
              {{ assignResult }}
              <v-btn dark flat @click.native="snackbar = false">x</v-btn>
            </v-snackbar>

          </v-card-text>
        </v-card>
      </form>

    </v-flex>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'userInfo',
    data: () => ({
      fights: [
        {
          id: 1,
          enemy: 'Lachy',
          result: 'Wygrana',
          casualties: 200,
          loot: 255,
          lost: 0,
          description: 'Straciłeś 200 żołnierzy i 0 złota. Zyskałeś 255 złota.'
        },
        {
          id: 2,
          enemy: 'Eksy',
          result: 'Porażka',
          casualties: 500,
          loot: 0,
          lost: 150,
          description: 'Straciłeś 500 żołnierzy i 150 złota. Zyskałeś 0 złota.'
        },
        {
          id: 3,
          enemy: 'Eksy',
          result: 'Porażka',
          casualties: 350,
          loot: 0,
          lost: 500,
          description: 'Straciłeś 350 żołnierzy i 500 złota. Zyskałeś 0 złota.'
        }
      ],
      villages: [
        {id: 1, title: 'Lachy', army: 15, attack: false},
        {id: 2, title: 'Eksy', army: 90, attack: false},
        {id: 3, title: 'Kalos', army: 1, attack: false}
      ],
      snackbar: false,
      context: '',
      mode: '',
      timeout: 6000,
      assignResult: '',
      getInfo: function () {
        const token = this.$store.token
        axios.get(this.serverIp + '/api/army/fights?token=' + token).then(
          response => {
            console.log(response)
            this.resources = response.fights
          }
        ).catch(
          error => {
            console.log('to to : ' + error.response.status)
            this.assignResult = 'Błąd'
            this.context = 'error'
            this.snackbar = true
//            if (error.response.status >= 400) {
//              console.log('nieuatoryzowany ')
//              this.$router.push('/signin')
//            }
          }
        )
        axios.get('/api/army/villages').then(
          response => {
            console.log(response)
            this.resources = response.villages
          }
        ).catch(
          error => {
            console.log(error)
            this.assignResult = 'Błąd'
            this.context = 'error'
            this.snackbar = true
          }
        )
      }
    }),
    created: function () {
      this.getInfo()
    },
    methods: {
      attackVillage () {
        axios.post(this.serverIp + '/api/village/attack', this.villages, {headers: {'X-Requested-With': 'XMLHttpRequest'}}).then(
          (response) => console.log(response),
          this.assignResult = 'Przydzielono',
          this.context = 'success',
          this.snackbar = true
        ).catch(
          (error) => console.log(error),
          this.assignResult = 'Błąd',
          this.context = 'error',
          this.snackbar = true
        )
        this.getInfo()
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
