import Vue from 'vue'
import Router from 'vue-router'

import MainIndex from '../components/view/MainIndex.vue'
import VillageInfo from '../components/VillageInfo.vue'
import WorkersInfo from '../components/WorkersInfo.vue'
import ArmyInfo from '../components/ArmyInfo.vue'
import SettingsInfo from '../components/SettingsInfo.vue'
import VillagesInfo from '../components/VillagesInfo.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import Signout from '../components/Signout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MainIndex},
    {path: '/home', component: VillageInfo},
    {path: '/army', component: ArmyInfo},
    {path: '/workers', component: WorkersInfo},
    {path: '/settings', component: SettingsInfo},
    {path: '/villages', component: VillagesInfo},
    {path: '/signin', component: Signin},
    {path: '/signup', component: Signup},
    {path: '/signout', component: Signout}
  ]
})
