import {
    faMagnifyingGlass,
    faMoon,
    faRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Search = () => {
    const dispatch = useDispatch();
    return (
        <div className="SearchDashboardM">
            <div className="InputSearch">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder="Search..." />
            </div>

            <div className="IconesSearchDashbord">
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon
                    icon={faRightFromBracket}
                    onClick={() => {
                        dispatch(logout());
                    }}
                />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
};

export default Search;
