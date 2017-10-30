// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/store'
import axios from 'axios'

Vue.use(Vuetify, axios)

Vue.config.productionTip = false
Vue.prototype.serverIp = 'http://localhost:8000'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: {App},
  created: function () {
    console.log('utworzono VUE')
    this.$axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      console.log('inteceptor response error: ' + error.response.status)
      if (error.response.status === 401) { // todo warunek przerobic na status odpowiedni dla zlego tokenu a nie na 400
        router.push('/signin')
      }
      return Promise.reject(error)
    })
    this.$axios.interceptors.request.use(function (config) {
      config.headers = {'X-Requested-With': 'XMLHttpRequest'}
      console.log('utworzono VUE koniec, headery: ' + config.headers)
      return config
    })
  }
})
