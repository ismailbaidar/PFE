import React from 'react';
import SliderContentManagement from '../components/Admin/SliderContentManagement';
import img from '../images/Instagram.parspng.com-5.webp'
import img1 from '../images/facebook-4-xxl.png'
import img2 from '../images/telegram-3-xxl.png'
import ItemSocialLink from '../components/Admin/ItemSocialLink';
import FileIntem from '../components/Admin/FileIntem';
import { useState } from 'react';
import InputItem from '../components/Admin/InputItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ContentManagement = () => {
    const [imgS,setImage]=useState([])
    const [show,setShow]=useState(false)
  return (

    <div className='ContentManagement' >
    <p className='SlidersContentManagement'>Sliders</p>
    <span className='PlaceholderSliders'>Home</span>
    <SliderContentManagement />
    <span className='PlaceholderSliders'>Login</span>
    <SliderContentManagement />
    <span className='PlaceholderSliders'>Register</span>
    <SliderContentManagement />
    <p className='SlidersContentManagement'>Socials Links</p>
    <div className='socialLinksConatiner' >
       <ItemSocialLink img={img} />
       <ItemSocialLink img={img1} />
       <ItemSocialLink img={img2} />
       <div className='AddSlink' onClick={()=>setShow(true)}  >
       <p>+</p>
       {show && <div className='AjouterSocialLink' >
       <InputItem placeholder={'name'}  type={'text'} />
        <InputItem placeholder={'Link'}  type={'text'} />
        <FileIntem placeholder={'Social image'} files={imgS} AddFile={(e)=>{setImage([URL.createObjectURL(e.target.files[0])])}}  />
        <button className='saveBtn' >Save</button>
        <FontAwesomeIcon  id='iconeCloseS'   onClick={(e)=>{e.stopPropagation();setShow(false)}} icon={faXmark} />
       </div>}
       </div>
    </div>
    </div>
  );
}

export default ContentManagement;
