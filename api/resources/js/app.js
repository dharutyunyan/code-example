/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

 require('./bootstrap')


 import React from 'react';
 import { render } from 'react-dom';
 import { Provider } from 'react-redux';

 import { store } from './_helpers';
 import { App } from './App/App';


 render(
     <Provider store={store}>
         <App />
     </Provider>,
     document.getElementById('app')
 );
