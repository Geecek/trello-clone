const state = {
  cardTitles: {
    Uni: [
      'SO'
    ],
    Shopping: [
      'Bread',
      'Cheese',
      'Apples'
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
  }
}

const mutations = {
  pushList (state, { title }) {
    state.cardTitles[title] = []
  },
  updateCard (state, { parent, title, newTitle }) {
    state.cardTitles[parent] = state.cardTitles[parent].map(el => el === title ? newTitle : el)
  },
  deleteCard (state, { parent, title }) {
    state.cardTitles[parent] = state.cardTitles[parent].filter(el => el !== title)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
