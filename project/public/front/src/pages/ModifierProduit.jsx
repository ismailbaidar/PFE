import React, { useRef, useState } from 'react'
import InputItem from '../components/Checkout/InputItem';
import OptionsSelect from '../components/Admin/OptionsSelect';
import JoditEditor from 'jodit-react';
import FileIntem from '../components/Admin/FileIntem';
import '../styles/AddProduct.css'


const ModifierProduit=()=>{
    let option={key:'',value:''}
    let [object,setObject] =useState ({titre:'azed',price:'1234$',qte:'324',Categorie:'laptop',options:[{key:'ram',value:'12gb'}],images:['../../../images/asusdisplay3.webp'],description:'<h1>OoO</h1>'})
    const [options,setOptions]=useState([option])
    const editor = useRef(null);
	const [content, setContent] = useState(object.description);
    const [files,setFiles]=useState(object.images)
    const AddFile=(e)=>{
        setFiles([...files,URL.createObjectURL(e.target.files[0])])
    }
    const config = {
			readonly: false,
			placeholder:  'Start typings...'}

  return (
    <div className='Addproduct' >
    <div className='HProduct'  >Modifier Produit</div>


    <InputItem placeholder={"Titre"} value={object.titre} full={true}  type={'text'}  />

    <div className='ContainerInputProduct' >
    <InputItem placeholder={"Price"}  value={object.price} type={'text'}  />
    <InputItem placeholder={"Qte"}  value={object.qte} type={'number'}  />
    </div>

    <InputItem placeholder={"Categorie"} type={'select'}  />


    <div className='options' >
    <span className='placeholderPI' >Options</span>
    <div className='OptionsContainer' >
    {options.map(e=><OptionsSelect data={e} />)}
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
    <div className='AjouterProduit' >Modifier Produit</div>
    </div>
  );}
export default ModifierProduit
