import ListsService from '@/services/ListsService'

const state = {
  listTitles: []
}

const actions = {
  fetchLists (context, { parent }) {
    ListsService.get(parent).then((response) => {
      context.commit('setLists', { lists: response.data.lists })
    })
  },
  pushList (context, title) {
    context.commit('pushList', title)
  }
}

const mutations = {
  pushList (state, title) {
    state.listTitles.push(title)
  },
  setLists (state, { lists }) {
    state.listTitles = lists.length > 0 ? lists : null
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
