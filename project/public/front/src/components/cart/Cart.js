import CartProductCard from "./CartProductCard";
import "../../styles/cart.css";
export default function Cart() {
    return (
        <div className="cart-wrapper">
            <div className="title-content-container">
                <span className="section-name">Cart</span>
                <div className="cart-products">
                    <CartProductCard></CartProductCard>
                    <CartProductCard></CartProductCard>
                    <CartProductCard></CartProductCard>
                    <CartProductCard></CartProductCard>
                    <button className="empty-cart-button">Empty Cart</button>
                </div>
            </div>
            <div className="cart-summary">
                <div className="title-content-container">
                    <div className="section-name">Summary</div>
                    <div className="info-wrapper">
                        <div className="info">
                            <span className="key">Total Items</span>
                            <span className="value items">9</span>
                        </div>
                        <div className="info">
                            <span className="key">Total Price</span>
                            <span className="value">999MAD</span>
                        </div>
                        <button className="checkout-button">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
