import React, { useState } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'

const AddCategorie = () => {
    const [file,setFile]=useState([])
  return (

    <div className='Addproduct' >
            <div className='HProduct'  >Ajouter Categorie</div>
            <InputItem placeholder={"Titre"} type={'text'}  />
            <InputItem placeholder={"Categorie parent"} type={'select'}  />
            <FileIntem  placeholder={'Catgeorie Svg'} files={file} AddFile={(e)=>setFile([URL.createObjectURL(e.target.files[0])])}     />
            <div className='AjouterProduit' >Ajouter Categorie</div>

    </div>
  )
}

export default AddCategorie
