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
        .then((res) => console.log(res.data))
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
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [updateUser.fulfilled]: (state, { payload }) => {},
        [login.fulfilled]: (state, { payload }) => {
            console.log(payload.AUTH_TOKEN);
            payload.AUTH_TOKEN &&
                localStorage.setItem("AUTH_TOKEN", payload.AUTH_TOKEN);
        },
        [logout.fulfilled]: (state, { payload }) => {
            console.log(state);
            localStorage.setItem("AUTH_TOKEN", "null");
        },
        [loginGoogle.fulfilled]: (state, { payload }) => {
            console.log(payload.AUTH_TOKEN);
            payload.AUTH_TOKEN &&
                localStorage.setItem("AUTH_TOKEN", payload.AUTH_TOKEN);
        },
    },
});

export default userSlice.reducer;
