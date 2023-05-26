import React from 'react'

const InputItem = ({placeholder,type,value}) => {
  return (
    <div className='InputProduct' >
     <div className='placeholderPI' >{placeholder}</div>
      {type != 'select' ? <input value={value}   type={type} /> :<select ></select> }
    </div>
  )
}

export default InputItem
