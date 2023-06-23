import React, { useEffect } from "react";
import Card from "../Home/Card";
import { useSelector, useDispatch } from "react-redux";
import ItemFilters from "./ItemFilters";
import { getProducts } from "../../features/productSlice";
const ProductSide = ({ items = [], removeItem, products }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    console.log(items.categorie, "items");

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
                    if (items.categorie != undefined) {
                        return (
                            items.categorie.includes(p.categorie.name) && (
                                <Card {...p} />
                            )
                        );
                    } else {
                        return <Card {...p} />;
                    }
                })}
            </div>
        </div>
    );
};

export default ProductSide;
