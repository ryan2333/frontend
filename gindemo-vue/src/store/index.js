import Vue from 'vue';
import Vuex from 'vuex';
import userModel from './model/user';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModel,
  },
});
