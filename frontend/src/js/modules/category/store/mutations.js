import Vue from 'vue';
export default {
    CATEGORIES_FETCH: (state, categories) => {
        state.categories = categories;
    },

    CATEGORIES_FETCH_FAILED: (state, error) => {
        state.categories = [];
        console.log(error);
    },

    CATEGORIES_ADD: (state, category) => {
        state.categories.push(category);
    },

    CATEGORIES_ADD_FAILED: (state, error) => {
        console.log(error);
    },

    CATEGORY_UPDATE: (state, category) => {

    },

    CATEGORY_UPDATE_FAILED: (state, error) => {
        console.log(error);
    },

    CATEGORY_DELETE: (state, id) => {
        state.categories = state.categories.filter(category => category.id !== id);
    },

    CATEGORY_DELETE_FAILED: (error) => {
        console.log(error);
    },
  };
