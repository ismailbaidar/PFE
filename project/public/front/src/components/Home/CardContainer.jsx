import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardContainer = () => {
    const products = useSelector((state) => state.productReducer.products);
    console.log("hello", products);

    return (
        <div className="cardAndFilter">
            <div className="filters  ">
                <span>TOUT</span>
                <span>PC GAMER</span>
                <span>PC PORTABLE</span>
            </div>
            <div className="cards">
                {products.map((p) => {
                    return <Card {...p} />;
                })}
            </div>
        </div>
    );
};

export default CardContainer;
