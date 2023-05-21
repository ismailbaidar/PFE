import React, { useState } from 'react';
import  img from '../images/Untitled_design-removebg-preview.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SectionSideNavigation from '../components/Home/SectionSideNavigation';
import Search from './Search';
const Navbar = () => {
    const [toogle,setToogle]=useState(false)
    const [search,setSearch]=useState(false)
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

    <FontAwesomeIcon  onClick={()=>setSearch(true)} icon={faMagnifyingGlass}  />
    </div>
         {toogle && <SectionSideNavigation set={setToogle}  />}
         {search && <Search hide={setSearch} />}
    </div>
  );
}

export default Navbar;
