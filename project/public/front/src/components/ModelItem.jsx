import React from 'react';
import img from '../images/Y60-i9-13900K-RTX-4070-Setup-Game.jpg'
const ModelItem = ({item}) => {
  return (
    <div className='ModelItem' >
        <img   src={'http://localhost:8000/storage/images/'+item.images[0].url} />
        <p>{item.name}</p>
    </div>
  );
}

export default ModelItem;
