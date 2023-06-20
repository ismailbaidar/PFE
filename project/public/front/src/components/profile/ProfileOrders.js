import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import "../../styles/profileorders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SingleOrderDetails from "../SingleOrderDetails/SingleOrderDetails";
import { Link } from "react-router-dom";

export default function ProfileOrders() {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const columns = [
        { field: "id", headerName: "Order Id", width: 150 },
        { field: "TotalPrice", headerName: "Total Price", width: 215 },
        {
            field: "PlacedOn",
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
                            <Link to="../../order/1">Details</Link>
                        </button>
                    </div>
                );
            },
        },
    ];
    const rows = [
        { id: 1, TotalPrice: "9999", PlacedOn: "17/02/2023" },
        { id: 2, TotalPrice: "9999", PlacedOn: "17/02/23/07/20223" },
        { id: 3, TotalPrice: "9999", PlacedOn: "23/07/2022" },
        { id: 4, TotalPrice: "9999", PlacedOn: "02/02/2022" },
        { id: 5, TotalPrice: "9999", PlacedOn: "17/02/2023" },
        { id: 6, TotalPrice: "9999", PlacedOn: "17/02/23/07/20223" },
        { id: 7, TotalPrice: "9999", PlacedOn: "23/07/2022" },
        { id: 8, TotalPrice: "9999", PlacedOn: "22/03/2022" },
        { id: 9, TotalPrice: "9999", PlacedOn: "17/02/2023" },
        { id: 10, TotalPrice: "9999", PlacedOn: "17/02/23/07/202223" },
        { id: 11, TotalPrice: "9999", PlacedOn: "23/07/2022" },
        { id: 12, TotalPrice: "9999", PlacedOn: "01/01/2023" },
    ];
    return (
        <>
            <div className="profile-orders">
                <DataGrid
                    rows={rows}
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
