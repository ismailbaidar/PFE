import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
const ItemSideBar = ({ title, icon, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `itemSideBar ${isActive ? "activeEm" : ""}`
            }
        >
            <FontAwesomeIcon id="DashboardIcon" icon={icon} />
            <span className="titleDashboard">{title}</span>
        </NavLink>
    );
};

export default ItemSideBar;
