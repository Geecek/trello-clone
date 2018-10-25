const state = {
  listTitles: [
    { title: 'Shopping' },
    { title: 'Uni' },
    { title: 'Trello' }
  ]
}

const actions = {
  pushList (context, title) {
    context.commit('pushList', title)
  }
}

const mutations = {
  pushList (state, title) {
    state.listTitles.push(title)
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
