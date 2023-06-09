import { red } from "@mui/material/colors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addProduct = createAsyncThunk(
    "AddProduct",
    async (data, handel) => {
        // try {
        const form = new FormData();
        form.append("name", data.name);
        form.append("description", data.description);
        form.append("price", data.price);
        form.append("discount", data.discount);
        form.append("stock", data.stock);
        form.append("brand", data.brand);
        form.append("categorie", data.categorie);
        form.append("date", data.date);
        form.append("options", JSON.stringify(data.options));
        data.images.forEach((e) => form.append("images[]", e));

        return axios
            .post("http://localhost:8000/api/product/", form)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);

export const ModifierProduct = createAsyncThunk(
    "ModifierProduct",
    async (data, handel) => {
        // try {

        const form = new FormData();
        form.append("name", data.name);
        form.append("description", data.description);
        form.append("price", data.price);
        form.append("discount", data.discount);
        form.append("stock", data.stock);
        form.append("brand", data.brand);
        form.append("categorie", data.categorie);
        form.append("options", JSON.stringify(data.options));
        form.append("oldImages", JSON.stringify(data.Oldimages));
        data.Newimages.forEach((e) => form.append("images[]", e));

        return axios
            .post("http://localhost:8000/api/product/" + data.id, form)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);

export const getProducts = createAsyncThunk("getProducts", async () => {
    return axios
        .get("http://localhost:8000/api/product")
        .then((res) => res.data)
        .catch((err) => console.log(err));
});

export const deleteProduct = createAsyncThunk("deleteProduct", async (data) => {
    return axios
        .delete("http://localhost:8000/api/product/" + data)
        .then((res) => res.data)
        .catch((err) => console.log(err));
});

export const getoneproduct = createAsyncThunk("getone", async (data) => {
    return axios
        .get("http://localhost:8000/api/product/" + data)
        .then((res) => res.data)
        .catch((err) => console.log(err));
});

const productSlice = createSlice({
    name: "products",
    initialState: { products: [], status: "", main: {} },
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, { payload }) => {
            state.status = payload.status;
        });
        builder.addCase(addProduct.pending, (state, { payload }) => {
            state.status = "pending";
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.products = payload.products;
        });
        builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
            state.status = payload.status;
        });
        builder.addCase(getoneproduct.fulfilled, (state, { payload }) => {
            state.main = payload.produit;
        });
        builder.addCase(ModifierProduct.fulfilled, (state, { payload }) => {
            state.status = payload.status;
        });
        builder.addCase(ModifierProduct.pending, (state, { payload }) => {
            state.status = "pending";
        });
    },
});

export default productSlice.reducer;
