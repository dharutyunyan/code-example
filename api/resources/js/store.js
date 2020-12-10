import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import auth from './store/reducers/auth.reducer'

export default combineReducers({
    auth: auth
})
