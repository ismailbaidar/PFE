import React, { useState } from 'react';
import  img from '../images/Hero-Image.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SectionSideNavigation from './Home/SectionSideNavigation';
const Navbar = () => {
    const [toogle,setToogle]=useState(false)
  return (
    <div className={'Navbar'} >
    <div className='logo' >
    <FontAwesomeIcon id={'menu'} icon={faBars}  onClick={()=>setToogle(true)} />
      <img src={img}  />
    </div>

      <div className='Tabs' >
      <Link to={'Products'}  >Products</Link>
      <Link to={'Promotions'}  >Promotions</Link>
      <div className='count' >
      <span>5</span>
      <FontAwesomeIcon icon={faCartShopping}  />
      </div>
      <div className='count'>
      <span>4</span>
      <FontAwesomeIcon icon={faHeart}   />
      </div>

    <FontAwesomeIcon icon={faMagnifyingGlass}  />
    </div>
         {toogle && <SectionSideNavigation set={setToogle}  />}

    </div>
  );
}

export default Navbar;
