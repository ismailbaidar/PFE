import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ItemSliderMnagement = ({img,selected,id,setSelected,deleteItem,isFile}) => {
    const [model,setModel]=useState(false)
    console.log(img)
  return (
    <div className='ItemSliderMnagement'  onClick={()=>setSelected(id)} >
            <img src={!isFile?'http://localhost:8000/storage/images/'+img.img:img} />
            { selected===id && <div className="LayerItemSliderMnagement">
           { !model && <FontAwesomeIcon  onClick={()=>setModel(true)} id='iconeDeleteSliderItem' icon={faTrash} />}
            {model &&
                <div  className='modelDeleteMn' >
                   <p className='h-modelDMn' > Are you sure ?</p>
                   <div className='containerBtnMn' >
                   <button className='RefuseModelDeleteBtn'  onClick={()=>{
                    setModel(false);
                    setSelected()
                }} >Non</button>
                   <button  className='AcceptModelDeleteBtn'
                   onClick={()=>{
                    setModel(false);
                    setSelected()
                    deleteItem()
                }}
                    >Oui</button>
                   </div>
                </div>}
            </div>}
    </div>
  );
}

export default ItemSliderMnagement;
