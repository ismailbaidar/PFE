import { useEffect, useState } from "react";
import "../../styles/activityproducts.css";
import ProfileProductCard from "./ProfileProductCard";
import axios from "axios";
export default function ActivityProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product")
            .then((res) => setProducts(res.data.products));
    }, []);
    console.log(products);
    return (
        <div className="activity-products">
            <div className="activity-title">recommended products</div>
            <div className="activity-description">Description</div>
            <div className="activity-products">
                {products.map((p) => {
                    return <ProfileProductCard {...p} />;
                })}
            </div>
        </div>
    );
}
