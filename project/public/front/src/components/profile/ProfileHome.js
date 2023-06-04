import "../../styles/profilehome.css";
import ActivityProducts from "./ActivityProducts";
export default function ProfileHome() {
    return (
        <div className="profile-home">
            <div className="title-description">
                <h1>Profile</h1>
                <p>
                    Welcome back to your home! Here to the check the activity
                    you done!
                </p>
            </div>
            <div className="activities">
                <ActivityProducts />
                <ActivityProducts />
                <ActivityProducts />
                <ActivityProducts />
            </div>
        </div>
    );
}
