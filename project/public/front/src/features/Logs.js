import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import Action from "./Action";

export default function Logs() {
    const [rows, setRows] = useState([]);

    const columns = [
        { field: "id", headerName: "Log Id", width: 100 },
        { field: "logable_type", headerName: "Type", width: 150 },
        { field: "content", headerName: "Content", width: 400 },
        {
            field: "Action",
            headerName: "Action Type",
            width: 200,
            renderCell: (params) => {
                return <Action type={params.value} />;
            },
        },
        { field: "created_at", headerName: "Date", width: 200 },
    ];

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/logs")
            .then((res) =>
                setRows(
                    res.data.map((e) => ({
                        ...e,
                        logable_type: e.logable_type.split(`\\`)[2],
                    }))
                )
            )
            .catch((err) => console.log(err));
    }, []);

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
        </>
    );
}
