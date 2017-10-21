<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Zasoby</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>pie_chart</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
        <v-card-title primary-title>
          <span class="grey--text">Twoje zasoby</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid grid-list-md>

            <v-layout row wrap v-for="res in resources" :key="res.id">

              <v-list two-line subheader>
                <v-list-tile avatar>

                  <v-list-tile-avatar>
                    <v-icon>settings</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ res.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ res.amount }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                </v-list-tile>
              </v-list>

            </v-layout>

          </v-container>
        </v-card-text>
      </v-card>

    </v-flex>

    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Targ</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>accessibility</v-icon>
        </v-btn>
      </v-toolbar>

      <form @submit.prevent="buy">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">Kupuj zasoby</span>
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-md>
              <v-layout row wrap v-for="cargo in cargos" :key="cargo.id">

                <v-flex xs10>
                  <v-slider :label="cargo.name" thumb-label step="10" v-bind:max="1000" v-bind:min="-1000"
                            v-model="cargo.amount"></v-slider>
                </v-flex>

                <v-flex xs2>
                  <v-text-field v-model="cargo.amount" type="number"></v-text-field>
                </v-flex>

              </v-layout>

              <v-btn block color="grey" type="submit">{{ calckPrice() }}</v-btn>
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
    name: 'userHome',
    data: () => ({
      snackbar: false,
      context: '',
      assignResult: '',
      resources: [
        {id: 1, name: 'Drewno', amount: 200},
        {id: 2, name: 'Kruszce', amount: 350}

      ],
      cargos: [
        {id: 1, name: 'Drewno', amount: 0, price: 1},
        {id: 2, name: 'Kruszce', amount: 0, price: 2},
        {id: 2, name: 'Robotnicy', amount: 0, price: 3},
        {id: 2, name: 'Armia', amount: 0, price: 4}
      ],
      getIn: function () {
        axios.get('/api/village/info').then(
          response => {
            console.log(response)
            this.resources = response.resources
          }
        ).catch(
          error => {
            console.log(error)
            this.assignResult = 'Błąd'
            this.context = 'error'
            this.snackbar = true
          }
        )
        axios.get('/api/market/info').then(
          response => {
            console.log(response)
            this.resources = response.resources
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
      this.getIn()
    },
    methods: {
      calckPrice () {
        var price = this.cargos.map(function (cargo) {
          return cargo.price * cargo.amount
        }).reduce(function (price, nextPrice, index, arr) {
          return price + nextPrice
        })

        if (price === 0) {
          return 'Transakcja bezkosztowa'
        } else if (price > 0) {
          return 'Kupuję, cena: ' + price
        } else {
          return 'Sprzedaję za: ' + (price * (-1))
        }
      },
      buy () {
        axios.post('/api/market/buy', this.cargos).then(
          response => {
            console.log(response)
            this.assignResult = 'Dokonano zakupu'
            this.context = 'success'
            this.snackbar = true
            this.cargos = response.cargos
            this.resources = response.resources
          }
        ).catch(
          error => {
            console.log(error)
            this.assignResult = 'Błąd'
            this.context = 'error'
            this.snackbar = true
          }
        )
        this.getIn()
      }
    }
  }
</script>

<style scoped>

</style>

