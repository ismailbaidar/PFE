import React from 'react';
import img from '../../images/Setup-Game-SG-2-ARGB-5600G-Maroc-300x300.jpg'
import img1 from '../../images/RYZEN-q3crjgx5y3ilg06s3ndp3w88gofdfl2ckluo4w369g.png'
import img2 from '../../images/VEGA-AMD-q3criqloicmx94fmxfx0ygzhq5lxkvuajt4k304h3k.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <div className='card' >
    <div className='catImages' >
    <img src={img1} />
    <img src={img2} />
    </div>
    <img  src={img}/>
      <p  className='titleCard' >AMD RYZEN 5 4600G-VEGA 7</p>
      <div className='price' >
      <span className=' HightPrice' >3500.78 MAD</span>
      <span className='lowPrice' >2500.14 MAD</span>
      </div>
      <div className='hiddenButtons'>
      <button className='lireL' >Lire la suite</button>
      <button  className='Heart'>      <FontAwesomeIcon icon={faHeart}   />      </button>
      </div>
    </div>
  );
}

export default Card;
