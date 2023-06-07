import React, { useState } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'
import {useDispatch,useSelector} from 'react-redux'
import FlashCard from '../components/Flash card/FlashCard'
import MiniLoading from '../components/mini-loading/MiniLoading'
import {addBrand} from '../features/BrandSlice'
import {useNavigate} from 'react-router-dom'
const AddBrand = () => {
    const [file,setFile]=useState([])
    const navigate=useNavigate()
    const [showError,setError] = useState(false)
    const statusProduct = useSelector(state=>state.Brand.status)
    const [name,setName]=useState('');
    const dispatch=useDispatch()
    const addBrandF=()=>{
        if(name.length==0 || file.length==0){
            return setError(true)
        }
        dispatch(addBrand({name:name,file:file[0]}))
        .unwrap()
        .then(()=>navigate('/admin/Brands'))
    }
  return (
    <div className='Addproduct' >
        <div className='HProduct'  >Ajouter Brand</div>
        <InputItem  input={e=>setName(e.target.value)} placeholder={"brand name"} type={'text'}  />
        <FileIntem  placeholder={'Brand image'} files={file} AddFile={(e)=>setFile([e.target.files[0]])}     />
        <div className='AjouterProduit' onClick={addBrandF} >
        Ajouter Brand
        {statusProduct=='pending' && <div className='pendinglayer' ><MiniLoading/></div> }
        </div>
        {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}

    </div>
  )
}

export default AddBrand
