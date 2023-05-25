import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Model from "./Model";
import "../styles/Home.css";
const Search = ({ hide }) => {
    const [search, setSearch] = useState(false);
    return (
        <div className="search">
            <div className="searchBox">
                <input
                    className={search ? "show" : ""}
                    placeholder="search..."
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={() => setSearch(!search)}
                />
            </div>
            <Model />
            <FontAwesomeIcon
                onClick={() => hide(false)}
                id="iconeCloseS"
                icon={faXmark}
            />
        </div>
    );
};

export default Search;
