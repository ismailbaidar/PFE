import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React,{useState,useEffect} from 'react'
const Orders =()=>{

    const [state,setState]=useState([])

    useEffect(()=>{
        axios.post('http://localhost:8000/api/getAllOrders')
        .then(res=>setState(res.data.orders))
    },[])
    console.log(state)
    let stylePaid={color:'green',border:'1px solid',borderRadius:'8px',padding:'5px 10px',background:'transparent'}
    let styleNotPaid={color:'#d33',border:'1px solid',borderRadius:'8px',padding:'5px 10px',background:'transparent'}
    const columns = [
        { field: "id", headerName: "Order Id", width: 150 },
        { field: "total_price", headerName: "Total Price", width: 215 },
        {
            field: "created_at",
            headerName: "Placed On",
            width: 215,
        },
        {
            field: "Details",
            headerName: "STATUS",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="actionbtntable">
                        <button style={params.row.satatus_payment=='paid'?stylePaid:styleNotPaid}>
                            {params.row.satatus_payment}
                        </button>
                    </div>
                );
            },
        },
        {
            field: "User Email",
            headerName: "User Email",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="actionbtntable">
                            {params.row.user.email}
                    </div>
                );
            },
        },
    ];
    return <div  className="ProductsDashboard">
    <DataGrid
    rows={state}
    columns={columns}
    initialState={{
        pagination: {
            paginationModel: { page: 0, pageSize: 5 },
        },
    }}
    color="#fff"
    pageSizeOptions={[5, 10]}
/>
    </div>
}
export default Orders
