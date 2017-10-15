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
          <span class="grey--text">Prędkość przyrostu zasobów</span>
        </v-card-title>
        <v-card-text>
          <v-container fluid grid-list-md>
            <v-layout row wrap v-for="resr in resources" :key="resr.id">
              <v-progress-circular
                v-bind:size="50"
                v-bind:width="10"
                v-bind:rotate="value + resr.income"
                v-bind:value="resr.income"
                class="teal--text"
              >
                {{ resr.income }}
              </v-progress-circular>

              <v-chip>
                <v-avatar class="teal">{{ resr.title[0] }}</v-avatar>
                {{ resr.title }} / na godzine
              </v-chip>

            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>

    </v-flex>


    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Robotnicy</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>accessibility</v-icon>
        </v-btn>
      </v-toolbar>

      <form @submit.prevent="assignJob">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">Przydzielaj robotników do wydobycia zasobów</span>
          </v-card-title>
          <v-card-text>
            <v-container fluid grid-list-md>
              <v-layout row wrap v-for="job in jobs" :key="job.id">

                <v-flex xs10>
                  <v-slider :label="job.title" thumb-label step="10" v-bind:max="100"
                            v-model="job.amount"></v-slider>
                </v-flex>

                <v-flex xs2>
                  <v-text-field v-model="job.amount" type="number"></v-text-field>
                </v-flex>

              </v-layout>
              <v-btn block color="grey" type="submit">Przydziel</v-btn>
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
    data: () => ({
      jobs: [
        {id: 1, title: 'Lasy', amount: 0},
        {id: 2, title: 'Pola', amount: 0},
        {id: 3, title: 'Kopalnie', amount: 0}
      ],
      resources: [
        {id: 1, title: 'Drewno', income: 12},
        {id: 2, title: 'Zboże', income: 2},
        {id: 3, title: 'Minerały', income: 33}
      ],
      snackbar: false,
      context: '',
      assignResult: '',
      mode: '',
      timeout: 6000,
      interval: {},
      value: 0
    }),
    created: function () {
      axios.get('/api/workers/stats').then(
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
    },
    methods: {
      assignJob () {
        axios.post('/api/workers/assign', this.jobs).then(
          response => {
            console.log(response)
            this.assignResult = 'Przydzielono'
            this.context = 'success'
            this.snackbar = true
            this.jobs = response.jobs
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
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 1000) {
          return (this.value = 0)
        }
        this.value += 2
      }, 50)
    }

  }
</script>

<style lang="stylus" scoped>
  div
    text-align: center

  .progress-circular
    margin: 1rem
</style>

