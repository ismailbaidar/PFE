import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import Categorie from "./features/CategorieSlice";
import Spect from "./features/SpectSlice";
import Brand from "./features/BrandSlice";
import cartReducer from "./features/cartSlice";
import showReducer from "./features/ShowSlice";
const Store = configureStore({
    reducer: {
        productReducer,
        Categorie,
        Spect,
        Brand,
        cartReducer,
        showReducer,
    },
});
export default Store;
