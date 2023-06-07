import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const ImageCard = ({img,del}) => {
  return (
    <div className='ImageCard' >
    <img  src={img} />
    <FontAwesomeIcon onClick={del} id='dimgcard' icon={faXmark} />
    </div>
  );
}

export default ImageCard;
