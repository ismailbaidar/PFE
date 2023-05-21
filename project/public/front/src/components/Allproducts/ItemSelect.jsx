import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ItemSelect = ({pushItem,name,items}) => {
    console.log(items[name],name,'from ')
    const push=(e)=>{
        pushItem((prev)=>{
            let N = prev
            let i=e.target.options[e.target.selectedIndex].value
            if(i==''){
                delete N[name]
            }
            else{
                N = {...prev,[name]:[e.target.options[e.target.selectedIndex].value]}
            }
            console.log(N,'---')
            return N
        })
    }


  return (

        <select onChange={(e)=>push(e)}  className='itemSelect' >
        <option value={''} selected={items[name]===undefined} >{name}</option>
        {Array.from(Array(6)).map((e,i)=><option selected={items[name]&&i==items[name][0]} >{i}</option>)}
        </select>
  );
}

export default ItemSelect;
