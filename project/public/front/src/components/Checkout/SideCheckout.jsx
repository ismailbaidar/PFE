import React from 'react';
import AdressItem from './AdressItem';
import PayementItem from './PayementItem';

const SideCheckout = ({setPrcCoupon,setPrcity}) => {
    const [_toogle,setToogle]=React.useState(false)
  return (
    <div className='SideCheckout' >
    <div className='TitleREH'>Checkout</div>
    <AdressItem setPrcity={setPrcity}  setToogle={setToogle} />
    <PayementItem  setPrcCoupon={setPrcCoupon} show={_toogle} />
    </div>
  );
}

export default SideCheckout;
