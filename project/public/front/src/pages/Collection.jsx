import React, { useState } from "react";
import ItemCollection from "../components/Admin/ItemCollection";
const Collection = () => {
    const [items, setItems] = useState([
        {
            name: "name1 ",
            items: [
                { img: "../../images/asusdisplay.webp" },
                { img: "../../images/asusdisplay.webp" },
                { img: "../../images/asusdisplay.webp" },
                { img: "../../images/asusdisplay.webp" },
                { img: "../../images/asusdisplay.webp" },
                { img: "../../images/asusdisplay.webp" },
                { img: "../../images/asusdisplay.webp" },
            ],
        },
        {
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },
        {
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },{
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },{
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },{
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },{
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },{
            name: "name2 ",
            items: [
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay2.webp" },
                { img: "../../images/asusdisplay3.webp" },
                { img: "../../images/asusdisplay4.webp" },
            ],
        },
    ]);

    return (
        <div className="ProductsDashboard">
            <p>Collections</p>
            <div className="containerCollections">
            {items.map(e=><ItemCollection name={e.name} items={e.items} />)}
            </div>

        </div>
    );
};

export default Collection;
