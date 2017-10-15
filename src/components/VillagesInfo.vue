<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Osady</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>pie_chart</v-icon>
        </v-btn>
      </v-toolbar>


      <v-card row wrap v-for="village in villages" :key="village.id">
          <v-card-title primary-title>
            <span class="grey--text">{{ village.name }}</span>
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-md>

              <v-list two-line>
                <v-list-tile>

                  <v-list-tile-avatar>
                    <v-icon>account_balance</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Zasoby:</v-list-tile-title>
                    <v-list-tile-sub-title>{{ village.goods }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon>supervisor_account</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Armia:</v-list-tile-title>
                    <v-list-tile-sub-title> {{ village.army }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-avatar>
                    <v-icon>gavel</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>Robotników:</v-list-tile-title>
                    <v-list-tile-sub-title> {{ village.workers }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>


            </v-container>
          </v-card-text>
        </v-card>


    </v-flex>


    <v-card>
      <v-snackbar :timeout=2000 :success="context === 'success'" :error="context === 'error'" v-model="snackbar">
        {{ assignResult }}
        <v-btn dark flat @click.native="snackbar = false">x</v-btn>
      </v-snackbar>
    </v-card>

  </div>

</template>


<script>
  import axios from 'axios'

  export default {
    name: 'villagesInfo',
    data: () => ({
      snackbar: false,
      context: '',
      assignResult: '',
      villages: [
        {id: 1, name: 'Lachy', goods: 'Przeciętne', army: 'Duża', workers: 'Mało'},
        {id: 2, name: 'Ochy', goods: 'Mało', army: 'Duża', workers: 'Mało'}
      ]
    }),
    created: function () {
      axios.get('/api/villages/info').then(
        response => {
          console.log(response)
          this.villages = response.villages
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

  }
</script>

<style scoped>

</style>

