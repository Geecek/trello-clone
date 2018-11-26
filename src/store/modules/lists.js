import ListsService from '@/services/ListsService'

const state = {
  listTitles: [],
  droppingList: null
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
  },
  setDroppingList (context, listID) {
    context.commit('setDroppingList', listID)
  },
  unsetDroppingList (context) {
    context.commit('unsetDroppingList')
  }
}

const mutations = {
  setLists (state, { lists }) {
    state.listTitles = lists
  },
  pushList (state, list) {
    state.listTitles = state.listTitles.concat([list])
  },
  setDroppingList (state, listID) {
    state.droppingList = listID
  },
  unsetDroppingList (state) {
    state.droppingList = null
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
