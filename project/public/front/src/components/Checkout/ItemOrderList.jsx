import React from 'react';
import img from '../../images/Y60-i9-13900K-RTX-4070-Setup-Game.jpg'
const ItemOrderList = ({data}) => {
  return (
    <div className='ItemOrderList' >
    <div className="cardAndPm" >
    <img  src={'http://localhost:8000/storage/images/'+data.images[0].url} />
    <div className='INfom' >
    <p id='TitleOrderListm' >{data.name} </p>
    <p id='PriceOrderListm' >{data.qte} </p>
    </div>
    </div>
    <div className='totalPrice' >
    {data.qte*data.price-data.discount*data.price/100} MAD
    </div>
    
    </div>
  );
}

export default ItemOrderList;
