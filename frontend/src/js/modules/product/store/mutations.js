import Vue from 'vue';
export default {
    PRODUCT_FETCH: (state, products) => {
        state.products = products;
    },
    PRODUCT_FETCH_FAILED: (state, error) => {
        state.products = [];
        console.log(error);
    },

    PRODUCT_ADD: (state, product) => {
        state.products.push(product);
    },

    PRODUCT_ADD_FAILED: (state, error) => {
        console.log(error);
    },

    PRODUCT_UPDATE: (state, product) => {

    },

    PRODUCT_UPDATE_FAILED: (state, error) => {
        console.log(error);
    },

    PRODUCT_DELETE: (state, id) => {
        state.products = state.products.filter(product => product.id !== id);
    },

    PRODUCT_DELETE_FAILED: (error) => {
        console.log(error);
    },

  };
