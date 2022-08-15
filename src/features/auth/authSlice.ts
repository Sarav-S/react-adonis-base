import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../middleware/api-creators';
import * as user from '../../utils/auth';

const initialState = {
    user: {},
    errors: {
        login: {}
    }
}

export const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        formReset: (state, action) => {
            state.errors.login = {};
        },

        loginSuccessful: (state, action) => {
            if (action.payload.email) {
                state.user = {
                    email: action.payload.email,
                };
                user.login(action.payload.token);
            }
        },

        authenticationSuccessful: (state, action) => {
            if (action.payload.email) {
                state.user = {
                    email: action.payload.email,
                };
            }
        },

        loginFailure: (state, action) => {
            state.errors.login = action.payload;
        },

        loggedOut: (state, action) => {
            state.user = {};
            user.logout();
        }
    },
})

export const { loginSuccessful, loginFailure, authenticationSuccessful, loggedOut, formReset } = loginSlice.actions
export default loginSlice.reducer

export const login = (data: any) => apiCallBegan({
    url: "/login",
    method: "POST",
    data,
    onStart: formReset.type,
    onSuccess: loginSuccessful.type,
    onError: loginFailure.type
});

export const authenticate = () => apiCallBegan({
    url: "/authenticate",
    method: "GET",
    onSuccess: authenticationSuccessful.type,
    onError: loggedOut.type,
});

export const logout = () => apiCallBegan({
    url: "/logout",
    method: "POST",
    onSuccess: loggedOut.type,
});
