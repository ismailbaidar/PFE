import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Model from './Model';

const Search = ({hide}) => {
    const [search,setSearch]=useState(false);
  return (
    <div className='search' >
    <div className='searchBox'>
    <input className={search?'show':''} />
    <FontAwesomeIcon icon={faMagnifyingGlass}  onClick={()=>setSearch(!search)} />
    </div>
    <Model/>
    <FontAwesomeIcon onClick={()=>hide(false)} id='iconeCloseS' icon={faXmark} />
    </div>
  );
}

export default Search;
