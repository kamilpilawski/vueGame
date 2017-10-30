<template>
  <div class="text-sm-left container pa-0 container--fluid layout row wrap">
    <v-flex xs9 sm6 offset-sm3>

      <v-btn @click="signout" block color="grey">Wyloguj mnie</v-btn>

    </v-flex>
  </div>
</template>

<script>
  import axios from 'axios'
  import router from '../router'

  export default {
    data: () => ({}),
    methods: {
      signout () {
        console.log('staram sie wylogowac: ')
        var tkn = this.$store.token
        axios.post(this.serverIp + '/api/user/signout?token=' + tkn, {token: tkn}).then(
          response => {
            console.log(response)
            this.$store.token = undefined
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

