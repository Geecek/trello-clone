import CardsService from '@/services/CardsService'
import Vue from 'vue'

const state = {
  cardTitles: [],
  draggingCard: null
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
  },
  updateCard (context, card) {
    CardsService.update(card).then((response) => context.commit('updateCard', response.data))
  },
  setDraggingCard (context, cardID) {
    context.commit('setDraggingCard', cardID)
  },
  unsetDraggingCard (context) {
    context.commit('unsetDraggingCard')
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
  },
  updateCard (state, { todo }) {
    const index = state.cardTitles.map(card => card._id).indexOf(todo._id)
    Vue.set(state.cardTitles, index, todo)
  },
  setDraggingCard (state, cardID) {
    state.draggingCard = cardID
  },
  unsetDraggingCard (state) {
    state.draggingCard = null
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
