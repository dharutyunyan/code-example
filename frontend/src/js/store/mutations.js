import Vue from 'vue';
export default {
    MAIN_SET_PAGETITLE: (state, title) => {
        state.pageTitle = title;
    },

    PROCESSING: (state, processing) => {
        state.processing = processing;
    },

    PROCESSING_END: (state, processing) => {
        state.processing = false;
    },
  };
