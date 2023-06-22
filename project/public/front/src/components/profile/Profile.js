import "../../styles/profile.css";
import StatsSideBar from "./StatsSideBar";
import NavigationSidebar from "./NavigationSideBar";
import ProfileNavbar from "./ProfileNavbar";
import ProfileHome from "./ProfileHome";
import ProfileOrders from "./ProfileOrders";
import { Route, Routes } from "react-router-dom";
import Wishlist from "../wishlist/Wishlist";
import SingleOrderDetails from "../SingleOrderDetails/SingleOrderDetails";
import ToUpButton from "../Tools/ToUpButton";
import EditProfile from "./EditProfile";
import ShowProgress from "./ShowProgress";
import { useState } from "react";

export default function Profile() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="profile">
            <NavigationSidebar></NavigationSidebar>
            <div>
                {visible && (
                    <ShowProgress currentPoints={500} setVisible={setVisible} />
                )}
                <ProfileNavbar></ProfileNavbar>

                <Routes>
                    <Route path="/" element={<ProfileHome />} />
                    <Route path="orders" element={<ProfileOrders />} />
                    <Route path="editProfile" element={<EditProfile />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Routes>
            </div>
            <StatsSideBar setVisible={setVisible} />
            <ToUpButton />
        </div>
    );
}
