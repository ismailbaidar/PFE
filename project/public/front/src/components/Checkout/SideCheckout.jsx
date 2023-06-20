import React from 'react';
import AdressItem from './AdressItem';
import PayementItem from './PayementItem';

const SideCheckout = () => {
    const [_toogle,setToogle]=React.useState(false)
  return (
    <div className='SideCheckout' >
    <div className='TitleREH'>Checkout</div>
    <AdressItem setToogle={setToogle} />
    <PayementItem show={_toogle} />
    </div>
  );
}

export default SideCheckout;
