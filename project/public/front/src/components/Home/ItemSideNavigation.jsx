import React, { useState } from 'react';
import { faAngleDown, faAngleRight, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ItemSideNavigation = ({name,children,img,gap}) => {
    const [toogle,setToogle]=useState(false);
  return (
    <div className='ItemSide' style={{color:toogle?'#d33':''}}  onClick={()=>setToogle(pre=>!pre)} >
    <div className='ItemSideNavigation' style={{paddingLeft:gap+'px'}} >
    <div className='infoItem'>
    {img && <img src={'http://localhost:8000/storage/images/'+img} />}
      <p>{name}</p>
    </div>
      {children.length>0 && ( toogle ? <FontAwesomeIcon  id='iconI' fontSize={'15px'} icon={faAngleDown}  />:<FontAwesomeIcon   id='iconI' icon={faAngleRight} />)}
    </div>
            {children &&  (  toogle &&  <div  onClick={(e)=>e.stopPropagation()} className='itemsNavigation' >
                {children.map(e=><ItemSideNavigation   gap={gap+10}  name={e.name}  children={e.children} />)}
            </div>)}
    </div>
  );
}

export default ItemSideNavigation;
