import Vue from 'vue'
import Vuex from 'vuex'

// import your store modules here
import common from './common'
import country from './country'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // put your store modules
    common,
    country
  }
})
