const state = {
  lists: [
    {
      title: 'Shopping',
      cards: [
        'Bread',
        'Cheese',
        'Apples'
      ]
    },
    {
      title: 'Uni',
      cards: []
    }
  ]
}

const actions = {
  pushList (context, { title }) {
    context.commit('pushList', title)
  }
}

const mutations = {
  pushList (state, title) {
    state.lists.push({
      title,
      cards: []
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
