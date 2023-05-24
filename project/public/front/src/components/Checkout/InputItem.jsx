import React from 'react';

const InputItem = ({placeholder,content,full}) => {
  return (
    <div className={`${full?'inputfull':'InputItem'}`} >
        <div className='inputPlaceholder' >{placeholder}</div>
        <input  placeholder={content} />
    </div>
  );
}

export default InputItem;
