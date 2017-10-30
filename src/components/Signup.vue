<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>
      <v-form>

        <div class="form-group">

          <label for="username">Nazwa użytkownika</label>
          <input
            type="text"
            id="username"
            name="username"
            class="form-control"
            v-model="username"
          />

        </div>

        <div class="form-group">

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            v-model="email"
          />

        </div>

        <div class="form-group">

          <label for="password">Hasło</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            v-model="password"
          />

        </div>

        <div class="form-group">

          <label for="villageName">Nazwa wioski</label>
          <input
            type="text"
            id="villageName"
            name="villageName"
            class="form-control"
            v-model="villageName"
          />

        </div>

        <v-btn @click="signup" block color="grey">Zaloguj mnie</v-btn>
      </v-form>

    </v-flex>
  </div>
</template>

<script>
  import axios from 'axios'
  import router from '../router'

  export default {
    data: () => ({
      username: '',
      email: '',
      password: '',
      villageName: ''
    }),
    methods: {
      signup () {
        axios.post(this.serverIp + '/api/user',
          {
            name: this.username,
            email: this.email,
            password: this.password,
            villageName: this.villageName
          }
        ).then(
          response => {
            console.log(response)
            router.push('/signin')
          }
        ).catch(
          error => {
            console.log(error)
          }
        )
      }
    }

  }
</script>

<style lang="stylus" scoped>
  div
    text-align: center

  .progress-circular
    margin: 1rem
</style>
