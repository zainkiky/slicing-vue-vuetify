import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Chart from 'chart.js/auto';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  Chart,
  render: (h) => h(App),
}).$mount('#app');
