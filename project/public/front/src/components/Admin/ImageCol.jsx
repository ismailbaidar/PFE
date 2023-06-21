import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark } from "@fortawesome/free-solid-svg-icons";

const ImageCol=({img,del})=>{
    return <div className="imgCol" >
    <img src={'http://localhost:8000/storage/images/'+img} />
    <FontAwesomeIcon onClick={del} id='dimgcard' icon={faXmark} />
    </div>
}
export default ImageCol
