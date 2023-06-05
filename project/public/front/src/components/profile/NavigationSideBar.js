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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NavigationSidebar() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(document.location.pathname);
    useEffect(() => {
        setSelected(document.location.pathname);
        console.log(document.location.pathname);
    }, []);

    return (
        <div className="navigation-sidebar">
            <div className="logo">
                <img src="../images/logored.png" />
            </div>
            <div className="sidebar">
                <ul className="sidebar-list">
                    <li
                        className="sidebar-list-item"
                        data-selected={"/profile/" == selected}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="" onClick={() => setSelected("/profile/")}>
                            Profile
                        </Link>
                    </li>
                    <li
                        className="sidebar-list-item"
                        data-selected={"/profile/orders" == selected}
                    >
                        <FontAwesomeIcon icon={faBagShopping} />

                        <Link
                            onClick={() => setSelected("/profile/orders")}
                            to="orders"
                        >
                            Orders
                        </Link>
                    </li>
                    <li
                        className="sidebar-list-item"
                        data-selected={"/profile/wishlist" == selected}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        <Link
                            to="wishlist"
                            onClick={() => setSelected("/profile/wishlist")}
                        >
                            Wishlist
                        </Link>
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
