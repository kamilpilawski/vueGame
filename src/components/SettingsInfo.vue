<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>

      <v-toolbar class="indigo" dark>
        <v-toolbar-title>Ustawienia</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>pie_chart</v-icon>
        </v-btn>
      </v-toolbar>


      <v-card row wrap>
        <v-card-title primary-title>
          <span class="grey--text"></span>
        </v-card-title>
        <v-card-text>
          <v-container fluid grid-list-md>


            <v-form v-model="validName" lazy-validation ref="nameForm">
              <v-text-field label="Nazwa wioski" v-model="village.village_name" :rules="validationRules"
                            required></v-text-field>

              <v-checkbox label="Czy jestes pewien?" v-model="nameCheckbox"
                          :rules="[v => !!v || 'Zaznacz, aby kontynuować']" required></v-checkbox>

              <v-btn @click="submitVillage" :disabled="!validName">Zapisz</v-btn>

              <v-btn @click="clearName">Wyczyść</v-btn>
            </v-form>


            <v-form v-model="validPass" lazy-validation ref="passwordForm">

              <v-text-field label="Hasło" v-model="village.password" required :rules="validationRules"></v-text-field>

              <v-checkbox
                label="Czy jestes pewien?" v-model="passwordCheckbox"
                :rules="[v => !!v || 'Zaznacz, aby kontynuować']" required></v-checkbox>

              <v-btn @click="submitPassword" :disabled="!validPass">Zapisz</v-btn>
              <v-btn @click="clearPassword">Wyczyść</v-btn>
            </v-form>


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
    name: 'userSettings',
    data: () => ({
      snackbar: false,
      context: '',
      assignResult: '',
      validName: true,
      validPass: true,
      validationRules: [
        (v) => !!v || 'Pole wymagane',
        (v) => v && v.length >= 5 || 'Pole musi mieć wiecej niz 5 znaków'
      ],
      nameCheckbox: false,
      passwordCheckbox: false,
      village: {
        village_name: '',
        password: ''
      }
    }),
    created: function () {
      axios.get('/api/settings/info').then(
        response => {
          console.log(response)
          this.settings = response.settings
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
      submitVillage () {
        console.log('submit village')
        if (this.$refs.nameForm.validate()) {
          console.log('submit village2')
          axios.post('/api/settings/village/name', {
            name: this.name,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      submitPassword () {
        console.log('submit password')
        if (this.$refs.passwordForm.validate()) {
          axios.post('/api/settings/village/password', {
            password: this.password,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clearName () {
        console.log('clear village')
        this.$refs.nameForm.reset()
      },
      clearPassword () {
        console.log('clear password')
        this.$refs.passwordForm.reset()
      }
    }

  }
</script>

<style scoped>

</style>

