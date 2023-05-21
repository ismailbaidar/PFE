import React from 'react';
import Card from '../Home/Card';
import ItemFilters from './ItemFilters';

const ProductSide = ({items,removeItem}) => {
    console.log(items,'items')
  return (
    <div className='ProductSide' >
    <div className='Items' >
    {Object.entries(items).map(([key,value],i)=><ItemFilters   removeItem={removeItem} key={i} item={key} value={value} />)}
    </div>
    <div className='info' >Nombre de résultats: 5 Produits</div>
    <div className='products' >
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
        
    </div>
  );
}

export default ProductSide;
