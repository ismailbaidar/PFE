import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addProduct = createAsyncThunk(
    "AddProduct",
    async (data, handel) => {
        console.log(data, "tyt");
        // try {
        const form = new FormData();
        form.append("name", data.name);
        form.append("description", data.description);
        form.append("price", data.price);
        form.append("discount", data.discount);
        form.append("stock", data.stock);
        form.append("brand", 1);
        form.append("categorie", 1);
        data.images.map((e) => {
            form.append("images[]", e);
            console.log(e);
        });

        return axios
            .post("http://localhost:8000/api/product/", form)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);

const Product = createSlice({
    name: "products",
    initialState: { products: [], status: "uyr" },
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, { payload }) => {
            state.status = payload.status;
            console.log(payload);
        });
        /* builder.addCase(addProduct.pending, (state, { payload }) => {
            state.status = payload.status;
        });
        builder.addCase(addProduct.rejected, (state, { payload }) => {
            console.log(state.status, payload);
        }); */
    },
});

export default Product.reducer;
