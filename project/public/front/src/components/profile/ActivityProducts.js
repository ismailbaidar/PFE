import "../../styles/activityproducts.css";
import ProfileProductCard from "./ProfileProductCard";
export default function ActivityProducts() {
    return (
        <div className="activity-products">
            <div className="activity-title">This is the title</div>
            <div className="activity-description">Description</div>
            <div className="activity-products">
                <ProfileProductCard />
                <ProfileProductCard />
                <ProfileProductCard />
            </div>
        </div>
    );
}
