import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Board from '@/components/Board'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
