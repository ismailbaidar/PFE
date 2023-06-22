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
                <ItemSideBar to="/admin/" icon={faBox} title={"Dashbord"} />
                <ItemSideBar
                    to="/admin/products"
                    icon={faBoxArchive}
                    title={"Products"}
                />
                <ItemSideBar
                    to="/admin/livreurs"
                    icon={faBoxArchive}
                    title={"Livreurs"}
                />
                <ItemSideBar
                    to={"/admin/collections"}
                    icon={faBoxArchive}
                    title={"Collections"}
                />
                <ItemSideBar
                    to={"/admin/users"}
                    icon={faBoxArchive}
                    title={"users"}
                />
                <ItemSideBar
                    to={"/admin/spects"}
                    icon={faBoxArchive}
                    title={"spects"}
                />
                
                <ItemSideBar
                    to={"/admin/orders"}
                    icon={faBoxArchive}
                    title={"Orders"}
                />
                <ItemSideBar
                    to={"/admin/brands"}
                    icon={faBoxArchive}
                    title={"Brands"}
                />
                <ItemSideBar
                    to={"/admin/logs"}
                    icon={faBoxArchive}
                    title={"Logs"}
                />
                <ItemSideBar
                    to={"/admin/categories"}
                    icon={faBoxArchive}
                    title={"Categories"}
                />
                <ItemSideBar
                    to={"/admin/ContentManagement"}
                    icon={faBoxArchive}
                    title={"Content Management"}
                />
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
