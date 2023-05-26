import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../../styles/cartproductcard.css";
export default function CartProductCard() {
    return (
        <div className="cart-product-card">
            <div className="image-title-container">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <div className="title-brand">
                    <span className="title">Something</span>
                    <span className="brand">Something</span>
                </div>
            </div>
            <div className="product-price-qte-control">
                <div className="product-price">
                    <span className="new-price">999MAD</span>
                    <span className="old-price">999MAD</span>
                </div>
                <div className="qte-control">
                    Qte :{" "}
                    <div className="qte-control-buttons">
                        <button className="control-button">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span>2</span>
                        <button className="control-button">
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                </div>
                <button className="delete-product">
                    {" "}
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </div>
    );
}
