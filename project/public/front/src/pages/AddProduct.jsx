import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import '../styles/AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import ImageCard from '../components/Admin/ImageCard';
import OptionsSelect from '../components/Admin/OptionsSelect';
const AddProduct = () => {
    let option={key:'',value:''}
    const [options,setOptions]=useState([option])
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [files,setFiles]=useState([])
    const AddFile=(e)=>{
        setFiles([...files,URL.createObjectURL(e.target.files[0])])
    }
    const config = {
			readonly: false,
			placeholder:  'Start typings...'}

  return (
    <div className='Addproduct' >
    <div className='HProduct'  >Ajouter Produit</div>
    <div className='InputFullProduct  InputProduct' >
    <span className='placeholderPI' >Titre</span>
    <input/>

    </div>

    <div className='ContainerInputProduct' >
    <div className='InputProduct' >
        <div className='placeholderPI' >Price</div>
        <input/>
    </div>

     <div className='InputProduct' >
     <div className='placeholderPI' >QTe</div>
     <input type='number' />
    </div>



    </div>

    <div className='InputFullProduct InputProduct' >
    <div className='placeholderPI' >Catgorie</div>
    <select >
    <option>Choisir ---</option>
    </select>
    </div>

    <div className='options' >
    <span className='placeholderPI' >Options</span>
    <div className='OptionsContainer' >
    {options.map(e=><OptionsSelect/>)}
    </div>


    <div className='AddBtnOption' onClick={()=>setOptions([...options,option])} >+ Ajouter une autre option</div>
    </div>

    <div className='fileInputProductAjouter' >
        <div className='placeholderPI' >Photos du Produit</div>
        <div className='ImagesContainer' >
        {files.map(e=><ImageCard img={e} />)}
        <div className='InputFileProductAd' >
        <label htmlFor='file' ><FontAwesomeIcon id='uploadIcon' icon={faCloudArrowUp} /> Upload File</label>
        <input type='file' onChange={AddFile} id='file' />
        </div>
        </div>
    </div>

    <div className='description' >
    <div className='placeholderPI' >Description</div>
    <JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1}
			onBlur={newContent => setContent(newContent)}
			onChange={newContent => {
                console.log(newContent)
            }}
		/>
    </div>
    <div className='AjouterProduit' >Ajouter Produit</div>
    </div>
  );
}

export default AddProduct;
