import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex);

const state = {
    categories:[]
  };

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };
