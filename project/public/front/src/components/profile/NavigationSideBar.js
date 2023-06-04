import "../../styles/navigationsidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBagShopping,
    faHeart,
    faUserPen,
    faKey,
    faSliders,
    faBell,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavigationSidebar() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="navigation-sidebar">
            <div className="logo">
                <img src="../images/logored.png" />
            </div>
            <div className="sidebar">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="">Profile</Link>
                    </li>
                    <li className="sidebar-list-item">
                        <FontAwesomeIcon icon={faBagShopping} />

                        <Link to="orders">Orders</Link>
                    </li>
                    <li className="sidebar-list-item">
                        <FontAwesomeIcon icon={faHeart} />
                        Wishlist
                    </li>
                    <li
                        className="sidebar-list-item account"
                        onClick={() => setVisible(!visible)}
                    >
                        <div>
                            {" "}
                            <FontAwesomeIcon icon={faSliders} />
                            Account Settings
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <ul className="sublist" data-visible={visible}>
                            <li>
                                <FontAwesomeIcon icon={faUserPen} />
                                Edit Profile
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faKey} />
                                Change Password
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-list-item">
                        <FontAwesomeIcon icon={faBell} />
                        Notification
                    </li>
                </ul>
            </div>
        </div>
    );
}
