const state = {
  isLoggedIn: false,
  token: null
}

const actions = {
  setToken (context, token) {
    context.commit('setToken', token)
  },
  logIn (context) {
    context.commit('logIn', {})
  }
}

const mutations = {
  setToken (state, { token }) {
    state.token = token
  },
  logIn (state) {
    state.isLoggedIn = true
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
