import React, { useState ,useEffect} from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'
import {useSelector,useDispatch} from 'react-redux'
import {getOne,updateBrand} from '../features/BrandSlice'
import { useParams,useNavigate } from 'react-router-dom'
import MiniLoading from '../components/mini-loading/MiniLoading'
import FlashCard from '../components/Flash card/FlashCard'

const ModifierBrand = () => {
    const [file,setFile]=useState([])
    const navigate = useNavigate()
    const [showError,setError] = useState(false)
    const [images,setImages]=useState([{url:'1685642973.jpg'}])
    const [name,setName]=useState('')
    const dispatch = useDispatch()
    const {id} = useParams()
    const statusProduct = useSelector(state=>state.Brand.status)
    const main = useSelector(state=>state.Brand.main)
    useEffect(()=>{
        dispatch(getOne(id))
        .unwrap()
        .then((res)=>{setName(res.brand.name);setImages([{url:res.brand.img}])})
    },[])

    const update=()=>{
        if(name.length===0  || (file.length===0 && images.length===0)){
            return setError(true)
        }
        dispatch(updateBrand({id:id,name:name,img:file.length>0?file[0]:''}))
        .unwrap()
        .then(()=>navigate('/admin/brands'))
    }
  return (
    <div className='Addproduct' >
        <div className='HProduct'  >Modifier Brand</div>
        <InputItem  value={name}  input={e=>setName(e.target.value)}  placeholder={"brand name"} type={'text'}  />
        <FileIntem delFiles={setFile} delImages={setImages}  placeholder={'Brand image'} images={images} files={file} AddFile={(e)=>{
            setFile([e.target.files[0]])
            setImages([])
        }}     />
        <div className='AjouterProduit' onClick={update} >
        Modifier Brand
        {statusProduct==='pending' && <div className='pendinglayer' ><MiniLoading/></div> }

        </div>
        {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}

    </div>
  )
}

export default ModifierBrand
