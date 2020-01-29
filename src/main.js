import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import jquery from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'
import bootstrap_vue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import PortalVue from 'portal-vue'

Vue.use(PortalVue)
Vue.use(bootstrap_vue)

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
