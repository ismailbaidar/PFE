import { DataGrid } from "@mui/x-data-grid";
import "../styles/ProductsDashboard.css";
import AnalyseProduct from "../components/Admin/AnalyseProduct";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import ModelItem from "../components/Admin/ModelItem";
import {useDispatch,useSelector} from 'react-redux'
import {getProducts} from '../features/Products'
export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.Product.products)
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    console.log(products)
    let Rows = useMemo(()=>{
        let ne = products
        let nr =  ne.map(e=>{
        return  {...e,categorie:e?.categorie?.name,brand:e?.brand?.name}
        })
        return nr

    },[products])

    console.log(Rows)
    const [iditem,setId]=useState(null);
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "price", headerName: "Price", width: 130 },
        {
            field: "discount",
            headerName: "discount",
            type: "number",
        },
        {
            field: "stock",
            headerName: "stock",
            type: "number",
        },
        {
            field: "rate",
            headerName: "Rate",
            type: "number",
        },
        { field: "brand", headerName: "Brand", width: 130 },
        { field: "categorie", headerName: "Categorie", width: 140 },
        { field: "Action", headerName: "Action", width: 140 ,renderCell:(params)=>{
            return <div className="actionbtntable" >
            <button onClick={(e)=>{e.stopPropagation();console.log(params)}} className="delete" ><FontAwesomeIcon icon={faTrash}/></button>
            <button onClick={(e)=>e.stopPropagation()}  className="edite" ><FontAwesomeIcon icon={faEdit}/></button>
            </div>
        }},


    ];

    const rows = [
        { id: 1, name: "Iphone14", price: "1224", discount: "35%",rate:'4',brand:'Apple',categorie:'Phones' ,},
        { id: 2, Name: "Iphone13", Price: "1024", Discount: "35%",Rate:'4',Brand:'Apple',Categorie:'Phones' },
        { id: 3, Name: "Iphone12", Price: "924", Discount: "35%",Rate:'4',Brand:'Apple',Categorie:'Phones' },
        { id: 4, Name: "Iphone11", Price: "824", Discount: "35%",Rate:'4',Brand:'Apple',Categorie:'Phones' },
        { id: 5, Name: "IphoneX", Price: "724", Discount: "35%",Rate:'4',Brand:'Apple',Categorie:'Phones' },

    ];

    const dataItem = useMemo(()=> iditem ? rows.filter(e=>e.id==iditem):'',[iditem])


    return (
        <div className="ProductsDashboard">
            <AnalyseProduct />
            <button  className="ajouterProduit" >Ajouter Produit</button>
            <DataGrid
                rows={Rows}
                columns={columns}
                onRowClick={(params)=>setId(params.id)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                color='#fff'
                pageSizeOptions={[5, 10]}
            />
            {iditem && <ModelItem   data={dataItem}  setIdNull={()=>setId(null)} />}
        </div>
    );
}
