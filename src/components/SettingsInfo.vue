<template>
  <div>
    <h1>
      To są ustawienia
    </h1>
    <h3>
      Settings
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
    name: 'userHome',
    data: () => ({
      snackbar: false,
      context: '',
      assignResult: ''
    }),
    created: function () {
      axios.get('/api/settings/info').then(
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

