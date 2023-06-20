import React, { useState,useEffect } from 'react';
import SideFilter from '../components/Allproducts/SideFilter';
import '../styles/Allproducts.css'
import ProductSide from '../components/Allproducts/ProductSide';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productSlice";
const AllProducts = () => {
    const dispatch = useDispatch();
    const [items,setItems]=useState({})
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const products = useSelector((state) => state.productReducer.products);
  return (
    <div className='Main' >
        <SideFilter items={items} pushItem={setItems} />
        <ProductSide  products={products} items={items} removeItem={setItems}  />
    </div>
  );
}

export default AllProducts;
