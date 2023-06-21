import { faAngleLeft, faAngleRight, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import InputItem from "../components/Admin/InputItem";

const EditeCollection = () => {
    const ref=useRef()
    const [disabled,setDisabled]=useState({left:true,right:false});
    const [name,setName]=useState();
    const [description,setDescription]=useState();

  return (
    <div className='EditeCollection' >

    <div className="LeftSide" >

    <div className='MainImage' >
    <img src='../../images/asusdisplay2.webp'  />
    </div>

    <div className='containerCollImg' ref={ref} >
    <div className='imagesCol' >
    <div className="imgCol" >
    <img src='../../images/asusdisplay3.webp'  />
    </div>
    <div className="imgCol" >
    <img src='../../images/asusdisplay3.webp'  />
    </div>
    <div className="imgCol" >
    <img src='../../images/asusdisplay3.webp'  />
    </div>
    <div className="imgCol" >
    <img src='../../images/asusdisplay4.webp'  />
    </div>
    <div className="imgCol" >
    <img src='../../images/asusdisplay.webp'  />
    </div>
    <div className="imgCol" >
    <img src='../../images/asusdisplay.webp'  />
    </div>
    <div className="imgCol" >
    <img src='../../images/asusdisplay.webp'  />
    </div>
    </div>
    </div>

    <div className='AddproductToCollection' >
    <div className='inputSearch' >
    <input/>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
    <div className='searchItems' >
    <div className='ItemsResult' >

        <div className='itemResult' >
            <img src='../../images/asusdisplay.webp'  />
            <p>Asus Ecran 22 pouce </p>
            <button><FontAwesomeIcon icon={faPlus} /></button>
        </div>

        <div className='itemResult' >
            <img src='../../images/asusdisplay.webp'  />
            <p>Asus Ecran 22 pouce </p>
            <button><FontAwesomeIcon icon={faPlus} /></button>
        </div>

        <div className='itemResult' >
            <img src='../../images/asusdisplay.webp'  />
            <p>Asus Ecran 22 pouce </p>
            <button><FontAwesomeIcon icon={faPlus} /></button>
        </div>

        <div className='itemResult' >
            <img src='../../images/asusdisplay.webp'  />
            <p>Asus Ecran 22 pouce </p>
            <button><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    </div>
    </div>
    </div>
    </div>

    <div className='rightSide'>
    <InputItem
    placeholder={"Name"}
    type={"text"}
    input={(e)=>setName(e.target.value)}
    />
    <InputItem
    placeholder={"Description"}
    type={"textarea"}
    input={(e)=>setName(e.target.value)}
    />
    <button className='AjouterProduit' style={
    {margin: '10px 0',
      marginLeft: 'auto',
      display: 'block'
    }} >Modify Collection </button>
    </div>

    </div>
  );
}

export default EditeCollection;
