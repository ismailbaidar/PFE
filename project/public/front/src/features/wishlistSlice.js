import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { wishlist: [] };

export const toggleWishlist = createAsyncThunk(
    "wishlist/togglewishlist",
    async (dataForm) => {
        const data = new FormData();
        data.append("user", dataForm.user);
        data.append("product", dataForm.product);
        return axios
            .post("http://127.0.0.1:8000/api/toggleProducts", data)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);

export const getWishlist = createAsyncThunk(
    "wishlist/getWishlist",
    async (data) => {
        const cart = createAsyncThunk((state) => state.cartReducer.cart);
        return axios
            .get(`http://127.0.0.1:8000/api/getUserWishlist/${data}`)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    extraReducers: {
        [toggleWishlist.fulfilled]: (state, { payload }) => {
            state.wishlist = payload.wishlist;
        },
        [getWishlist.fulfilled]: (state, { payload }) => {
            state.wishlist = payload;
        },
    },
});

export default wishlistSlice.reducer;
