import React, { useEffect } from "react";
import Card from "../Home/Card";
import ItemFilters from "./ItemFilters";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/productSlice";
const ProductSide = ({ items, removeItem }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const products = useSelector((state) => state.productReducer.products);

    return (
        <div className="ProductSide">
            <div className="Items">
                {Object.entries(items).map(([key, value], i) => (
                    <ItemFilters
                        removeItem={removeItem}
                        key={i}
                        item={key}
                        value={value}
                    />
                ))}
            </div>
            <div className="info">
                Nombre de résultats: {products.length} Produits
            </div>
            <div className="products">
                {products.map((p) => {
                    return <Card {...p} />;
                })}
            </div>
        </div>
    );
};

export default ProductSide;
