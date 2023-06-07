import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import InputItem from '../components/Admin/InputItem';
import FileIntem from '../components/Admin/FileIntem';
import { useParams,useNavigate } from 'react-router-dom'
import {getOne,UpdateSpect} from '../features/SpectSlice'
import MiniLoading from '../components/mini-loading/MiniLoading'
import FlashCard from '../components/Flash card/FlashCard'
const ModifierSpect = () => {
    const [file,setFile]=useState([])
    const navigate = useNavigate()
    const [showError,setError] = useState(false)
    const [images,setImages]=useState([{url:'1685642973.jpg'}])
    const [name,setName]=useState('')
    const dispatch = useDispatch()
    const {id} = useParams()
    const statusProduct = useSelector(state=>state.Spect.status)
    const main = useSelector(state=>state.Spect.main)
    useEffect(()=>{
        dispatch(getOne(id))
        .unwrap()
        .then((res)=>{setName(res.spect.name);setImages([{url:res.spect.img}])})
    },[])
    const update=()=>{
        if(name.length===0  || (file.length===0 && images.length===0)){
            return setError(true)
        }
        dispatch(UpdateSpect({id:id,name:name,img:file.length>0?file[0]:''}))
        .unwrap()
        .then(()=>navigate('/admin/Spects'))
    }
      return (
    <div className='Addproduct' >
    <div className='HProduct'  >Modifier Option</div>
    <div className='ContainerInputProduct' >
    <InputItem input={e=>setName(e.target.value)} value={name} placeholder={"Option name"} type={'text'}  />
    </div>
    <FileIntem  placeholder={'option image'} files={file} images={images} AddFile={(e)=>{
        setFile([e.target.files[0]])
            setImages([])
    }} />
    <div className='AjouterProduit' onClick={update} >
    Modifier Option
    {statusProduct==='pending' && <div className='pendinglayer' ><MiniLoading/></div> }
    </div>
    {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}
    </div>
  );
}

export default ModifierSpect;
