import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import i18n from './i18n'
import '@/plugins/index'
import '@/mixins/index'
import '@/directives/index'
import '@/filters'
import '@/assets/css/main.css'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false
// Vue.config.performance = process.env.NODE_ENV !== "production";

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
