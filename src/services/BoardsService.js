import Api from '@/services/Api'

export default {
  get () {
    return Api().get('/boards')
  },
  post (board) {
    return Api().post('/boards', board)
  }
}
