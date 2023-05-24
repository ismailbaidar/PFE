import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import '../styles/AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import ImageCard from '../components/Admin/ImageCard';
import OptionsSelect from '../components/Admin/OptionsSelect';
import InputItem from '../components/Admin/InputItem';
import FileIntem from '../components/Admin/FileIntem';
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


    <InputItem placeholder={"Titre"} type={'text'}  />

    <div className='ContainerInputProduct' >
    <InputItem placeholder={"Price"} type={'text'}  />
    <InputItem placeholder={"Qte"} type={'number'}  />
    </div>

    <InputItem placeholder={"Categorie"} type={'select'}  />


    <div className='options' >
    <span className='placeholderPI' >Options</span>
    <div className='OptionsContainer' >
    {options.map(e=><OptionsSelect/>)}
    </div>


    <div className='AddBtnOption' onClick={()=>setOptions([...options,option])} >+ Ajouter une autre option</div>
    </div>

    <FileIntem   placeholder={'poduct images'} files={files} AddFile={AddFile} />

    <div className='descriptionAddProduct' >
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
