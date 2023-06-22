import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState,useEffect,useMemo } from "react";
import { getProducts } from "../features/productSlice";
import {useSelector,useDispatch} from "react-redux"
import Model from "./Model";
import "../styles/Home.css";
const Search = ({ hide }) => {
    const [search, setSearch] = useState(false);
    const [query,setQuery]=useState('');
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const products = useSelector((state) => state.productReducer.products);
    const ListProduct = useMemo(()=>query==''?products:products.filter(e=>  e.name.toLowerCase().includes(query.toLowerCase())))

    return (
        <div className="search">
            <div className="searchBox">
                <input
                    className={search ? "show" : ""}
                    placeholder="search..."
                    onChange={(e)=>setQuery(e.target.value)}
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={() => setSearch(!search)}
                />
            </div>
            <Model  products={ListProduct} />
            <FontAwesomeIcon
                onClick={() => hide(false)}
                id="iconeCloseS"
                icon={faXmark}
            />
        </div>
    );
};

export default Search;
