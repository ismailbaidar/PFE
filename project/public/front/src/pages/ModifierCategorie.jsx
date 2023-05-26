import React, { useState } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'

const ModifierCategorie = () => {
    const [file,setFile]=useState(['../../images/asusdisplay.webp'])
  return (

    <div className='Addproduct' >
            <div className='HProduct'  >Modifier Categorie</div>
            <InputItem  value='somthing' placeholder={"Titre"} type={'text'}  />
            <InputItem  value='nothing' placeholder={"Categorie parent"} type={'select'}  />
            <FileIntem  placeholder={'Catgeorie Svg'} files={file} AddFile={(e)=>setFile([URL.createObjectURL(e.target.files[0])])}     />
            <div className='AjouterProduit' >Modifier Categorie</div>

    </div>
  )
}

export default ModifierCategorie
