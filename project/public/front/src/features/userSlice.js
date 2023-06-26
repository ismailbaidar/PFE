import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
    console.log("hello");
    return axios
        .post("http://127.0.0.1:8000/api/updateUser", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
});

export const register = createAsyncThunk("user/register", async (data) => {
    return axios
        .post("http://127.0.0.1:8000/api/register", data)
        .then((res) => res.data)
        .catch((err) => console.log(err));
});

export const login = createAsyncThunk("user/login", async (data) => {
    return axios
        .post("http://127.0.0.1:8000/api/login", data)
        .then((res) => res.data)
        .catch((err) => console.log(err));
});

export const logout = createAsyncThunk("user/logout", async () => {
    return axios
        .post("http://127.0.0.1:8000/api/logout")
        .then((res) => res.data)
        .catch((err) => console.log(err));
});

export const loginGoogle = createAsyncThunk(
    "user/loginGoogle",
    async (data) => {
        const accessToken = data.accessToken;
        console.log(accessToken);
        const dataFetch = await fetch(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`,
            {
                method: "GET",
                redirect: "follow",
            }
        );
        const responseFetch = await dataFetch.json();
        if (responseFetch.email) {
            const formData = new FormData();
            formData.append("name", responseFetch.name);
            formData.append("email", responseFetch.email);
            return axios
                .post("http://localhost:8000/api/loginGoogle", formData)
                .then((res) => res.data)
                .catch((err) => console.log(err));
        }
    }
);

const initialState = {
    token: null,
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
            console.log("hello", state.token);
        },
    },
    extraReducers: {
        [updateUser.fulfilled]: (state, { payload }) => {},
        [login.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            console.log(payload);
            state.token = payload.AUTH_TOKEN;
            payload.AUTH_TOKEN &&
                localStorage.setItem("AUTH_TOKEN", payload.AUTH_TOKEN);
            localStorage.setItem("UID", payload.user.id);
            localStorage.setItem("user", JSON.stringify(payload.user));
            localStorage.setItem("role", payload.role);
        },

        [logout.fulfilled]: (state, { payload }) => {
            state.user = null;
            state.token = null;
            localStorage.setItem("AUTH_TOKEN", "null");
            localStorage.setItem("UID", "null");
            localStorage.setItem("user", "null");
            localStorage.setItem("role", "null");
        },
        [loginGoogle.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.user = payload.user;
            state.token = payload.AUTH_TOKEN;
            payload.AUTH_TOKEN &&
                localStorage.setItem("AUTH_TOKEN", payload.AUTH_TOKEN);
            localStorage.setItem("UID", payload.user.id);
            localStorage.setItem("user", JSON.stringify(payload.user));
            localStorage.setItem("role", payload.role);
        },
        [register.fulfilled]: (state, { payload }) => {
            console.log(payload);
            localStorage.setItem("AUTH_TOKEN", payload.AUTH_TOKEN);
            localStorage.setItem("user", JSON.stringify(payload.user));
            localStorage.setItem("role", payload.user.role);
            localStorage.setItem("UID", payload.user.id);
            state.user = payload.user;
            state.token = payload.AUTH_TOKEN;
            window.location.href = "http://localhost:3000/confirmationCode";
        },
    },
});
export const { setToken } = userSlice.actions;
export default userSlice.reducer;
