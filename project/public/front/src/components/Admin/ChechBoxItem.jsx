import React ,{useState}from 'react'
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
const ChechBoxItem = ({params,setDeleted}) => {
    const [sheceched,setChecked]=useState(params.row.role)
    const toogle=()=>{
        const form = new FormData()
        form.append('id',params.row.id)
        axios.post('http://localhost:8000/api/toogleAdmin',form)
        .then(res=>res.data)
    }
  return (
    <div className="actionbtntable"  onClick={()=>console.log(params)} >
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
                        onChange={()=>{setChecked(()=>sheceched==='admin'?'user':'admin');toogle()}}
                            type="checkbox"
                            checked={sheceched == "admin"}
                            style={{ display: "block", width: "20px" }}
                        />
                    </div>
  )
}

export default ChechBoxItem
