import productService from './../services/product.service.js';

export default {

    fetchProducts: ({ commit, dispatch })  => {
        commit('PROCESSING', true, { root: true });
        return productService.fetchProducts()
        .then(
            products => {
                commit('PRODUCT_FETCH', products);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('PRODUCT_FETCH_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    categoryAdd: ({ commit, dispatch }, data)  => {
        commit('PROCESSING', true, { root: true });
        return categoryService.categoryAdd(data)
        .then(
            data => {
                commit('PRODUCT_CATEGORIES_ADD', data.category);
                dispatch('Notification/addSuccess', data.message , {root:true});
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('PRODUCT_CATEGORIES_ADD_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    productAdd: ({ commit, dispatch }, data)  => {
        commit('PROCESSING', true, { root: true });
        return productService.productAdd(data)
        .then(
            product => {
                commit('PRODUCT_ADD', product);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('PRODUCT_ADD_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    productSave: ({ commit, dispatch }, data)  => {
        commit('PROCESSING', true, { root: true });
        return productService.productSave(data, data.id)
        .then(
            product => {
                commit('PRODUCT_UPDATE', product);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('PRODUCT_UPDATE_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    productDelete: ({ commit, dispatch }, id)  => {
        commit('PROCESSING', true, { root: true });
        return productService.productDelete(id)
        .then(
            product => {
                commit('PRODUCT_DELETE', id);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('PRODUCT_DELETE_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    getProductById: ({ commit, dispatch }, id)  => {
        commit('PROCESSING', true, { root: true });
        return productService.getProductById(id)
        .then(
            product => {
                commit('PROCESSING_END', true, { root: true });
                return product;
            },
            error => {
                commit('PRODUCT_ADD_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },
};
