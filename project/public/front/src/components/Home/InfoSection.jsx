import React from 'react';
import img from '../../images/pc-gamer-setup-game-min-1.webp'

const InfoSection = () => {
  return (
    <div className='CategorieCard setH ' style={{backgroundImage:`url(${img})`}} >
      <div  id='layer'></div>
      <h2>Des PC nouvelle génération</h2>
      <p>Offrez-vous une meilleure expérience grâce à une panoplie de choix de PC nouvelle génération.</p>
      <button className="ajtBtn" >JACHETE</button>
    </div>
  );
}

export default InfoSection;
