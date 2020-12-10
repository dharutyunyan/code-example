import categoryService from './../services/category.service.js';
import Router from './../../../helpers/router';

export default {

    fetchCategories: ({ commit, dispatch })  => {
        commit('PROCESSING', true, { root: true });
        return categoryService.fetchCategories()
        .then(
            categories => {
                commit('CATEGORIES_FETCH', categories);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('CATEGORIES_FETCH_FAILED', error);
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
                commit('CATEGORIES_ADD', data.category);
                dispatch('Notification/addSuccess', data.message , {root:true});
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('CATEGORIES_ADD_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    categorySave: ({ commit, dispatch }, data)  => {
        commit('PROCESSING', true, { root: true });
        return categoryService.categorySave(data, data.id)
        .then(
            category => {
                commit('CATEGORY_UPDATE', category);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('CATEGORY_UPDATE_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    categoryDelete: ({ commit, dispatch }, id)  => {
        commit('PROCESSING', true, { root: true });
        return categoryService.categoryDelete(id)
        .then(
            category => {
                commit('CATEGORY_DELETE', id);
                commit('PROCESSING_END', true, { root: true });
            },
            error => {
                commit('CATEGORY_DELETE_FAILED', error);
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },

    getCategoryById: ({ commit, dispatch }, id)  => {
        commit('PROCESSING', true, { root: true });
        return categoryService.getCategoryById(id)
        .then(
            data => {
                commit('PROCESSING_END', true, { root: true });
                return data.category;
            },
            error => {
                commit('PROCESSING_END', true, { root: true });
                return Promise.reject(error);
            }
        );
    },
};
