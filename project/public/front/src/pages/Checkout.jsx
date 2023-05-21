import React from 'react';
import '../styles/Checkout.css'
import SideCheckout from '../components/Checkout/SideCheckout';
import SideSummary from '../components/Checkout/SideSummary';
const Checkout = () => {
  return (
    <div className='Checkout' >
    <SideCheckout/>
    <SideSummary/>
    </div>
  );
}

export default Checkout;
