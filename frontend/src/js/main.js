import './../scss/main.scss';
require('./bootstrap');

import Vue from 'vue';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';


import Layout from './views/layouts/TheLayout.vue';
import axios from './helpers/axios.js';
import router from './helpers/router.js';
import store from './store/';



// load modules
import Product from './modules/product';
import Category from './modules/category';
import Auth from './modules/auth';
import Notification from './modules/notification';

new Product(store, router).install();
new Category(store, router).install();
new Auth(store, router).install();
new Notification(store, router).install();


//Vue.prototype.$config = config;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
    router,
    store,
    render: h => h(Layout)
}).$mount('#app')
