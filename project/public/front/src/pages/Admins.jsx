import axios from 'axios'
import { useState,useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputItem from '../components/Admin/InputItem';
import SureMsg from "../components/Suremsg/SureMsg";
const Admins=()=>{
    const [Deleted,setDeleted]=useState(null)
    const [Users,setUsers]=useState()
    const GetUsers=()=>{
        axios.post('http://localhost:8000/api/GetUsers')
        .then(res=>setUsers(res.data.users))
    }
    useEffect(()=>{
        GetUsers()
    },[])


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
                    <div className="actionbtntable">
                        <button
                            onClick={(e) => {
                                 e.stopPropagation();
                                setDeleted(params.id);
                            }}
                            className="delete"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                );
            },
        },
    ];

    return (<div>
    <p className='SlidersContentManagement'>List Livreurs</p>
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
                    func={() => 'DeleteItem'}
                />
            )}
    </div>)
}
export default Admins
