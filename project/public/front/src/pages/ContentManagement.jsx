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
    <SliderContentManagement name={'Home'} key={1} />

    <span className='PlaceholderSliders'>Login</span>
    <SliderContentManagement  name='Login' key={2} />
    <span className='PlaceholderSliders'>Register</span>
    <SliderContentManagement name={'Register'} key={3} /> 
    </div>
  );
}

export default ContentManagement;
