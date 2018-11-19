import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import lists from './modules/lists'
import cards from './modules/cards'
import boards from './modules/boards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    lists,
    cards,
    boards
  }
})
