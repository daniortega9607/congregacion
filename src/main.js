import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import './registerServiceWorker'
import config from './config/config.global';

Vue.config.productionTip = false

document.title = `${config.app_name} ${config.congregation}`

new Vue({
  router,
  store,
  render: h => <router-view />
}).$mount('#app')
