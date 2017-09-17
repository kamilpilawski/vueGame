import Vue from 'vue'
import Router from 'vue-router'

import MainIndex from '../components/view/MainIndex.vue'
import UserHome from '../components/UserHome.vue'
import ArmyInfo from '../components/ArmyInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MainIndex},
    {path: '/home', component: UserHome},
    {path: '/army', component: ArmyInfo},
    {path: '/workers', component: ArmyInfo},
    {path: '/settings', component: ArmyInfo},
    {path: '/villages', component: ArmyInfo}
  ]
})
