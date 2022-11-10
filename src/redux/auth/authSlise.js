import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser, logOutUser, currentUser } from "./authOperations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null
};


const authSlise = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signupUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [signupUser.fulfilled]: (store, { payload }) => {
            store.user = payload.user;
            store.token = payload.token;
            store.loading = false;
            store.isLogin = true
        },
        [signupUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload
    
        },
        [loginUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [loginUser.fulfilled]: (store, { payload }) => {
            store.user = payload.user;
            store.token = payload.token;
            store.loading = false;
            store.isLogin = true
        },
        [loginUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload
    
        },
        [logOutUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [logOutUser.fulfilled]: (store) => {
            // store = initialState
            store.user = {};
            store.token = "";
            store.loading = false;
            store.isLogin = false
        },
        [logOutUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload
    
        },
        [currentUser.pending]: (store) => {
            store.loading = true;
            store.error = null
        },
        [currentUser.fulfilled]: (store, { payload }) => {
            store.user = payload;
            store.loading = false;
            store.isLogin = true
        },
        [currentUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload
    
        }
    }
});

export default authSlise.reducer
