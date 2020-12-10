import authService from './../services/auth.service.js';
import router from './../../../helpers/router.js';
export default {
      login: ({ dispatch, commit }, userData) => {
        commit('LOGIN_REQUEST', userData.email);
        authService.login(userData.email, userData.password)
              .then(
                  user => {
                    commit('LOGIN_SUCCESS', user);
                    router.push('/');
                  },
                  error => {
                      commit('LOGIN_FAILURE', error);
                    }
              );
      },

      logout: ({ commit }) => {
        router.push('/login');
        authService.logout();
        commit('LOGOUT');
      },

      initState: ({ commit }) => {
        const user = JSON.parse(localStorage.getItem('user'))
         ? JSON.parse(localStorage.getItem('user')) : null;
        if (user) {
          commit('LOGIN_SUCCESS', user);
        }
      },
    };
