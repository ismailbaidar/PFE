import { configureStore } from "@reduxjs/toolkit";
import Product from "./features/Products";

const Store = configureStore({ reducer: Product });
export default Store;
