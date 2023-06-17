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

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [updateUser.fulfilled]: (state, { payload }) => {
            localStorage.setItem("AUTH_TOKEN", payload.AUTH_TOKEN);
        },
    },
});

export default userSlice.reducer;
