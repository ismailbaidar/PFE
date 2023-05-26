import React from 'react';

const InputItem = ({placeholder,content,full,value}) => {
  return (
    <div className={`${full?'inputfull':'InputItem'}`} >
        <div className='inputPlaceholder' >{placeholder}</div>
        <input  value={value} placeholder={content} />
    </div>
  );
}

export default InputItem;
