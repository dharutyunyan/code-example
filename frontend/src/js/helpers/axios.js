import axios from 'axios';
import router from './router';

axios.defaults.baseURL = 'http://test.loc';

axios.interceptors.request.use(
  (config) => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.auth_token) {
      config.headers.Authorization = 'Bearer ' + user.auth_token;
    }

    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config;
  },

  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
      if (error.response && error.response.status === 401) {
        //Refresh token can be here
        localStorage.removeItem('user');
        router.push('/login');
      } else {
        return Promise.reject(error);
      }
    });

export default axios;
