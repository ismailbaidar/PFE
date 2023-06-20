import React, { useEffect } from "react";
import Card from "../Home/Card";
import ItemFilters from "./ItemFilters";

const ProductSide = ({ items, removeItem,products }) => {


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
                Nombre de résultats: {products.lengh} Produits
            </div>
            <div className="products">
                {products.map((p) => {
                    console.log(p);
                    return <Card {...p} />;
                })}
            </div>
        </div>
    );
};

export default ProductSide;
