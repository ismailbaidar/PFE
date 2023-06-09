import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, { payload }) => {
            let products = state.cart;

            products = [...products, payload];
            localStorage.setItem("cart", JSON.stringify(products));
            state.cart = products;
        },
        updateCart: (state, { payload }) => {
            console.log("update", payload);
            let products = state.cart;
            products = products.map((p) => (p.id == payload.id ? payload : p));
            localStorage.setItem("cart", JSON.stringify(products));
            state.cart = products;
        },
    },
});

export const { updateCart, addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
