import BoardsService from '@/services/BoardsService'

const state = {
  boardTitles: []
}

const actions = {
  fetchBoards (context) {
    BoardsService.get().then((response) => {
      context.commit('setBoards', { boards: response.data.boards })
    })
  },
  pushBoard (context, board) {
    BoardsService.post(board).then((response) => {
      context.commit('pushBoard', response.data)
    })
  }
}

const mutations = {
  setBoards (state, { boards }) {
    state.boardTitles = boards
  },
  pushBoard (state, board) {
    state.boardTitles = state.boardTitles.concat([board])
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
