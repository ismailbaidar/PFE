import "../../styles/profileproductcard.css";
export default function ProfileProductCard() {
    return (
        <div className="profile-product-card">
            <div className="image-info">
                <span className="image"></span>
                <span className="info">
                    <div className="title">Title in here</div>
                    <div className="brand">Brand</div>
                </span>
            </div>
            <button className="details-button">Details</button>
        </div>
    );
}
