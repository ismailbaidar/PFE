import React from "react";
import ItemOrderList from "./ItemOrderList";
import {useSelector,useDispatch} from 'react-redux'
const SideSummary = ({prcoupon,prcity}) => {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    const data=useSelector(state=>state.CheckoutSlice.data)
    console.log(prcoupon,'544654')
    const totalOrdring = cart.reduce((t, p) => {
        if (p.discount) {
            return (
                t + (p.price - p.discount*p.price/100) * p.qte
            );
        }
        return t + p.price * p.qte;
    }, 0).toFixed(2)

    const shippingCost= prcity?.price ?  Number(totalOrdring*prcity?.price/100).toFixed(2): 0
    let prc=prcoupon?.prc ?? 0
    const totalprice = Number(totalOrdring)+Number(shippingCost*(1-(1*prc/100)));
    return (
        <div className="SideSummary">
            <div className="TitleREH">Order Summary</div>

            <div className="itemSideP">
            <div className="itemHead">
                    <div className="HTitle">
                        <span className="titleHead">Your Order</span>
                    </div>
                </div>

                <div className="OrdersListm">
                    {cart.map(e=><ItemOrderList data={e} />)}
                </div>
                <div className="OrderShipOrder" >

                <div className="ItemDataM" >
                    <span className="titleItemDataM" >Ordring</span>
                    <span className="PriceData" > {totalOrdring} MAD</span>
                </div>

                <div className="ItemDataM" >
                    <span className="titleItemDataM" >Shiping</span>
                    <span className="PriceData" >  {shippingCost ?? 0} MAD</span>
                </div>
                {prcoupon && <div className="ItemDataM" >
                    <span className="titleItemDataM" >coupon</span>
                    <span className="PriceData" >  {prcoupon.prc ?? 0} %</span>
                </div>}
                </div>
                <div className="TotalPriceM ItemDataM" >
                    <span id="totalm" >Total</span>
                    <span id="totalPricem" >{totalprice} MAD</span>
                </div>
            </div>
        </div>
    );
};

export default SideSummary;
