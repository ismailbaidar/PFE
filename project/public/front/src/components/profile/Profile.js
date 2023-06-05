import "../../styles/profile.css";
import StatsSideBar from "./StatsSideBar";
import NavigationSidebar from "./NavigationSideBar";
import ProfileNavbar from "./ProfileNavbar";
import ProfileHome from "./ProfileHome";
import ProfileOrders from "./ProfileOrders";
import { Route, Routes, Switch } from "react-router-dom";
import Wishlist from "../wishlist/Wishlist";
export default function Profile() {
    return (
        <div className="profile">
            <NavigationSidebar></NavigationSidebar>
            <div className="profile-content">
                <ProfileNavbar></ProfileNavbar>

                <Routes>
                    <Route path="/" element={<ProfileHome />} />
                    <Route path="orders" element={<ProfileOrders />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Routes>
            </div>
            <StatsSideBar />
        </div>
    );
}
