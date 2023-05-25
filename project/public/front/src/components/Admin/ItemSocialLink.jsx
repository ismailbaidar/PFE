import React from 'react';
import InputItem from './InputItem';
const ItemSocialLink = ({img}) => {
  return (
    <div   className='ItemSocialLinks'>
    <img  className='iconSocial' src={img} />
    <div className='InfoItemSocial' >
        <InputItem placeholder={'name'}  type={'text'} />
        <InputItem placeholder={'Link'}  type={'text'} />
        <button className='saveBtn' >Save</button>
    </div>
    </div>
  );
}

export default ItemSocialLink;
