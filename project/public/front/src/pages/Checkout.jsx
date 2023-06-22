import React from "react";
import "../styles/Checkout.css";
import SideCheckout from "../components/Checkout/SideCheckout";
import SideSummary from "../components/Checkout/SideSummary";
const Checkout = () => {
    const [prcity, setPrcity] = React.useState();
    const [prcoupon, setPrcCoupon] = React.useState();
    console.log(prcity, "city", prcoupon, "couprn");
    return (
        <div className="Checkout">
            <SideCheckout setPrcCoupon={setPrcCoupon} setPrcity={setPrcity} />
            <SideSummary prcity={prcity} prcoupon={prcoupon} />
        </div>
    );
};

export default Checkout;
