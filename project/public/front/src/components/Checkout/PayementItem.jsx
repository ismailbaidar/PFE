import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ItemMethod from './ItemMethod';
import paypal from '../../images/580b57fcd9996e24bc43c530.png'
import cash from '../../images/546-5464937_cash-payment-icon-cash-money-icon-png-transparent.png'
const PayementItem = () => {
  return (
    <div className='PayementItem itemSideP' >

    <div className='itemHead' >
    <div className='HTitle' >
    <FontAwesomeIcon  id={'iconeSuccessDisabled'} icon={faCircleCheck} />
    <span className='titleHead' >1-Payement</span>
    </div>
    </div>

    <div className='PaymentContent  ' >
    <span className="PaymentContent-header" >Comment vous voulez payer votre order ?</span>
    <div className='Methodes'>
    <ItemMethod name={'Paypal'} img={paypal}  />
    <ItemMethod name={'Payer en Livretion'} img={cash}  />
    </div>
    <span className="PaymentContent-header" >Do you have A discount?</span>
    <div className='InputDicount' >
    <input/>
    <button>Ajouter Coupon</button>
    </div>
    <span className="PaymentContent-ter" >on clickent sur le button vous accepter les conditions</span>
    <button className='placerOrder' >Place Order</button>

    </div>

    </div>
  );
}

export default PayementItem;
