import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import "../../styles/cartproductcard.css";
import { useDispatch } from "react-redux";
import { updateCart, deleteProductFromCart } from "../../features/cartSlice";

export default function CartProductCard({
    id,
    name,
    price,
    discount,
    images,
    brand,
    qte,
}) {
    const dispatch = useDispatch();

    function updateOrDeleteProduct() {
        if (qte <= 1) {
            dispatch(deleteProductFromCart(id));
            console.log("now");
        } else {
            dispatch(updateCart({ id, qte: qte - 1 }));
            console.log("not now");
        }
    }
    console.log(images);
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
                        <button
                            className="control-button"
                            onClick={() =>
                                dispatch(updateCart({ id, qte: qte + 1 }))
                            }
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span>{qte}</span>
                        <button
                            className="control-button"
                            onClick={() => updateOrDeleteProduct()}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                </div>
                <button
                    className="delete-product"
                    onClick={() => dispatch(deleteProductFromCart(id))}
                >
                    {" "}
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </div>
    );
}
