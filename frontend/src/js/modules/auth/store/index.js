import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

const user = JSON.parse(localStorage.getItem('user'));
const state = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  };
