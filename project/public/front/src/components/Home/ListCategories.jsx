import React from "react";
import ItemListCategorie from "./ItemListCategorie";
import img from "../../images/Mediamodifier-Design-Template(10).png";
import { getCategories } from "../../features/CategorieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Categorie.categories);
    let list = [
        {
            name: "PC Gamer",
            img: img,
            children: [
                {
                    name: "Laptop",
                    children: [
                        { name: "Iphone" },
                        { name: "Iphone" },
                        { name: "Iphone" },
                    ],
                },
            ],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
        {
            name: "PC Gamer",
            img: img,
            children: [{ name: "Laptop", children: [{ name: "Iphone" }] }],
        },
    ];
    useEffect(() => {
        dispatch(getCategories());
        console.log(categories);
    }, []);
    return (
        <div className="listCategorie">
            {list.map((e) => (
                <ItemListCategorie
                    name={e.name}
                    img={e.img}
                    children={e.children}
                />
            ))}
        </div>
    );
};

export default ListCategories;
