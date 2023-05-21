import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ItemFilters = ({item,value,removeItem}) => {
    const Remove=()=>{
        removeItem((prev)=>{
            delete prev[item]
            return {...prev};
        })
    }
  return (
    <div className='filterItem' onClick={Remove} >
    <span className='key' >{item}</span>:<span>{value.join(' - ')}</span>
    <FontAwesomeIcon  className="RmFilter" icon={faXmark} />
    </div>
  );
}

export default ItemFilters;
