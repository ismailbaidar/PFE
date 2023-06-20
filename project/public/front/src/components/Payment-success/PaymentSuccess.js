import React from 'react'
import '../../styles/payment-success.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';


function PaymentSuccess() {
  return (
    <div className='pay'>
        <div className='Pay-success'>
        <h1 className='Pay-success-h1'>Payment successfull!</h1>
        <FontAwesomeIcon className='Pay-success-icon' icon={faSquareCheck} />
        <div className='Pay-success-container'>
            <div className='Pay-success-cc1'>
                <p>Payment type</p>
                <p>Bank</p>
                <p>Mobile</p>
                <p>Email</p>
                <p className='amount-paid'>Amount paid</p>
                <p>Transaction id</p>
            </div>
            <div className='Pay-success-cc2'>
                <p>Net Banking</p>
                <p>CIH Bank</p>
                <p>0623504398</p>
                <p>hellow@gmail.com</p>
                <p className='amount-paid'>500.00 MAD</p>
                <p>1234987239847</p>
            </div>
        </div>
        <div className='Pay-success-button'>
            <div className='Pay-success-close'>CLOSE</div>
        </div>
    </div>
    </div>
  )
}

export default PaymentSuccess
