import AuthenticationService from '@/services/AuthenticationService'

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
  },
  logout (context) {
    AuthenticationService.logout().then(() => context.commit('logout'))
  }
}

const mutations = {
  setToken (state, { token }) {
    state.token = token
  },
  logIn (state) {
    state.isLoggedIn = true
  },
  logout (state) {
    state.isLoggedIn = false
    state.token = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
