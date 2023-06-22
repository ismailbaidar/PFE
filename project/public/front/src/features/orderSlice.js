import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    orders: [],
};

export const getUserOrders = createAsyncThunk(
    "order/getUserOrders",
    async (data) => {
        return axios
            .get(
                `http://127.0.0.1:8000/api/getUserOrders/${localStorage.getItem(
                    "UID"
                )}`
            )
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);

const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: {
        [getUserOrders.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.orders = payload;
        },
    },
});

export default orderSlice.reducer;
