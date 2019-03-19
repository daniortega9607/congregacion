import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

export const routes = [
  { path: '/', component: App },
  { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
  { path: '*', redirect: '/' }
]

export default new Router({ mode: 'history', routes })
