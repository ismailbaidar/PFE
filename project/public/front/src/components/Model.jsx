import React from "react";
import ModelItem from "./ModelItem";

const Model = ({ products }) => {
    return (
        <div className="model">
            {products.length > 0
                ? products.map((e) => <ModelItem item={e} />)
                : "No results"}
        </div>
    );
};

export default Model;
