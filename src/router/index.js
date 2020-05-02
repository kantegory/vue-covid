import Vue from 'vue'
import Router from 'vue-router'
import Total from '@/components/Total'
import Countries from '@/components/Countries'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Total',
      component: Total
    },
    {
      path: '/countries',
      name: 'Countries',
      component: Countries
    }
  ]
})
