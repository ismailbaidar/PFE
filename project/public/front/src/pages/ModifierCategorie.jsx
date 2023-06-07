import React, { useState,useEffect,useMemo } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'
import {useSelector,useDispatch} from 'react-redux'
import { getOneCategorie,getCategories,updateCategorie } from '../features/CategorieSlice'
import {useParams,useNavigate} from 'react-router-dom'
import MiniLoading from '../components/mini-loading/MiniLoading'
import FlashCard from '../components/Flash card/FlashCard'

const ModifierCategorie = () => {
    const [images,setImages]=useState([{url:'1685642973.jpg'}])
    const [file,setFile]=useState([])
    const [name,setName]=useState()
    const [showError,setError] = useState(false)
    const statusProduct = useSelector(state=>state.Categorie.status)
    const [description,setDescription]=useState()
    const [parent,setParent]=useState()
    const {id} = useParams()
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const main = useSelector(state=>state.Categorie.main)
    const categories = useSelector(state=>state.Categorie.categories)
    useEffect(()=>{
        dispatch(getOneCategorie(id))
        .unwrap()
        .then(res=>{
            setName(res.categorie.name)
            setDescription(res.categorie.description)
            setParent(res.categorie.categorie_id)
            setImages([{url:res.categorie.img}])
        })
        dispatch(getCategories())
    },[])
    const options=useMemo(()=>{
        return categories.length>0?categories.filter(e=>e.id!=id):[]
    },[categories])


    const update=()=>{
        if((name.length===0 ||  description.length===0) || (file.length===0 && images.length===0)){
            return setError(true)
        }   
        dispatch(updateCategorie({id:id,name:name,description:description,file:file.length>0?file[0]:''}))
        .unwrap()
        .then(()=>navigate('/admin/categories'))
    }



  return (

    <div className='Addproduct' >
            <div className='HProduct'  >Modifier Categorie</div>
            <InputItem input={(e)=>setName(e.target.value)} value={name} placeholder={"Titre"} type={'text'}  />
            <InputItem input={(e)=>setDescription(e.target.value)} value={description} placeholder={"Description"} type={'text'}  />
            <InputItem value={parent}  input={(v)=>setParent(v)} placeholder={"Categorie parent"} type={'select'} options={options}  />
            <FileIntem images={images}  delFiles={setFile} delImages={setImages}  placeholder={'Catgeorie Svg'} files={file} AddFile={(e)=>{
                setFile([e.target.files[0]])
                setImages([])
            }}     />
            <div className='AjouterProduit'  onClick={update} >
            Modifier Categorie
            {statusProduct==='pending' && <div className='pendinglayer' ><MiniLoading/></div> }
            </div>
            {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}
    </div>
  )
}

export default ModifierCategorie
