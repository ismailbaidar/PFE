import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import Categorie from "./features/CategorieSlice";
import Spect from "./features/SpectSlice";
import Brand from "./features/BrandSlice";
import cartReducer from "./features/cartSlice";
import CheckoutSlice from "./features/CheckoutSlice";
import CollectionReducer from "./features/CollectionSlice";
import showReducer from "./features/ShowSlice";
import userReducer from "./features/userSlice";
import wishlistReducer from "./features/wishlistSlice";
const Store = configureStore({
    reducer: {
        productReducer,
        Categorie,
        Spect,
        Brand,

        cartReducer,
        showReducer,
        userReducer,
        CollectionReducer,
        CheckoutSlice,
        wishlistReducer,
    },
});
export default Store;
