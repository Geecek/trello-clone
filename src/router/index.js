import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Board from '@/components/Board'
import Login from '@/components/Login'
import MyBoards from '@/components/MyBoards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/board/:id/',
      name: 'board',
      component: Board
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/myboards',
      name: 'myboards',
      component: MyBoards
    }
  ]
})
