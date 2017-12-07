//import packages and files------------
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Routes from './router.js'

// Use packages
Vue.use(VueResource);



new Vue({
  el: '#app',
  render: h => h(App),
  router: Routes
})