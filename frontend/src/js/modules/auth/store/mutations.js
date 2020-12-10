export default {
    LOGIN_REQUEST: (state, user) => {
      state.status = { loggingIn: true };
      state.user = user;
    },

    LOGIN_SUCCESS: (state, user) => {
      state.status = { loggedIn: true };
      state.user = user;
    },

    LOGIN_FAILURE: (state, error) => {
      state.status = {};
      state.user = null;
      console.log(error);
    },

    LOGOUT: (state) => {
      state.status = {};
      state.user = null;
    },
  };
