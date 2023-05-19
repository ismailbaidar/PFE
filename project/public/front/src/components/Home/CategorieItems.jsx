import React from 'react';
import CategorieCard from './CategorieCard';

const CategorieItems = () => {
  return (
    <div  className='CategoriesContainer' >
    <div  className='header'>
    <p>AIMÉ PAR LA PLUPART</p>
    <h2>Top Catégories</h2>
    </div>

    <div className='categories' >
    <CategorieCard/>
    <CategorieCard/>
    <CategorieCard/>
    <CategorieCard/>
    <CategorieCard/>
    </div>
    </div>
  );
}

export default CategorieItems;
