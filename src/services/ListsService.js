import Api from '@/services/Api'

export default {
  get (parent) {
    return Api().get('/lists', { params: { _id: parent } })
  },
  post (list) {
    return Api().post('/lists', list)
  }
}
