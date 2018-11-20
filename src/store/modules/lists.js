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
  pushList (context, list) {
    ListsService.post(list).then((response) => {
      context.commit('pushList', response.data)
    })
  }
}

const mutations = {
  setLists (state, { lists }) {
    state.listTitles = lists
  },
  pushList (state, list) {
    state.listTitles = state.listTitles.concat([list])
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
