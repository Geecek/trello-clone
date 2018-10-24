import Vuex from 'vuex'
import Vue from 'vue'
import lists from './modules/lists'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lists
  }
})
