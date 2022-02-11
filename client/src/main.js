import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import moment from 'moment'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faBars)

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('lll')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
