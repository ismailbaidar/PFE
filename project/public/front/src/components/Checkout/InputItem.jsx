import React from 'react';
import {useDispatch} from 'react-redux'
import {changeData} from '../../features/CheckoutSlice'
const InputItem = ({placeholder,content,full,select,options}) => {

    const dispatch=useDispatch()
    console.log(options)

  if(select){
    return (
        <div className={`${full?'inputfull':'InputItem'}`} >
        <div className='inputPlaceholder' >{placeholder}</div>
        <select   onChange={(e)=>dispatch(changeData({name:placeholder,value:e.target.options[e.target.selectedIndex].value}))} >
    <option value='' >Chose a city</option>
    {options.length>0 && options.map(e=><option   value={e.id} >{e.city}</option>)}
    </select></div>)
  }

  return (
    <div className={`${full?'inputfull':'InputItem'}`} >
        <div className='inputPlaceholder' >{placeholder}</div>
        <input onChange={(e)=>dispatch(changeData({name:placeholder,value:e.target.value}))}    placeholder={content} />
    </div>
  );
}

export default InputItem;
