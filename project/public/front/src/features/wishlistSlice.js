import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { wishlist: [] };

export const toggleWishlist = createAsyncThunk(
    "wishlist/togglewishlist",
    async (data) => {
        axios.post("http://127.0.0.1:8000/api/toggleProducts", data);
    }
);

export const getWishlist = createAsyncThunk(
    "wishlist/getWishlist",
    async (data) => {
        const cart = createAsyncThunk((state) => state.cartReducer.cart);
        return axios.get("http://127.0.0.1:8000/api/getWishlist");
    }
);

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    extraReducers: {
        [toggleWishlist.fulfilled]: (state, { payload }) => {
            state.wishlist = payload.wishlist;
            console.log(payload.message);
        },
    },
});

export default wishlistSlice;
