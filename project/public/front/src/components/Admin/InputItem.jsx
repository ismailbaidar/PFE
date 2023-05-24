import React from 'react'

const InputItem = ({placeholder,type}) => {
  return (
    <div className='InputProduct' >
     <div className='placeholderPI' >{placeholder}</div>
      {type != 'select' ? <input type={type} /> :<select ></select> }
    </div>
  )
}

export default InputItem
