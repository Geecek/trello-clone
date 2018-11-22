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
  },
  deleteCard (context, card) {
    CardsService.delete(card).then((response) => {
      context.commit('deleteCard', response.data)
    })
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
  },
  deleteCard (state, { todo }) {
    const index = state.cardTitles.map(card => card._id).indexOf(todo._id)
    state.cardTitles.splice(index, 1)
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
