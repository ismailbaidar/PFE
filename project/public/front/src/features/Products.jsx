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
        form.append("brand", data.brand);
        form.append("categorie", data.categorie);
        form.append('options',JSON.stringify(data.options))
        data.images.forEach((e) => form.append("images[]", e));
        console.log(form.get("images[1]"))

        return axios
            .post("http://localhost:8000/api/product/", form)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    }
);




export const getProducts = createAsyncThunk('getProducts',async()=>{
    return axios.get('http://localhost:8000/api/product')
    .then(res => res.data)
    .catch(err  => console.log(err))
})

const Product = createSlice({
    name: "products",
    initialState: { products: [], status: "uyr" },
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.status = payload.status;
        });
        builder.addCase(getProducts.fulfilled,(state,{payload})=>{
            state.products=payload.products
        })
    },
});

export default Product.reducer;