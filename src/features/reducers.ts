import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

export default combineReducers({
    auth: authReducer,
});
