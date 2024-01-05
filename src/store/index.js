
import Vue from 'vue';
import Vuex from 'vuex';
import * as search from './search';
import * as favorite from './favorite';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search: {
      namespaced: true,
      state: search.state(),
      mutations: search.mutations,
      // Add actions and getters if you have them
    },
    favorites: {
      namespaced: true,
      state: favorite.state(),
      mutations: favorite.mutations,
      actions: favorite.actions,
      getters: favorite.getters
      // Add actions and getters if you have them
    },
  },
});

export default store;