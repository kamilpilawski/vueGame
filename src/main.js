// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/store'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.serverIp = 'http://localhost:80/VelcrowServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: {App}
})
