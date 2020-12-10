import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
const modules = [];

const state = {
    pageTitle: "Dashboard",
    processing: false,
  };

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules,
    namespaced: true,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
