import { DataGrid } from "@mui/x-data-grid";
import "../styles/ProductsDashboard.css";
import AnalyseProduct from "../components/Admin/AnalyseProduct";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useMemo } from "react";
import ModelItem from "../components/Admin/ModelItem";

export default function Products() {
    const [iditem,setId]=useState(null);
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "Name", headerName: "Name", width: 130 },
        { field: "Price", headerName: "Price", width: 130 },
        {
            field: "Discount",
            headerName: "Discount",
            type: "number",
            width: 90,
        },
        {
            field: "Rate",
            headerName: "Rate",
            type: "number",
            width: 90,
        },
        { field: "Brand", headerName: "Brand", width: 130 },
        { field: "Categorie", headerName: "Categorie", width: 140 },
        { field: "Action", headerName: "Action", width: 140 ,renderCell:(params)=>{
            return <div className="actionbtntable" >
            <button onClick={(e)=>{e.stopPropagation();console.log(params)}} className="delete" ><FontAwesomeIcon icon={faTrash}/></button>
            <button onClick={(e)=>e.stopPropagation()}  className="edite" ><FontAwesomeIcon icon={faEdit}/></button>
            </div>
        }},


    ];

    const rows = [
        { id: 1, Name: "Iphone14", Price: "1224", Discount: "35%",Rate:'4',Brand:'Apple',Categorie:'Phones' ,},
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
                rows={rows}
                columns={columns}
                onRowClick={(params)=>setId(params.id)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
            {iditem && <ModelItem setIdNull={()=>setId(null)} />}
        </div>
    );
}
