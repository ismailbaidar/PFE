import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemSide = ({main,name,pushItem,items}) => {
    const [check,setCheck]=useState(false)
    useEffect(()=>{
        if(items.categorie){
            if(items.categorie.find(e=>e==name)){
                setCheck(true)
            }
        }
        else{
            setCheck(false)
        }
    },[items])
    const push=()=>{
        pushItem(prev=>{
            let na=prev
            let categorie=prev?.categorie || []
            if(categorie.find(e=>e==name)){
                let n =categorie.filter(e=>e!=name)
               na={...prev,categorie:n}
            }
            else{
                na={...prev,categorie:[...categorie,name]}
            }
            if(na.categorie.length==0){
                delete na.categorie
            }
            return na

        })
    }
  return (
    <div className={`itemSide  ${check?'activeI':''}  ${main?'mainItem':''}`} >
            <div id="checkbox" className={check?'activeCheckbox':''}  onClick={()=>{setCheck(!check);push()}} >
            {check && <FontAwesomeIcon style={{color:'#fff'}} icon={faCheck} />}
            </div>
            <p>{name}</p>
            </div>
  );
}

export default ItemSide;
