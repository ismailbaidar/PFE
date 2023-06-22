import axios from 'axios'
import { useState,useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputItem from '../components/Admin/InputItem';
import SureMsg from "../components/Suremsg/SureMsg";

const ShowLivreurs=()=>{
    const [data,setData]=useState([])
    const [citys,setCitys]=useState([])
    const [Deleted,setDeleted]=useState(null)
    const [itemcity,setitemcity]=useState(null)
    const [pass,setPass]=useState('');
    const [mail,setMail]=useState('');
    console.log(data)
    const viewportwidth=()=>{
        axios.post('http://localhost:8000/api/getLivreurs')
            .then(res=>setData(res.data.livreurs.map(e=>({...e,city:e?.ville?.City}))))
    }
        useEffect(()=>{
        (async()=>{
            axios.post('http://localhost:8000/api/getLivreurs')
            .then(res=>setData(res.data.livreurs.map(e=>({...e,city:e?.ville?.City}))))

            axios.post('http://localhost:8000/api/getCitys')
            .then(res=>setCitys(res.data.livreurs))
        })()
    },[])

    const AjouerLivreur=()=>{
        console.log(itemcity)
        if(itemcity){
            const form =  new FormData()
            form.append('city',itemcity)
            axios.post('http://localhost:8000/api/AddLivreur',form)
            .then(res=>{setPass(res.data.password);setMail(res.data.email);viewportwidth()})
        }
    }
    const DeleteItem=()=>{
        const form= new FormData()
        form.append('id',Deleted)
        axios.post('http://localhost:8000/api/DeletUser',form)
        .then(res=>res.data)
        .then(()=>{viewportwidth();setDeleted()})
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 130 },
        { field: "email", headerName: "Price", width: 130 },
        {
            field: "city",
            headerName: "city",
            type: "number",
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

    return <div className='ProductsDashboard' >

    <p className='SlidersContentManagement'>Form Ajouter Livreurs</p>
    <div className='ContainerInputZE' >
    <InputItem
        placeholder={"Cities"}
        type={"select"}
        city={true}
        options={citys}
        input={(v) => setitemcity(v)}
    />

    <button className='btnAddLivresion' onClick={AjouerLivreur} >Ajouter</button>
    { pass && mail ? (<div className="ContainerInputProduct">
    <InputItem
        input={(v) => ''}
        placeholder={"Password"}
        value={pass}
    />
    <InputItem
        input={(v)=>''}
        placeholder={"Email"}
        value={mail}
        type={"text"}
    />
</div>):''
 }
    </div>
    <p className='SlidersContentManagement'>List Livreurs</p>
    <DataGrid
                rows={data}
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
}
export default ShowLivreurs
