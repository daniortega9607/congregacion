import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

export const routes = [
  { path: '/', component: App, children: [
    { path: '', component: () => import('./views/Home.vue') },
    { path: 'home', component: () => import('./views/Home.vue') },
    { path: 'asistencia', component: () => import('./views/Assistance.vue') },
    { path: 'ajustes', component: () => import('./views/Settings.vue') },
  ] },
  { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
  { path: '*', redirect: '/' }
]

export default new Router({ mode: 'history', routes })
