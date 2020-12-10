import Vue from 'vue';
export default {
    SUCCESS_MESSAGE: (state, message) => {
        state.messages.push(message);
    },

    CLEAR_MESSAGES: (state, message) => {
        state.messages = [];
    },

    ERROR_MESSAGE: (state, message) => {
        state.errors.push(message);
    },

    CLEAR_NOTIFICATIONS: (state, message) => {
        state.messages = [];
        state.errors = [];
    },

};
