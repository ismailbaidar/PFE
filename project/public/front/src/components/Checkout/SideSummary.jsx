import React from "react";
import ItemOrderList from "./ItemOrderList";
import {useSelector,useDispatch} from 'react-redux'
const SideSummary = () => {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    const totalOrdring = cart.reduce((t, p) => {
        if (p.discount) {
            return (
                t + (p.price - p.discount*p.price/100) * p.qte
            );
        }
        return t + p.price * p.qte;
    }, 0)

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
                    <span className="PriceData" >7000.00 MAD</span>
                </div>
                </div>
                <div className="TotalPriceM ItemDataM" >
                    <span id="totalm" >Total</span>
                    <span id="totalPricem" >14000 MAD</span>
                </div>
            </div>
        </div>
    );
};

export default SideSummary;
