import React, { useRef, useState } from 'react';

import img2 from '../../images/logitech-G502-hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import ItemSliderMnagement from './ItemSliderMnagement';
const SliderContentManagement = () => {
    const [items,setItems]=useState([img2,img2,img2,img2])
    const [selected,setSelected]=useState();
    const deleteItems=(id)=>{
        setItems((prev)=>{
            let n=prev
            n=n.filter((e,i)=>i!==id)
            return n
        })
    }

  return (
    <div className='SliderContainerM' >

        <div className='SliderContentManagement'>
            <div className='sliderItemsManagement'>

                {items.map((e,i)=><ItemSliderMnagement deleteItem={()=>deleteItems(i)}  id={i} selected={selected} setSelected={setSelected} img={e} />)}

            </div>

        </div>
        <div className='AddPicSlider' >
       <label htmlFor='fileadd' ><FontAwesomeIcon icon={faPlus} /></label>
        <input id='fileadd'  onChange={(e)=>setItems([URL.createObjectURL(e.target.files[0]),...items])}  type='file' />
        </div>

    </div>
  );
}

export default SliderContentManagement;
