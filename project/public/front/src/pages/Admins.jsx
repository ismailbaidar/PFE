import axios from "axios";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputItem from "../components/Admin/InputItem";
import SureMsg from "../components/Suremsg/SureMsg";
import { Checkbox } from "@mui/material";
import ChechBoxItem from "../components/Admin/ChechBoxItem";
const Admins = () => {
    const [Deleted, setDeleted] = useState(null);
    const [Users, setUsers] = useState([]);
    const GetUsers = () => {
        axios
            .post("http://localhost:8000/api/getAllAdmins")
            .then((res) => setUsers(res.data.users));
    };
    useEffect(() => {
        GetUsers();
    }, []);
    const DeleteItem=()=>{
        const form= new FormData()
        form.append('id',Deleted)
        axios.post('http://localhost:8000/api/DeletUser',form)
        .then(res=>res.data)
        .then(()=>{GetUsers();setDeleted()})
    }


    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "email", headerName: "Price", width: 130 },
        {
            field: " Action",
            headerName: "Action",
            width: 140,
            renderCell: (params) => {
                return (
                    /* <div className="actionbtntable"  onClick={()=>console.log(params)} >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setDeleted(params.id);
                            }}
                            className="delete"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <input
                            type="checkbox"
                            checked={params.row.role == "admin"}
                            style={{ display: "block", width: "20px" }}
                        />
                    </div> */
                    <ChechBoxItem params={params} setDeleted={setDeleted} />
                );
            },
        },
    ];

    return (
        <div>
            <p className="SlidersContentManagement">List Admins</p>
            <DataGrid
                rows={Users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                color="#fff"
                pageSizeOptions={[5, 10]}
            />
            {Deleted && (
                <SureMsg
                    close={() => setDeleted(null)}
                    func={() => DeleteItem()}
                />
            )}
        </div>
    );
};
export default Admins;
