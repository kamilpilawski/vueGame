<template>
  <div>
    <h1>
      To są sąsiednie osady
    </h1>
    <h3>
      Działania na innych osadach
    </h3>

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
      assignResult: ''
    }),
    created: function () {
      axios.get('/api/villages/info').then(
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

  }
</script>

<style scoped>

</style>

