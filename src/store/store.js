import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['userName', 'authority'],
      getState: (key) => Cookie.getJSON(key),
      setState: (key, state) => Cookie.set(key, state, {secure: false})
    })
  ],
  state: {
    showNavigation: true,
    showSettings: false,
    showRegistration: false,
    showLogin: false,
    userName: null,
    authority: null,
    title: 'VELCROW',
    navigationMenu: [
      {id: 1, title: 'Home', icon: 'dashboard', href: '/#/'},
      {id: 2, title: 'Follow', icon: 'person', href: '/#/follow'},
      {id: 3, title: 'Favorites', icon: 'favorite', href: '/#/liked'}
    ]
  },
  getters: {
    getMenu (state) {
      return state.navigationMenu
    },
    getUserName (state) {
      return state.userName
    },
    getAuthority (state) {
      return state.authority
    }
  },
  mutations: {
    changeNavigationState (state) {
      state.showNavigation = !state.showNavigation
    },
    changeSettingsState (state) {
      state.showSettings = !state.showSettings
    },
    changeRegistrationState (state) {
      state.showRegistration = !state.showRegistration
    },
    changeLoginState (state) {
      state.showLogin = !state.showLogin
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    loginUser (state, payload) {
      state.userName = payload.username
      state.authority = payload.authority.split(',')[0]
    },
    logoutUser (state) {
      state.userName = null
      state.authority = null
    }
  }
})
