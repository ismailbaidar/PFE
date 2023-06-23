import React, { useEffect, useState } from "react";
import ItemSide from "./ItemSide";
import SelectSection from "./SelectSection";
import FilterPrice from "./FilterPrice";
import axios from "axios";
import { capitalize } from "@mui/material";
const SideFilter = ({ pushItem, items }) => {
    const [show, setShow] = useState(false);
    const [categories, setCategoties] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/categorie`)
            .then((res) => setCategoties(res.data.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className={"SideFilter"}>
            <h2 id="categorieTitle">Categorie</h2>

            <div className="itemsSideFilter">
                <div className="GroupItems">
                    {categories.map((e, i) => (
                        <ItemSide
                            items={items}
                            name={e.name}
                            pushItem={pushItem}
                            main={i == 0 ? true : false}
                        />
                    ))}
                </div>

                {/* {show && (
                    <div className="GroupItems">
                        {Array.from(Array(5)).map((e, i) => (
                            <ItemSide
                                items={items}
                                pushItem={pushItem}
                                name={"pc"}
                                main={i == 0 ? true : false}
                            />
                        ))}
                    </div>
                )} */}

                {/* <span className="show" onClick={() => setShow(!show)}>
                    {!show ? "+ Voir Plus" : "- Voir Moins"}
                </span> */}

                {/* <SelectSection pushItem={pushItem} items={items} /> */}
                <FilterPrice
                    items={items}
                    pushItem={pushItem}
                    min={4000}
                    max={10000}
                />
            </div>
        </div>
    );
};

export default SideFilter;
