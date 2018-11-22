import CardsService from '@/services/CardsService'

const state = {
  cardTitles: []
}

const actions = {
  fetchCards (context) {
    CardsService.get().then((response) => {
      context.commit('setCards', response.data)
    })
  },
  addCard (context, card) {
    CardsService.post(card).then((response) => {
      context.commit('popTemporaryCard')
      context.commit('addCard', response.data)
    })
  },
  addTemporaryCard (context, card) {
    context.commit('addCard', card)
  }
}

const mutations = {
  setCards (state, { todos }) {
    state.cardTitles = todos
  },
  addCard (state, card) {
    state.cardTitles = state.cardTitles.concat([card])
  },
  popTemporaryCard (state) {
    state.cardTitles.pop()
  }
}

const getters = {
  getCardsByParent: (state) => (parent) => {
    return state.cardTitles.filter(card => card._parent === parent)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
