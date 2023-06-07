import AnalyseProduct from "../components/Admin/AnalyseProduct";
import { DataGrid } from "@mui/x-data-grid";
import ModelItem from "../components/Admin/ModelItem";
import SureMsg from "../components/Suremsg/SureMsg";
import FlashCard from '../components/Flash card/FlashCard'
import {deleteBrand,getBrands} from '../features/BrandSlice'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Brands=()=>{
    const location = useNavigate()
    const [iditem, setId] = useState(null);
    const [Delete,setDeleted]=useState(null);
    const dispatch=useDispatch()
    const status = useSelector(state=>state.Brand.status)
    console.log(status)
    const [success,setSuccess]=useState(null);
    const Rows = useSelector(state=>state.Brand.brands)
    useEffect(()=>{
        dispatch(getBrands())
    },[])
    const deleteC=()=>{
        dispatch(deleteBrand(Delete))
        setDeleted(null)
        dispatch(getBrands())
    }
    useEffect(()=>{
        if(status!=='' && status!=='pending') setSuccess(true)
    },[status])
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "name", width: 130 },
        
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
                        <button
                            onClick={(e) => {e.stopPropagation(); location('/admin/Brandmodifier/'+params.id)}}
                            className="edite"

                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </div>
                );
            },
        },
    ];

        return (
            <div className='ProductsDashboard' >
            <AnalyseProduct />
            <button  className="ajouterProduit" onClick={()=>location('/admin/ajouterbrand')} >Ajouter Brand</button>
            <DataGrid
            rows={Rows}
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
        {Delete && <SureMsg   close={()=>setDeleted(null)} func={()=>deleteC()}   />}
        <div className='errorDi' >
        {success && <FlashCard  type='success'  content={status} title={'producta actions'} toogle={()=>setSuccess(null)} />}
        </div>
            </div>
        )
}
export default Brands