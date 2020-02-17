import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import List from '../pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/list',
    component: List
  }
  ]
})
