import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import ItemMethod from './ItemMethod';
import paypal from '../../images/580b57fcd9996e24bc43c530.png'
import cash from '../../images/546-5464937_cash-payment-icon-cash-money-icon-png-transparent.png'
import {checkoutWithCardPaymant} from '../../features/CheckoutSlice'
import {checkoutLivresion} from '../../features/CheckoutSlice'

const PayementItem = ({show,setPrcCoupon}) => {
    const dispatch = useDispatch()
    const coupon = React.useRef()
    const [couponItem,setCoupon] = React.useState({});
    const [status,setStatus] = React.useState();
    const [method,setMethod] = React.useState('');
    console.log(method)
    const data=useSelector(state=>state.CheckoutSlice.data)
    React.useEffect(()=>{
        if(couponItem.prc){
            setPrcCoupon(couponItem)
        }
    },[couponItem])
   const check=()=>{
        const form = new FormData()
        form.append('coupon',coupon.current.value)
        return axios.post('http://localhost:8000/api/checkCoupon',form)
        .then(res=>{setCoupon(res.data.coupon);setStatus(res.data.status)})
        .catch(err=>setStatus('non valid'))
   }
   const paimentLivression=()=>{
    dispatch(checkoutLivresion(coupon.current.value))

   }
  return (
    <div className='PayementItem itemSideP' >

    <div className='itemHead' >
    <div className='HTitle' >
    <FontAwesomeIcon  id={show?'iconeSuccess':'iconeSuccessDisabled'} icon={faCircleCheck} />
    <span className='titleHead' >2- Payement</span>
    </div>
    </div>

    <div className='PaymentContent  ' >
    {show && <> <span className="PaymentContent-header" >Comment vous voulez payer votre order ?</span>
    <div className='Methodes'>
    <ItemMethod  setMethod={setMethod} name={'Credit Card'} img={paypal}  />
    <ItemMethod  setMethod={setMethod} name={'Payer en Livretion'} img={cash}  />
    </div>
    <span className="PaymentContent-header" >Do you have A discount?</span>
    <div className='InputDicount' >
    <input  ref={coupon} />
    <button onClick={check} >Ajouter Coupon</button>
    </div>
    {status &&<p  style={{color:status==='non valid'?'#d33':'green'}}  >{status==='non valid'?'non valide coupon'+coupon.current.value:'valid coupon '+coupon.current.value}</p> }
    <span className="PaymentContent-ter" >on clickent sur le button vous accepter les conditions</span>
    <button className='placerOrder'  onClick={()=>{
         if(method=='Credit Card'){
           return  dispatch(checkoutWithCardPaymant(coupon.current.value))
        }
        paimentLivression()
    }} 
        >Place Order</button> </> }
    </div>

    </div>
  );
}

export default PayementItem;
