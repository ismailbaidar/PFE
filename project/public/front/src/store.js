import { configureStore } from "@reduxjs/toolkit";
import Product from "./features/Products";
import Categorie from "./features/CategorieSlice";
import Spect from "./features/SpectSlice";
import Brand from "./features/BrandSlice";

const Store = configureStore({ reducer: {Product,Categorie,Spect,Brand} });
export default Store;
