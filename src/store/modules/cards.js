import Vue from 'vue'

const state = {
  cardTitles: {
    Uni: [
      'SO'
    ],
    Shopping: [
      'Bread',
      'Cheese',
      'Apples'
    ],
    Trello: [

    ]
  }
}

const actions = {
  pushList (context, title) {
    context.commit('pushList', title)
  },
  updateCard (context, payload) {
    context.commit('updateCard', payload)
  },
  deleteCard (context, payload) {
    context.commit('deleteCard', payload)
  },
  addCard (context, payload) {
    context.commit('addCard', payload)
  }
}

const mutations = {
  pushList (state, { title }) {
    Vue.set(state.cardTitles, title, [''])
  },
  updateCard (state, { parent, title, newTitle }) {
    state.cardTitles[parent] = state.cardTitles[parent].map(el => el === title ? newTitle : el)
  },
  deleteCard (state, { parent, title }) {
    state.cardTitles[parent] = state.cardTitles[parent].filter(el => el !== title)
  },
  addCard (state, { title }) {
    state.cardTitles[title].push('')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
