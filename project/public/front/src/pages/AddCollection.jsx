import { faAngleLeft, faAngleRight, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useRef,useMemo } from 'react';
import InputItem from "../components/Admin/InputItem";
import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../features/productSlice'
import {AddCollection} from '../features/CollectionSlice'
import ItemResult from '../components/Admin/ItemResult'
import ImageCol from '../components/Admin/ImageCol';
import {faXmark } from "@fortawesome/free-solid-svg-icons";
import FlashCard from '../components/Flash card/FlashCard';

const Addcollection = () => {
    const ref=useRef()
    const navigate=useNavigate()
    const [disabled,setDisabled]=useState({left:true,right:false});
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [discount,setDiscount]=useState(0);
    const dispatch = useDispatch()
    const [addedProduct,setProducts]=useState([]);
    const products = useSelector(state=>state.productReducer.products)
    const [query,setQuery]=useState('')
    const [showError, setError] = useState(false);
    const data = useMemo(()=> query==''?products:products.filter(e=>e.name.includes(query)),[query,products])
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    const addProducts=(item)=>{
        console.log(addedProduct.find(e=>e.id==item.id))
        if (addedProduct.find(e=>e.id==item.id)) return ''
        setProducts([...addedProduct,item])
    }
    const verifyConfirm=()=>{
        if( addedProduct.length>0 && name!='' && description!=''  ){
             dispatch(AddCollection({name:name,decription:description,products:addedProduct,discount:discount}))
             .unwrap()
             .then(()=>navigate('collections'))
             .catch(err=>err)
             return ''
        }
        setError(true)
    }

    const del=(i)=>{
        setProducts(prev=>{
            let nr=prev.filter(e=>e.id!=i)
            return [...nr]
        })
    }

  return (
    <div className='EditeCollection' >

    <div className="LeftSide" >

    <div className='MainImage' >
    {addedProduct.length>0 && <img src={'http://localhost:8000/storage/images/'+addedProduct[0].images[0].url} /> }
    {addedProduct.length>0 &&     <FontAwesomeIcon onClick={()=>del(addedProduct[0].id)} id='dimgcard' icon={faXmark} /> }
    </div>

    <div className='containerCollImg' ref={ref} >
    <div className='imagesCol' >
    {addedProduct.length>0 && addedProduct.slice(1).map(e=><ImageCol del={()=>del(e.id)} img={e.images[0].url} />)}
    </div>
    </div>

    <div className='AddproductToCollection' >
    <div className='inputSearch' >
    <input onChange={(e)=>setQuery(e.target.value)} />
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
    <div className='searchItems' >
    <div className='ItemsResult' >
    {data.length>0 && data.map(e=><ItemResult  addProduct={()=>addProducts(e)}  item={e}/>) }
    </div>
    </div>
    </div>
    </div>

    <div className='rightSide'>
    <InputItem
    placeholder={"Name"}
    type={"text"}
    input={(e)=>setName(e.target.value)}
    />
    <InputItem
    placeholder={"Description"}
    type={"textarea"}
    input={(e)=>setDescription(e.target.value)}
    />
    <InputItem
    placeholder={"Discount"}
    type={"number"}
    value={discount}
    input={(e)=>{ if(Number(e.target.value)>=0){setDiscount(e.target.value)}}}
    />
    <button className='AjouterProduit' onClick={verifyConfirm}  style={
    {margin: '10px 0',
      marginLeft: 'auto',
      display: 'block'
    }} >Add Collection </button>
    </div>
    <div className='errorDi' >
    {showError && <FlashCard   toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}
    </div>

    </div>
  );
}

export default Addcollection;
