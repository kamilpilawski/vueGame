<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>
      <v-form>

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

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            v-model="password"
          />

        </div>

        <v-btn @click="signin" block color="grey">Zaloguj mnie</v-btn>
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
      password: ''
    }),
    methods: {
      signin () {
        console.log('staram sie zalogowac: ' + this.email + ' ' + this.password)
        axios.post(this.serverIp + '/api/user/signin',
          {
            email: this.email,
            password: this.password
          }).then(
          response => {
            console.log(response)
            const token = response.data.token
            const base64Url = token.split('.')[1]
            const base64 = base64Url.replace('-', '+').replace('_', '/')
            console.log(JSON.parse(window.atob(base64)))
            this.$store.token = token
            router.push('/')
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

