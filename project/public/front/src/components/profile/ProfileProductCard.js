import "../../styles/profileproductcard.css";
import { Link } from "react-router-dom";
export default function ProfileProductCard({ id, images, name, brand }) {
    return (
        <div className="profile-product-card">
            <div className="image-info">
                <span className="image">
                    <img
                        src={`http://localhost:8000/storage/images/${images[0].url}`}
                        alt=""
                        width={30}
                    />
                </span>
                <span className="info">
                    <div className="title">{name}</div>
                    <div className="brand">{brand.name}</div>
                </span>
            </div>
            <button className="details-button">
                <Link to={`/product/${id}`}>Details</Link>
            </button>
        </div>
    );
}
