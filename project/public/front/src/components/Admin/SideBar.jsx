import React, { useState } from "react";
import ItemSideBar from "./ItemSideBar";
import {
    faAngleLeft,
    faAngleRight,
    faBox,
    faBoxArchive,
    faList,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/AdminSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/ShowSlice";
const SideBar = () => {
    const show = useSelector((state) => state.showReducer.show);
    const dispatch = useDispatch();
    return (
        <div
            className={`sideBarAdmin  ${
                show || window.innerWidth < 700
                    ? "minSidbarAdmin"
                    : "fullSideBarAdmin"
            }`}
        >
            <div className="logo">
                <img
                    src="../../images/logored.png"
                    alt=""
                    width={show || window.innerWidth ? 40 : 90}
                />
            </div>
            <div className="sidebar-items">
                <ItemSideBar icon={faBox} title={"Dashbord"} />
                <ItemSideBar active icon={faBoxArchive} title={"Products"} />
                <ItemSideBar icon={faList} title={"Orders"} />
                <ItemSideBar icon={faBoxArchive} title={"Collections"} />
                <ItemSideBar icon={faBoxArchive} title={"Users"} />
                <ItemSideBar icon={faBoxArchive} title={"Transaction"} />
                <ItemSideBar icon={faBoxArchive} title={"Brands"} />
                <ItemSideBar icon={faBoxArchive} title={"Categories"} />
                <ItemSideBar icon={faBoxArchive} title={"Content Management"} />
            </div>
            <FontAwesomeIcon
                id="iconToogleDashboardM"
                onClick={() => dispatch(toggle())}
                icon={show ? faAngleRight : faAngleLeft}
            />
        </div>
    );
};

export default SideBar;
