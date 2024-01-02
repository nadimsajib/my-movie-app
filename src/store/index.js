
import Vue from 'vue';
import Vuex from 'vuex';
import * as search from './search';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search: {
      namespaced: true,
      state: search.state(),
      mutations: search.mutations,
      // Add actions and getters if you have them
    },
  },
});

export default store;