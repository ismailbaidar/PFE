import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ItemSliderMnagement = ({img,selected,id,setSelected,deleteItem}) => {
    const [model,setModel]=useState(false)
  return (
    <div className='ItemSliderMnagement'  onClick={()=>setSelected(id)} >
            <img src={img} />
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
