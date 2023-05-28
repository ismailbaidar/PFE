import React from "react";
import ItemAnalyseProduct from "./ItemAnalyseProduct";

const AnalyseProduct = () => {
    return (
        <div className="AnalyseProduct">
            <ItemAnalyseProduct
                title={"Total product"}
                prc={"+10%"}
                nbr={2450}
            />
            <ItemAnalyseProduct
                title={"Total product"}
                prc={"+10%"}
                nbr={2450}
            />
            <ItemAnalyseProduct
                title={"Total product"}
                prc={"+10%"}
                nbr={2450}
            />
            <ItemAnalyseProduct
                title={"Total product"}
                prc={"+10%"}
                nbr={2450}
            />
        </div>
    );
};

export default AnalyseProduct;
