import mainImage from "../../images/pc-gamer-setup-game-min-1.webp";
import "../../styles/singlePage.css";
import SpecCard from "./SpecCard";
import Rating from "./Rating";
import { useState } from "react";
import Card from "../Home/Card";
export default function SinglePage() {
    const productImages = [
        "asusdisplay.webp",
        "asusdisplay2.webp",
        "asusdisplay3.webp",
        "asusdisplay4.webp",
    ];
    const [selectedImage, setSelectedImage] = useState(
        `../../../images/${productImages[0]}`
    );

    const [visibleItem, setVisibleItem] = useState("description");
    return (
        <div className="single-page-wrapper">
            <div className="product-part">
                <div className="product-image">
                    <div className="main-image">
                        <img src={selectedImage} alt="" width={400} />
                    </div>

                    <div className="all-images">
                        {productImages.map((p) => {
                            const imagePath = `../../images/${p}`;
                            return (
                                <img
                                    className="image"
                                    width={100}
                                    src={imagePath}
                                    onClick={() => setSelectedImage(imagePath)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="product-info">
                    <div className="brand">brand</div>

                    <div className="title-price-wrapper">
                        <div className="product-title">Something</div>
                        <div className="product-price">
                            <div className="product-old-price">1,000MAD</div>
                            <div className="product-new-price">9,999MAD</div>
                        </div>
                    </div>
                    <div className="specs">
                        <SpecCard />
                        <SpecCard />
                        <SpecCard />
                        <SpecCard />
                    </div>

                    <div className="brand-icon-rating">
                        <div className="brand-icon">brand icon</div>
                        <Rating rate={3} />
                    </div>
                    <div className="qte-input-cart-button">
                        <div className="qte-input">
                            <button className="qte-changer-button increment-qte">
                                -
                            </button>
                            <span>1</span>
                            <button className="qte-changer-button decrement-qte">
                                +
                            </button>
                        </div>
                        <button className="cart-button">Add to cart</button>
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
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor perspiciatis aspernatur error dolores delectus vel
                        minus dolorum cumque nesciunt numquam, velit
                        necessitatibus voluptatem, eligendi sunt ratione nam ut
                        dicta vitae. Culpa voluptatem laborum expedita, eum
                        dicta hic dolorem natus sunt vel, doloribus, deleniti
                        voluptate temporibus praesentium totam reiciendis magni?
                        Nisi dolorem molestiae aut totam reiciendis
                        reprehenderit sunt voluptatem veniam a. Fugiat at, animi
                        culpa, quasi ipsa impedit debitis dolorem,
                        exercitationem modi nemo eaque. Soluta ex quidem cumque
                        laborum voluptatem. Cumque minus tempore corrupti, ullam
                        necessitatibus nihil? Enim repellat rem officiis. Ipsa
                        quaerat magnam id commodi, sequi facere harum recusandae
                        voluptas cumque illum natus explicabo dignissimos.
                        Nulla, facere exercitationem est alias perspiciatis enim
                        aspernatur molestiae laborum, aut iusto dolorum modi
                        beatae. Veritatis neque culpa minima quo vitae, illo
                        accusantium libero dolor omnis earum quam hic alias
                        cupiditate sed quidem voluptas asperiores necessitatibus
                        velit dolores, quis delectus aliquam explicabo facilis
                        soluta! Rem.
                    </div>
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
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}
