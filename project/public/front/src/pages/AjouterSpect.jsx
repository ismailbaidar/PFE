import React, { useState } from 'react';
import InputItem from '../components/Admin/InputItem';
import FileIntem from '../components/Admin/FileIntem';
import {useDispatch,useSelector} from 'react-redux'
import FlashCard from '../components/Flash card/FlashCard'
import MiniLoading from '../components/mini-loading/MiniLoading'
import {useNavigate} from 'react-router-dom'
import {AddSpect} from '../features/SpectSlice'

const AjouterSpect = () => {
    const [file,setFile]=useState([])
    const [name,setName]=useState('')
    const navigate=useNavigate()
    const [showError,setError] = useState(false)
    const statusProduct = useSelector(state=>state.Spect.status)
    const dispatch=useDispatch()
    const addSpect=()=>{
        if(name.length==0 || file.length==0){
            return setError(true)
        }
        dispatch(AddSpect({name:name,file:file[0]}))
        .unwrap()
        .then(()=>navigate('/admin/Spects'))
    }
  return (
    <div className='Addproduct' >
    <div className='HProduct'  >Ajouter Option</div>
    <div className='ContainerInputProduct' >
    <InputItem   input={e=>setName(e.target.value)} placeholder={"Option name"} type={'text'}  />
    </div>
    <FileIntem  delFiles={setFile} placeholder={'option image'} files={file}  AddFile={(e)=>setFile([e.target.files[0]])} />
    <div className='AjouterProduit' onClick={addSpect} >
    Ajouter Option
    {statusProduct=='pending' && <div className='pendinglayer' ><MiniLoading/></div> }
    </div>
    </div>
  );
}

export default AjouterSpect;
