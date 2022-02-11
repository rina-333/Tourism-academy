import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
library.add(faBars)
library.add(faInstagram, faFacebook, faTwitter, faYoutube)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('lll')
  }
})

Vue.filter('formatDateLabel', function (value) {
  if (value) {
    return moment(String(value)).format('ll')
  }
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
