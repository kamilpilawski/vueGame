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

  export default {
    data: () => ({
      username: '',
      email: '',
      password: ''
    }),
    methods: {
      signin () {
        axios.post(this.serverIp + 'api/user/signin',
          {
            email: this.email,
            password: this.password
          },
          {headers: {'X-Requested-With': 'XMLHttpRequest'}}
        ).then(
          response => {
            console.log(response)
            console.log('to jest token ' + response.data.token)
            const token = response.data.token
            const base64Url = token.split('.')[1]
            const base64 = base64Url.replace('-', '+').replace('_', '/')
            console.log(JSON.parse(window.atob(base64)))
            this.$store.token = token
            console.log('token ze stora: ' + this.$store.token)
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

