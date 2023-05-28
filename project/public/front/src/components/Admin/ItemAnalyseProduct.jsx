import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ItemAnalyseProduct = ({ title, nbr, prc }) => {
    return (
        <div className="ItemAnalyseProduct">
            <FontAwesomeIcon  id="analyseIconProduct"  icon={faCartPlus} />
            <div className="infoAnalyse">
                <div className="titleItemAnalyse">{title}</div>
                <div className="nbrItemAnalyse">{nbr}</div>
                <div className="prcItemAnalyse">{prc}</div>
            </div>
        </div>
    );
};

export default ItemAnalyseProduct;
