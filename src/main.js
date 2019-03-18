import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => <router-view />
}).$mount('#app')
