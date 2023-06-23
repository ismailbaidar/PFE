import CartProductCard from "./CartProductCard";
import "../../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cartSlice";
import { Link } from "react-router-dom";
export default function Cart() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
    return (
        <div className="cart-wrapper">
            <div className="title-content-container">
                <span className="section-name">Cart</span>
                <div className="cart-products">
                    {cart.map((product) => {
                        return <CartProductCard {...product} />;
                    })}
                    <button
                        className="empty-cart-button"
                        onClick={() => dispatch(clearCart())}
                    >
                        Empty Cart
                    </button>
                </div>
            </div>
            <div className="cart-summary">
                <div className="title-content-container">
                    <div className="section-name">Summary</div>
                    <div className="info-wrapper">
                        <div className="info">
                            <span className="key">Total Items</span>
                            <span className="value items">{cart.length}</span>
                        </div>
                        <div className="info">
                            <span className="key">Total Price</span>
                            <span className="value">
                                {cart.reduce((t, p) => {
                                    if (p.discount) {
                                        return (
                                            t + (p.price - p.discount) * p.qte
                                        );
                                    }
                                    return t + p.price * p.qte;
                                }, 0)}
                                MAD
                            </span>
                        </div>
                        <button className="checkout-button">
                            <Link to="/checkout">checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
