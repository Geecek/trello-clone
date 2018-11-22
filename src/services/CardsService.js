import Api from '@/services/Api'

export default {
  get () {
    return Api().get('/todos')
  },
  post (card) {
    return Api().post('/todos', card)
  }
}
