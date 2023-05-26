import React, { useState } from 'react'
import InputItem from '../components/Admin/InputItem'
import FileIntem from '../components/Admin/FileIntem'

const ModifierBrand = () => {
    const [file,setFile]=useState(['../../images/asusdisplay4.webp'])
  return (
    <div className='Addproduct' >
        <div className='HProduct'  >Modifier Brand</div>
        <InputItem  value={'nothing'} placeholder={"brand name"} type={'text'}  />
        <FileIntem  placeholder={'Brand image'} files={file} AddFile={(e)=>setFile([URL.createObjectURL(e.target.files[0])])}     />
        <div className='AjouterProduit' >Modifier Brand</div>

    </div>
  )
}

export default ModifierBrand
