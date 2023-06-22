import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ItemsState = ({name,prc,Low,icon,color,num}) => {
  return (
    <div className='ItemsStateComponent' >
        <div className='H-ItemsStateComponent' >
        <span className='NameState' >{name}</span>
        </div>
        <div className='C-ItemsStateComponent' >
        <div className='T-ItemsStateComponent' >{num}</div>
        <div className='I-ItemsStateComponent' style={{backgroundColor:color}} >{ <FontAwesomeIcon icon={icon}/>}</div>
        </div>
    </div>
  );
}

export default ItemsState;
