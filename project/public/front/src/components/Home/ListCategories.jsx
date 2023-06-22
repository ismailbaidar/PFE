import React from "react";
import ItemListCategorie from "./ItemListCategorie";
import img from "../../images/Mediamodifier-Design-Template(10).png";
import { getCategories } from "../../features/CategorieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Categorie.categories);

    const categoryMap = {};

    // Iterate over the data array to populate the category map
    console.log(" c0", categories);
    if (categories) {
        for (const item of categories) {
            const categoryId = item.id;

            if (!categoryMap[categoryId]) {
                categoryMap[categoryId] = {
                    ...item,
                    children: [],
                };
            } else {
                categoryMap[categoryId] = {
                    ...categoryMap[categoryId],
                    ...item,
                };
            }

            if (item.parent) {
                const parentId = item.parent.id;
                if (!categoryMap[parentId]) {
                    categoryMap[parentId] = {
                        ...item.parent,
                        children: [categoryMap[categoryId]],
                    };
                } else {
                    categoryMap[parentId] = {
                        ...categoryMap[parentId],
                        children: [
                            ...categoryMap[parentId].children,
                            categoryMap[categoryId],
                        ],
                    };
                }
            }
        }
    }

    // Filter out categories that have parents to get the top-level categories
    const topLevelCategories = Object.values(categoryMap).filter(
        (category) => !category.parent
    );

    // Extract the desired array of categories with their children
    const categoriesWithChildren = topLevelCategories.map((category) => ({
        ...category,
        children: category.children.map((child) => ({
            ...child,
            children: [],
        })),
    }));

    // Output the resulting array
    const list = categoriesWithChildren;

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
