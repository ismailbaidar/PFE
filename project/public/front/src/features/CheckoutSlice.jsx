import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const checkoutWithCardPaymant = createAsyncThunk(
    "checkoutWithCardPaymant",
    async (data, { getState }) => {
        let form = new FormData();
        const dataItems = getState().CheckoutSlice.data;
        console.log(dataItems);
        form.append("nom", dataItems.name);
        form.append("prenom", dataItems.prenom);
        form.append("adress", dataItems.adress);
        form.append("postalCode", dataItems.postal);
        form.append("ville", dataItems.ville);
        form.append("tele", dataItems.tele);
        form.append("coupon", data);
        form.append(
            "products",
            JSON.stringify([
                { id: 2, qte: 4 },
                { id: 3, qte: 5 },
            ])
        );
        return axios
            .post("http://localhost:8000/api/checkout", form)
            .then((res) => res.data)
            .then((res) => (window.location.href = res.url))
            .catch((err) => console.log(err));
    }
);

const CheckoutSlice = createSlice({
    name: "CheckoutSlice",
    initialState: {
        status: "",
        data: { name: "", prenom: "", adress: "", postal: "", ville: "" },
    },
    reducers: {
        changeData: (state, { payload }) => {
            state.data = { ...state.data, [payload.name]: payload.value };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            checkoutWithCardPaymant.fulfilled,
            (state, { payload }) => {
                console.log(payload);
                state.status = payload.status;
            }
        );
        builder.addCase(
            checkoutWithCardPaymant.rejected,
            (state, { payload }) => {
                console.log(payload);
            }
        );
    },
});
export default CheckoutSlice.reducer;
export const { changeData } = CheckoutSlice.actions;
