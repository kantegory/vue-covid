import Vue from 'vue'
import Router from 'vue-router'
import Total from '@/components/Total'
import Countries from '@/components/Countries'
import Country from '@/components/Country'
import store from '@/store'

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
    },
    {
      path: '/country/:queryName',
      name: 'Country',
      component: Country,
      props: true,
      beforeEnter (to, from, next) {
        let queryName = to.params.queryName
        store.dispatch('newCountryName', queryName)
        next()
      }
    }
  ]
})
