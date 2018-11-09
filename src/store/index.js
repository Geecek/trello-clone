import Vuex from 'vuex'
import Vue from 'vue'
import lists from './modules/lists'
import cards from './modules/cards'
import boards from './modules/boards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lists,
    cards,
    boards
  }
})
