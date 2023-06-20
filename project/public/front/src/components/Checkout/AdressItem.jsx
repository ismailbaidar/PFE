import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import InputItem from './InputItem';
import {useSelector} from 'react-redux'
import FlashCard from "../Flash card/FlashCard";
import axios from 'axios'
const AdressItem = ({setToogle,setPrcity}) => {
    const data=useSelector(state=>state.CheckoutSlice.data)
    const [showError,setError]=React.useState()
    const [cities,setCities]=React.useState([])
    React.useEffect(()=>{
        ( async()=>{
         axios.get('http://localhost:8000/api/getShippingcity')
         .then(res=>setCities(res.data.all));
        })()
     },[])

     React.useEffect(()=>{
        console.log(data)
        console.log(cities.find(e=>e.id==data.city),data.ville)
        setPrcity(cities.find(e=>e.id==data.ville))
     },[data.ville,cities])

    const confirm=()=>{
        console.log(data,Object.entries(data).some(([key,value])=>value==''))
        if(Object.entries(data).some(([key,value])=>value=='')){
            return ()=>{setError(true);setToogle(false);}
        }
        setToogle(true)
    }
  return (
    <div className='AdressItem itemSideP ' >
    <div className='itemHead' >
        <div className='HTitle' >
        <FontAwesomeIcon  id={'iconeSuccess'} icon={faCircleCheck} />
        <span className='titleHead' >1-Adresse</span>
        </div>
    </div>
    <div className='itemContent' >
        <InputItem   placeholder={'name'} />
        <InputItem   placeholder={'prenom'} />
        <InputItem full  placeholder={'adress'} />
        <InputItem   placeholder={'postal'} />
        <InputItem  select options={cities}  placeholder={'ville'} />
    </div>
    <button className='Confirm' onClick={()=>confirm()} >
    Confirm
    </button>
    <div className='errorDi' >
            {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}
    </div>
    </div>
  );
}

export default AdressItem;
