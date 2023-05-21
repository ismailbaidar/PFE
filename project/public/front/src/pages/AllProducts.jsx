import React, { useState } from 'react';
import SideFilter from '../components/Allproducts/SideFilter';
import '../styles/Allproducts.css'
import ProductSide from '../components/Allproducts/ProductSide';
const AllProducts = () => {
    const [items,setItems]=useState({})

  return (
    <div className='Main' >
        <SideFilter items={items} pushItem={setItems} />
        <ProductSide items={items} removeItem={setItems}  />
    </div>
  );
}

export default AllProducts;
