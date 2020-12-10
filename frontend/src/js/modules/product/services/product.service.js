export default {
    fetchProducts,
    productAdd,
    getProductById,
    productSave,
    productDelete,
  };


function fetchProducts(data) {
  return new Promise((resolve, reject) => {
    axios.get('/api/product', data)
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

function getProductById(id) {
  return new Promise((resolve, reject) => {
    axios.get('/api/product/' + id + '/edit')
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

function productAdd(data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/product', data)
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

function productSave(data, id) {
  return new Promise((resolve, reject) => {
    axios.put('/api/product/' + id, data)
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

function productDelete(id) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/product/' + id)
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
