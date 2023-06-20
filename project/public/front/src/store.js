import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import Categorie from "./features/CategorieSlice";
import Spect from "./features/SpectSlice";
import Brand from "./features/BrandSlice";
import cartReducer from "./features/cartSlice";
import CheckoutSlice from "./features/CheckoutSlice";
import CollectionReducer from "./features/CollectionSlice";

const Store = configureStore({
    reducer: { productReducer, Categorie, Spect, Brand, cartReducer,CollectionReducer,CheckoutSlice },
});
export default Store;
