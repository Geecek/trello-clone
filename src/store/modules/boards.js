import BoardsService from '@/services/BoardsService'

const state = {
  boardTitles: []
}

const actions = {
  fetchBoards (context) {
    BoardsService.get().then((response) => {
      context.commit('setBoards', { boards: response.data.boards })
    })
  }
}

const mutations = {
  setBoards (state, { boards }) {
    state.boardTitles = boards
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
