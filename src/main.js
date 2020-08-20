import Vue from 'vue';
import App from './views/App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCxxHZn6Xm-RWwjZvsG09cD0M2RC031aRQ",
      authDomain: "meetup-c8d26.firebaseapp.com",
      databaseURL: "https://meetup-c8d26.firebaseio.com",
      projectId: "meetup-c8d26",
      storageBucket: "meetup-c8d26.appspot.com"
    })
  }
}).$mount('#app')
