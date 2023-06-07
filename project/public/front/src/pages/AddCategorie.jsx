import React, { useState,useEffect } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'
import { useDispatch, useSelector } from "react-redux";
import FlashCard from '../components/Flash card/FlashCard'
import MiniLoading from '../components/mini-loading/MiniLoading'
import {getCategories,addCategorie} from '../features/CategorieSlice'
import { useNavigate} from 'react-router-dom'
const AddCategorie = () => {
    const [showError,setError] = useState(false)
    const navigate = useNavigate()
    const [file,setFile]=useState([])
    const [name,setName]=useState();
    const [description,setDescription]=useState();
    const [parent,setParent]=useState();
    const dispatch = useDispatch();
    const statusProduct = useSelector(state=>state.Categorie.status)
    const categories = useSelector(state=>state.Categorie.categories);
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    const addCat=()=>{
        if(name.length===0 ||  description.length===0 || file.length===0){
            return setError(true)
        }
        dispatch(addCategorie({name:name,parent:parent,description:description,img:file[0]}))
        .unwrap()
        .then(res=>navigate('/admin/categories'))
    }
  return (

    <div className='Addproduct' >
            <div className='HProduct'  >Ajouter Categorie</div>
            <InputItem placeholder={"Titre"} type={'text'} input={e=>setName(e.target.value)} />
            <InputItem placeholder={"Description"} type={'text'} input={e=>setDescription(e.target.value)} />
            <InputItem placeholder={"Categorie parent"} input={(v)=>setParent(v)} options={categories} type={'select'}  />
            <FileIntem  placeholder={'Catgeorie Svg'} files={file} AddFile={(e)=>setFile([e.target.files[0]])}     />
            <div className='AjouterProduit' onClick={addCat} >
            Ajouter Categorie
            {statusProduct==='pending' && <div className='pendinglayer' ><MiniLoading/></div> }
            </div>
            <div className='errorDi' >
            {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}
            </div>
    </div>
  )
}

export default AddCategorie
