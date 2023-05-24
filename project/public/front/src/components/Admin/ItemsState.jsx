import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ItemsState = ({name,prc,Low,icon,color}) => {
  return (
    <div className='ItemsStateComponent' >
        <div className='H-ItemsStateComponent' >
        <span className='NameState' >{name}</span>
        <span className='StateIE'   style={{color:Low?"#d33":'green'}} > <FontAwesomeIcon icon={!Low?faAngleUp:faAngleDown} /> {prc}</span>
        </div>
        <div className='C-ItemsStateComponent' >
        <div className='T-ItemsStateComponent' >1500</div>
        <div className='I-ItemsStateComponent' style={{backgroundColor:color}} >{ <FontAwesomeIcon icon={icon}/>}</div>
        </div>
    </div>
  );
}

export default ItemsState;
