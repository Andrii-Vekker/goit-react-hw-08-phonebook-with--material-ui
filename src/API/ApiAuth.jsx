import axios from "axios";

export const instance = axios.create({
        baseURL: "https://connections-api.herokuapp.com",
    });

const setToken = (token) => {
    if (token) {
        return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    };
    instance.defaults.headers.common.Authorization = "";
};

export const signup = async (signupData) => {
    const { data } = await instance.post("/users/signup", signupData);
    instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
}

export const login = async (loginData) => {
    const { data } = await instance.post("/users/login", loginData);
    instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
};

export const logOut = async () => {
    const { data } = await instance.post("/users/logout")
   return data
};

export const getCurrentUser = async (token) => {
       try {
        setToken(token);
        const { data } = await instance.get("/users/current");
        return data
    } catch (error) {
        setToken();
        throw error
    };
};