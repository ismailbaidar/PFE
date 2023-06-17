import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCartShopping,
    faHeart,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import SectionSideNavigation from "../components/Home/SectionSideNavigation";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    const [search, setSearch] = useState(false);
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();
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
                    <span>4</span>
                    <FontAwesomeIcon icon={faHeart} />
                </div>

                <FontAwesomeIcon
                    onClick={() => setSearch(true)}
                    icon={faMagnifyingGlass}
                />
            </div>
            {toogle && <SectionSideNavigation set={setToogle} />}
            {search && <Search hide={setSearch} />}
        </div>
    );
};

export default Navbar;
