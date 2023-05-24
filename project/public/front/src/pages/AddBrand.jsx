import React, { useState } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'

const AddBrand = () => {
    const [file,setFile]=useState([])
  return (
    <div className='Addproduct' >
        <div className='HProduct'  >Ajouter Brand</div>
        <InputItem placeholder={"brand name"} type={'text'}  />
        <FileIntem  placeholder={'Brand image'} files={file} AddFile={(e)=>setFile([URL.createObjectURL(e.target.files[0])])}     />
        <div className='AjouterProduit' >Ajouter Brand</div>

    </div>
  )
}

export default AddBrand
