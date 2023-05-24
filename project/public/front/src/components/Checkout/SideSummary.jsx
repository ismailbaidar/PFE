import React from "react";
import ItemOrderList from "./ItemOrderList";

const SideSummary = () => {
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
                    <ItemOrderList />
                    <ItemOrderList />
                    <ItemOrderList />
                </div>
                <div className="OrderShipOrder" >

                <div className="ItemDataM" >
                    <span className="titleItemDataM" >Ordring</span>
                    <span className="PriceData" >7000.00 MAD</span>
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
