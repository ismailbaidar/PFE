import React from 'react';
import ItemSideNavigation from './ItemSideNavigation';
import img from '../../images/Mediamodifier-Design-Template(10).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

const SideNavigation = ({set}) => {
    let list=[
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'},{name:'Iphone'},{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
        {name:'PC Gamer',img:img,children:[{name:'Laptop',children:[{name:'Iphone'}]}]},
]
  return (
    <div className='side' >
        <span className='close-button-container'>
    <FontAwesomeIcon   onClick={()=>set(false)}   id='close' icon={faAngleLeft} /></span>
    {list.map(e=><ItemSideNavigation gap={20} name={e.name} children={e.children} img={'../../icons/casque.jpg'} />)}
    </div>
  );
}

export default SideNavigation;
