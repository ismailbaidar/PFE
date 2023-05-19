import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ItemListCategorie = ({name,children,img}) => {
  return (
    <div  className='itemListCategorie' >
    <div className='infoItem'>
    {img && <img src={img} />}
      <p>{name}</p>
    </div>
      {children && <FontAwesomeIcon  id='icon' fontSize={'15px'} icon={faCaretRight} />}
        {children &&   <div className='childsItem' >
            {children.map(e=><ItemListCategorie name={e.name}  children={e.children} />)}
        </div>}
    </div>
  );
}

export default ItemListCategorie;
