import React, { useState,useEffect } from "react";
import ItemCollection from "../components/Admin/ItemCollection";
import {useSelector,useDispatch} from 'react-redux'
import {getCollections} from '../features/CollectionSlice'
const Collection = () => {
    const dispatch = useDispatch();
    const collections=useSelector(state=>state.CollectionReducer.collections);
    useEffect(()=>{
        dispatch(getCollections())
    },[])

    return (
        <div className="ProductsDashboard">
            <p>Collections</p>
            <div className="containerCollections">
            {collections.length>0 && collections.map(e=><ItemCollection name={e.name} items={e.products} />)}
            </div>

        </div>
    );
};

export default Collection;
