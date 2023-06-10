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
            let products = state.cart;
            products = products.map((p) =>
                p.id == payload.id ? { ...p, qte: payload.qte } : p
            );
            localStorage.setItem("cart", JSON.stringify(products));
            state.cart = products;
        },
        deleteProductFromCart: (state, { payload }) => {
            let products = state.cart;
            products = products.filter((p) => p.id !== payload);

            localStorage.setItem("cart", JSON.stringify(products));
            state.cart = products;
        },
        clearCart: (state) => {
            localStorage.setItem("cart", JSON.stringify([]));
            state.cart = [];
        },
    },
});

export const {
    updateCart,
    addProductToCart,
    deleteProductFromCart,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
