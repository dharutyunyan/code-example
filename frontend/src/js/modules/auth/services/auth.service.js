export default {
    login,
    logout,
  };

function login(email, password) {
  return new Promise((resolve, reject) => {
    axios.post('/api/login', { email, password })
      .then(response => {
          if (response.status == 200) {
              if (response.data.success) {
                  alert(response.data);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                axios.defaults.headers.common = {
                  Authorization: 'Bearer ' + response.data.user.auth_token,
                };
                resolve(response.data.user);
              }
          }

        })
      .catch(error => {
          reject(error);
        });
  });

}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
