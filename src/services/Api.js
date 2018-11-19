import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    // baseURL: `https://protected-journey-98451.herokuapp.com`
    baseURL: `http://localhost:3000`,
    headers: {
      'x-auth': store.state.user.token
    }
  })
}
