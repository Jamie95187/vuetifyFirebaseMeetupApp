import Vue from 'vue';
import App from './views/App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
