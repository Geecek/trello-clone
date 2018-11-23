import Api from '@/services/Api'

export default {
  get () {
    return Api().get('/todos')
  },
  post (card) {
    return Api().post('/todos', card)
  },
  delete (card) {
    return Api().delete(`/todos/${card.id}`)
  },
  update (card) {
    return Api().patch(`/todos/${card.id}`, card)
  }
}
