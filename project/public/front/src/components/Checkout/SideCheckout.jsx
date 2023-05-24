import React from 'react';
import AdressItem from './AdressItem';
import PayementItem from './PayementItem';

const SideCheckout = () => {
  return (
    <div className='SideCheckout' >
    <div className='TitleREH'>Checkout</div>
    <AdressItem/>
    <PayementItem/>
    </div>
  );
}

export default SideCheckout;
