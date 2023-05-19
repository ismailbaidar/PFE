import React from 'react';
import img from '../../images/pc-gamer-setup-game-min-1.webp'
const CategorieCard = () => {
  return (
    <div className='CategorieCard' style={{backgroundImage:`url(${img})`}} >
        <div  id='layer' ></div>
        <h2>PC Gamer</h2>
        <button className='ajtBtn' >AJOUTER</button>

    </div>
  );
}

export default CategorieCard;
