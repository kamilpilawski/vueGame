import Vue from 'vue'
import Router from 'vue-router'

import MainIndex from '@/components/view/MainIndex'
import UserHome from '@/components/UserHome'
import ArmyInfo from '@/components/ArmyInfo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'MainIndex', component: MainIndex},
    {path: '/home', name: 'UserHome', component: UserHome},
    {path: '/info', name: 'ArmyInfo', component: ArmyInfo}
  ]
})
