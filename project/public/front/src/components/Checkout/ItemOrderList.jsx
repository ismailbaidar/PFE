import React from 'react';
import img from '../../images/Y60-i9-13900K-RTX-4070-Setup-Game.jpg'
const ItemOrderList = () => {
  return (
    <div className='ItemOrderList' >
    <div className="cardAndPm" >
    <img  src={img} />
    <div className='INfom' >
    <p id='TitleOrderListm' >RYZEN 5 </p>
    <p id='PriceOrderListm' >200 </p>
    </div>
    </div>
    <div className='totalPrice' >
    400 MAD
    </div>
    
    </div>
  );
}

export default ItemOrderList;
