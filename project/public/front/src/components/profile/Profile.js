import "../../styles/profile.css";
import StatsSideBar from "./StatsSideBar";
import NavigationSidebar from "./NavigationSideBar";
import ProfileNavbar from "./ProfileNavbar";
import ProfileHome from "./ProfileHome";
import ProfileOrders from "./ProfileOrders";
import { Route, Routes, Switch } from "react-router-dom";
export default function Profile() {
    return (
        <div className="profile">
            <NavigationSidebar></NavigationSidebar>
            <div className="profile-content">
                <ProfileNavbar></ProfileNavbar>

                <Routes>
                    <Route path="/" element={<ProfileHome />} />
                    <Route path="orders" element={<ProfileOrders />} />
                </Routes>
            </div>
            <StatsSideBar />
        </div>
    );
}
