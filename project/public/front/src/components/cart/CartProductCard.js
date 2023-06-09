import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../../styles/cartproductcard.css";
export default function CartProductCard({
    id,
    name,
    price,
    discount,
    images,
    brand,
    qte,
}) {
    return (
        <div className="cart-product-card">
            <div className="image-title-container">
                <div className="image">
                    <img
                        src={`http://localhost:8000/storage/images/${images[0].url}`}
                        alt=""
                    />
                </div>
                <div className="title-brand">
                    <span className="title">{name}</span>
                    <span className="brand">{brand}</span>
                </div>
            </div>
            <div className="product-price-qte-control">
                <div className="product-price">
                    {discount ? (
                        <>
                            <span className="new-price">
                                {price - discount}MAD
                            </span>
                            <span className="old-price">{price}MAD</span>
                        </>
                    ) : (
                        <span className="new-price">{price}MAD</span>
                    )}
                </div>
                <div className="qte-control">
                    Qte :{" "}
                    <div className="qte-control-buttons">
                        <button className="control-button">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span>{qte}</span>
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
