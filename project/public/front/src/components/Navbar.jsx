import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCartShopping,
    faHeart,
    faMagnifyingGlass,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import SectionSideNavigation from "../components/Home/SectionSideNavigation";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { getWishlist } from "../features/wishlistSlice";
import md5 from "md5";
const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    const [search, setSearch] = useState(false);
    const [visible, setVisible] = useState(false);
    const cart = useSelector((state) => state.cartReducer.cart);
    const token = useSelector((state) => state.userReducer.token);
    const wishlist =
        useSelector((state) => state.wishlistReducer.wishlist) || [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWishlist(localStorage.getItem("UID")));
    }, []);
    return (
        <div className={"Navbar"}>
            <div className="logo">
                <FontAwesomeIcon
                    id={"menu"}
                    icon={faBars}
                    onClick={() => setToogle(true)}
                />
                <Link to="/">
                    <img src="../images/logored.png" width={50} />
                </Link>
            </div>

            <div className="Tabs">
                <Link to={"Products"}>
                    <Link to="products">Products</Link>
                </Link>
                <Link to={"Promotions"}>Promotions</Link>
                <div className="count">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                </div>
                <div className="count">
                    <span>{wishlist.length}</span>
                    <Link to="/profile/wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                </div>

                <FontAwesomeIcon
                    onClick={() => setSearch(true)}
                    icon={faMagnifyingGlass}
                />
                <div className="dropdown-menu-wrapper">
                    <FontAwesomeIcon
                        icon={faUser}
                        onClick={() => setVisible(!visible)}
                    />
                    <ul className="dropdown-menu" data-visible={visible}>
                        {token == null ? (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="register">Register</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="profile">Profile</Link>
                                </li>
                                <li onClick={() => dispatch(logout())}>
                                    <div>Logout</div>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                {md5("admin") == localStorage.getItem("role") && (
                    <div>
                        <Link to="/admin">Dashboard</Link>
                    </div>
                )}
            </div>
            {toogle && <SectionSideNavigation set={setToogle} />}
            {search && <Search hide={setSearch} />}
        </div>
    );
};

export default Navbar;
