import Vue from 'vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

import router from './router';
import store from './store';

import './assets/scss/index.scss';

// validate
Vue.use(Vuelidate);

// axios
Vue.use(VueAxios, axios);

// ESlint 1. 检查语法错误，2. 检查代码规范

Vue.config.productionTip = false;

// vue bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
