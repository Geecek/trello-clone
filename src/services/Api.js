import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: `https://protected-journey-98451.herokuapp.com`
    baseURL: `http://localhost:3000`
  })
}
