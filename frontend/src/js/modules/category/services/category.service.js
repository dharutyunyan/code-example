export default {
    fetchCategories,
    categoryAdd,
    getCategoryById,
    categorySave,
    categoryDelete,
  };


function fetchCategories() {
  return new Promise((resolve, reject) => {
    axios.get('/api/category')
      .then(response => {
            if (response.status == 200) {
                resolve(response.data);
            }else{
                reject("Something went wrong");
            }
        })
      .catch(error => {
          reject(error);
        });
  });

};

function getCategoryById(id) {
  return new Promise((resolve, reject) => {
    axios.get('/api/category/' + id + '/edit')
      .then(response => {
            if (response.status == 200) {
                resolve(response.data);
            }else{
                reject("Something went wrong");
            }
        })
      .catch(error => {
          reject(error);
        });
  });
};

function categoryAdd(data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/category', data)
      .then(response => {
            if (response.status == 201) {
                resolve(response.data);
            }else{
                reject(response);
            }
        })
      .catch(error => {
          reject(error);
        });
  });

};

function categorySave(data, id) {
  return new Promise((resolve, reject) => {
    axios.put('/api/category/' + id, data)
      .then(response => {
            if (response.status == 201) {
                resolve(response.data);
            }else{
                reject(response);
            }
        })
      .catch(error => {
          reject(error);
        });
  });
}

function categoryDelete(id) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/category/' + id)
        .then(response => {
              if (response.status == 204) {
                  resolve(id);
              }else{
                  reject(response);
              }
          })
        .catch(error => {
            reject(error);
          });
    });

};
