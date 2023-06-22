import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import "../../styles/profileorders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SingleOrderDetails from "../SingleOrderDetails/SingleOrderDetails";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../features/orderSlice";

export default function ProfileOrders() {
    const [rows, setRows] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserOrders());
    }, []);
    const [detailsVisible, setDetailsVisible] = useState(false);
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
            headerName: "Action",
            width: 215,
            renderCell: (params) => {
                return (
                    <div className="actionbtntable">
                        <button className="order-detail-button">
                            <Link to={`../../order/${params.id}`}>Details</Link>
                        </button>
                    </div>
                );
            },
        },
    ];
    const orders = useSelector((state) => state.orderReducer.orders);
    const NewOrders = orders.map((o) => ({ ...o, price: o.price / 100 }));

    return (
        <>
            <div className="profile-orders">
                <DataGrid
                    rows={NewOrders}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 15]}
                />
            </div>
            {detailsVisible && (
                <SingleOrderDetails
                    setDetailsVisible={setDetailsVisible}
                ></SingleOrderDetails>
            )}
        </>
    );
}
