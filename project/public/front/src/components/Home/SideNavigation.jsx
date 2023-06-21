import React from 'react';
import ItemSideNavigation from './ItemSideNavigation';
import img from '../../images/Mediamodifier-Design-Template(10).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { getCategories } from "../../features/CategorieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SideNavigation = ({set}) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.Categorie.categories);






    const categoryMap = {};

    // Iterate over the data array to populate the category map
    for (const item of categories ){
      const categoryId = item.id;

      if (!categoryMap[categoryId]) {
        categoryMap[categoryId] = {
          ...item,
          children: []
        };
      } else {
        categoryMap[categoryId] = {
          ...categoryMap[categoryId],
          ...item
        };
      }

      if (item.parent) {
        const parentId = item.parent.id;
        if (!categoryMap[parentId]) {
          categoryMap[parentId] = {
            ...item.parent,
            children: [categoryMap[categoryId]]
          };
        } else {
          categoryMap[parentId] = {
            ...categoryMap[parentId],
            children: [...categoryMap[parentId].children, categoryMap[categoryId]]
          };
        }
      }
    }

    // Filter out categories that have parents to get the top-level categories
    const topLevelCategories = Object.values(categoryMap).filter(category => !category.parent);

    // Extract the desired array of categories with their children
    const categoriesWithChildren = topLevelCategories.map(category => ({
      ...category,
      children: category.children.map(child => ({ ...child, children: [] }))
    }));

    // Output the resulting array
    const list=(categoriesWithChildren);
    console.log("ddd",list)


    useEffect(() => {
        dispatch(getCategories());
        console.log(categories);
    }, []);
  return (
    <div className='side' >
    <span className='close-button-container'>
    <FontAwesomeIcon   onClick={()=>set(false)}   id='close' icon={faAngleLeft} /></span>
    {list.map(e=><ItemSideNavigation gap={20} name={e.name} children={e.children} img={e.img} />)}
    </div>
  );
}

export default SideNavigation;
