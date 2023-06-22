import React from "react";
import img from "../../images/Setup-Game-SG-2-ARGB-5600G-Maroc-300x300.jpg";
import img1 from "../../images/RYZEN-q3crjgx5y3ilg06s3ndp3w88gofdfl2ckluo4w369g.png";
import img2 from "../../images/VEGA-AMD-q3criqloicmx94fmxfx0ygzhq5lxkvuajt4k304h3k.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, updateCart } from "../../features/cartSlice";
import { toggleWishlist } from "../../features/wishlistSlice";
const Card = ({ id, name, price, discount, images, brand }) => {
    console.log(brand);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cart);
    const user = useSelector((state) => state.userReducer.user);

    function addOrUpdateProductInCart(p) {
        const product = cart.find((prod) => prod.id == p.id);
        console.log(product);
        if (product == undefined) {
            dispatch(addProductToCart({ ...p, qte: 1 }));
        } else {
            dispatch(updateCart({ ...product, qte: product.qte + 1 }));
        }
    }
    return (
        <div className="card">
            <div className="catImages">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <img
                src={`http://localhost:8000/storage/images/${images[0]?.url}`}
                width={300}
                alt=""
            />
            <p className="titleCard">
                {name.length > 15 ? name.substring(0, 15) + "..." : name}
            </p>
            <div className="price">
                {discount ? (
                    <>
                        <span className=" HightPrice">{price}MAD</span>
                        <span className="lowPrice">{price - discount}MAD</span>
                    </>
                ) : (
                    <span className="lowPrice">{price}MAD</span>
                )}
            </div>
            <div className="hiddenButtons">
                <button
                    className="lireL"
                    onClick={() =>
                        addOrUpdateProductInCart({
                            id,
                            name,
                            price,
                            discount,
                            images,
                            brand: brand.name,
                        })
                    }
                >
                    Add to cart
                </button>
                <button
                    className="Heart"
                    onClick={() =>
                        dispatch(
                            toggleWishlist({
                                product: id,
                                user: localStorage.getItem("UID"),
                            })
                        )
                    }
                >
                    {" "}
                    <FontAwesomeIcon icon={faHeart} />{" "}
                </button>
            </div>
        </div>
    );
};

export default Card;
