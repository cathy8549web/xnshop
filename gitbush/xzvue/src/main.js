import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader'
import axios from "axios";

Vue.prototype.axios=axios;
axios.defaults.baseURL="http://localhost:3000";

Vue.component("my-header",MyHeader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
