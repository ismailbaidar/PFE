import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ItemResult=({item,addProduct})=>{
    console.log(item)
    return  <div className='itemResult' >
    <img src={'http://localhost:8000/storage/images/'+item.images[0].url}/>
    <p>{item.name}</p>
    <button  onClick={addProduct} ><FontAwesomeIcon icon={faPlus} /></button>
    </div>
}
export default ItemResult
