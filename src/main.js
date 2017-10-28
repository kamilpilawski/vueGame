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
Vue.prototype.serverIp = 'http://localhost:8000/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: {App},
  axios: axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log('inteceptor response error: ' + error.response.status)
    if (error.response.status === 400) { // todo warunek przerobic na status odpowiedni dla zlego tokenu a nie na 400
      router.push('/signin')
    }
    return Promise.reject(error)
  })
})
