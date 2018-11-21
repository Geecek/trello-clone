import CardsService from '@/services/CardsService'

const state = {
  cardTitles: []
}

const actions = {
  fetchCards (context) {
    CardsService.get().then((response) => {
      context.commit('setCards', response.data)
    })
  }
}

const mutations = {
  setCards (state, { todos }) {
    state.cardTitles = todos
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
