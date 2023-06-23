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
import { useState,useEffect,useMemo } from "react";
import axios from 'axios'
export default function Profile() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(false);
    useEffect(() => {
        (async()=>{
            axios.post('http://localhost:8000/api/getUserPoints')
            .then(res=>setData(res.data.points))
        })()
    }, []);
    const minV=useMemo(()=>data? data?.point_level.find(e=>e.used==true):{},[data])
    const maxV =useMemo(()=>data ? data?.point_level.find((e,i)=>{if(e.used){
        return data?.point_level[i+1]
    }}):{},[data]) 
    return (
        <div className="profile">
            <NavigationSidebar></NavigationSidebar>
            <div>
                {visible && (
                    <ShowProgress data={data} currentPoints={data?.points} setVisible={setVisible} />
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
