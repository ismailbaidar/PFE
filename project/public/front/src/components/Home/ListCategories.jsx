import React from 'react';
import ItemListCategorie from './ItemListCategorie';
import img from '../../images/Mediamodifier-Design-Template(10).png'
const ListCategories = () => {
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
    <div className='listCategorie' >
      {list.map((e)=><ItemListCategorie name={e.name} img={e.img} children={e.children} />)}
    </div>
  );
}

export default ListCategories;
