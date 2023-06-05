import "../../styles/wishlist.css";
import FlashCard from "../Flash card/FlashCard";
import Card from "../Home/Card";
export default function Wishlist() {
    return (
        <div className="wishlist">
            <div className="infos">
                <h1>Wishlist</h1>
            </div>
            <div className="products">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
