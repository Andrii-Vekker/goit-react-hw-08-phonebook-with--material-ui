import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup, logOut, getCurrentUser } from "API/ApiAuth";
import { toast } from "react-toastify";
 
export const signupUser = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const res = await signup(data);
            return res;
        } catch ({ response }) {
           if (response.status === 400) {
            return (rejectWithValue(toast.error("User creation error")))
           }
            return rejectWithValue(toast.error("Server error"))
        };
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
      try {
          const res = await login(data);
        return res
      } catch ({ response }) {
          const error = {
              status: response.status,
              message: response.data.message
          }
          return rejectWithValue(error, toast.error("Incorrect email or password"))
      }
    }
);

export const logOutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const res = await logOut();
            return res
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error)
        };
    }

);

export const currentUser = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState()
            const res = await getCurrentUser(auth.token);
            return res
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error)
        };
    }

);