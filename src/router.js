import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import('./views/About.vue') },
  { path: '/login', name: 'login', component: () => import('./views/Login.vue') }
]

export default new Router({ mode: 'history', routes })