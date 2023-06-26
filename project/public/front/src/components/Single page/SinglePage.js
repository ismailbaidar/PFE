import mainImage from "../../images/pc-gamer-setup-game-min-1.webp";
import "../../styles/singlePage.css";
import SpecCard from "./SpecCard";
import Rating from "./Rating";

import { useEffect, useState, useRef } from "react";
import Card from "../Home/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/productSlice";
import ReviewChecker from "./ReviewChecker";
import { addProductToCart, updateCart } from "../../features/cartSlice";

export default function SinglePage() {
    const dispatch = useDispatch();

    const { productId } = useParams();
    const description = useRef();
    const cart = useSelector((state) => state.cartReducer.cart);

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const products = useSelector((state) => state.productReducer.products);
    const product = products.find((p) => {
        return p.id == productId;
    });

    const productImages = product?.images;
    const [selectedImage, setSelectedImage] = useState(
        `http://127.0.0.1:8000/storage/images/${productImages}`
    );
    useEffect(() => {
        if (productImages) {
            setSelectedImage(
                `http://127.0.0.1:8000/storage/images/${productImages[0].url}`
            );
        }
    }, [product]);

    const [visibleItem, setVisibleItem] = useState("description");
    const [count, setCount] = useState(1);
    function addOrUpdateProductInCart(p) {
        const product = cart.find((prod) => prod.id == p.id);
        console.log(product);
        if (product == undefined) {
            dispatch(addProductToCart({ ...p, qte: count }));
        } else {
            dispatch(updateCart({ ...product, qte: product.qte + count }));
        }
    }

    return (
        <div className="single-page-wrapper">
            {product != undefined && (
                <>
                    {" "}
                    <div className="product-part">
                        <div className="product-image">
                            <div className="main-image">
                                <img src={selectedImage} alt="" width={400} />
                            </div>

                            <div className="all-images">
                                {productImages?.map((p) => {
                                    const imagePath = `http://127.0.0.1:8000/storage/images/${
                                        p.url || ""
                                    }`;
                                    return (
                                        <img
                                            className="image"
                                            width={60}
                                            src={imagePath}
                                            onClick={() =>
                                                setSelectedImage(imagePath)
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="brand">{product?.brand.name}</div>

                            <div className="title-price-wrapper">
                                <div className="product-title">
                                    {product?.name}
                                </div>
                                <div className="product-price">
                                    {product.discount ? (
                                        <>
                                            <div className="product-old-price">
                                                {product.price}MAD
                                            </div>
                                            <div className="product-new-price">
                                                {product.price -
                                                    product.discount}
                                                MAD
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {" "}
                                            <div className="product-new-price">
                                                {product.price}MAD
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="specs">
                                {product.spects.map((s) => {
                                    return <SpecCard {...s} />;
                                })}
                            </div>

                            <div className="brand-icon-rating">
                                <div className="brand-icon">brand icon</div>
                                <Rating rate={3} />
                            </div>
                            <div className="qte-input-cart-button">
                                <div className="qte-input">
                                    <button
                                        className="qte-changer-button increment-qte"
                                        onClick={() => setCount(count - 1)}
                                    >
                                        -
                                    </button>
                                    <span>{count}</span>
                                    <button
                                        className="qte-changer-button decrement-qte"
                                        onClick={() => setCount(count + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="cart-button"
                                    onClick={() =>
                                        addOrUpdateProductInCart({
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            discount: product.discount,
                                            images: product.images,
                                            brand: product.brand.name,
                                        })
                                    }
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="description-review-wrapper">
                        <div className="description-review-navigator">
                            <div
                                onClick={() => setVisibleItem("description")}
                                data-visible={visibleItem == "description"}
                                className="navigator-option"
                            >
                                Description
                            </div>
                            <div
                                onClick={() => setVisibleItem("reviews")}
                                data-visible={visibleItem == "reviews"}
                                className="navigator-option"
                            >
                                Reviews
                            </div>
                        </div>
                        <div className="content-wrapper">
                            <div
                                data-visible={visibleItem == "description"}
                                className="description-content content"
                                ref={description}
                                dangerouslySetInnerHTML={{
                                    __html: products.find(
                                        (p) => p.id == productId
                                    )?.description,
                                }}
                            ></div>
                            <div
                                data-visible={visibleItem == "reviews"}
                                className="review-content content"
                            >
                                reviews
                            </div>
                        </div>
                    </div>
                    <div className="similar-products">
                        <div className="title">
                            <h1>similar products</h1>
                        </div>
                        <div className="products">
                            {products?.map((p) => {
                                return <Card {...p} />;
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
