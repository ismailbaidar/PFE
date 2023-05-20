import React from 'react';
import Card from './Card';
import "../../styles/cardContainer.css"

const CardContainer = () => {
  return (
    <div className='cardAndFilter' >
    <div  className="filters  ">
    <span>TOUT</span>
    <span>PC GAMER</span>
    <span>PC PORTABLE</span>
    </div>
    <div className="cards" >
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  );
}

export default CardContainer;
