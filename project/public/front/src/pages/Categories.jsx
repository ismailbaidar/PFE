import React, { useState } from "react";
import AnalyseProduct from "../components/Admin/AnalyseProduct";
import { DataGrid } from "@mui/x-data-grid";
import ModelItem from "../components/Admin/ModelItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    const [iditem, setId] = useState(null);
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "name", width: 130 },
        {
            field: "categorieParent",
            headerName: "categorieParent",
            width: 130,
        },
        {
            field: "Action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="actionbtntable">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log(params);
                            }}
                            className="delete"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                            onClick={(e) => e.stopPropagation()}
                            className="edite"
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </div>
                );
            },
        },
    ];
    const rows = [
        { id: 1, name: "Pc", categorieParent: "no parent"},
        { id: 2, name: "Phones", categorieParent: "no parent" },
        { id: 3, name: "smart Watch", categorieParent: "phones" },
        { id: 4, name: "Workstation", categorieParent: "pc" },
    ];
    return (
        <div className="ProductsDashboard">
            <AnalyseProduct />
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
};

export default Categories;
