import Vue from 'vue';
import router from '../router'
import store from '../store'
import App from '../App.vue'

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

export default vm;