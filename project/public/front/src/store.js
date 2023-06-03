import { configureStore } from "@reduxjs/toolkit";
import Product from "./features/Products";
import Categorie from "./features/CategorieSlice";

const Store = configureStore({ reducer: {Product,Categorie} });
export default Store;
