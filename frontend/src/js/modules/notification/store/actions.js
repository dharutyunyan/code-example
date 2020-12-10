export default {
    addSuccess: ({ commit, dispatch }, message) => {
        commit('SUCCESS_MESSAGE', message);
    },

    addError: ({ commit, dispatch }, message) => {
        commit('ERROR_MESSAGE', message);
    },

    clearNotifications: ({ commit, dispatch }) => {
        commit('CLEAR_NOTIFICATIONS');
    },
};
