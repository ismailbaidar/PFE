import { useSelector } from "react-redux";
import "../../styles/wishlist.css";
import FlashCard from "../Flash card/FlashCard";
import Card from "../Home/Card";
export default function Wishlist() {
    const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
    const products = useSelector((state) => state.productReducer.products);
    return (
        <div className="wishlist">
            <div className="infos">
                <h1>Wishlist</h1>
            </div>
            <div className="products">
                {wishlist.map((p) => {
                    const prod = products.find(
                        (product) => p.product_id == product.id
                    );
                    console.log(prod);
                    return <Card {...prod} />;
                })}
            </div>
        </div>
    );
}
