import React, { useState } from 'react';
import InputItem from '../components/Admin/InputItem';
import FileIntem from '../components/Admin/FileIntem';

const ModifierSpect = () => {
    const [file,setFile]=useState(['../../images/asusdisplay.webp'])
  return (
    <div className='Addproduct' >
    <div className='HProduct'  >Modifier Option</div>
    <div className='ContainerInputProduct' >
    <InputItem  value={'name'} placeholder={"Option name"} type={'text'}  />
    <InputItem  value={'value'} placeholder={"Option valeurs "} type={'text'}  />
    </div>
    <FileIntem  placeholder={'option image'} files={file}  AddFile={(e)=>setFile([URL.createObjectURL(e.target.files[0])])} />
    <div className='AjouterProduit' >Modifier Option</div>
    </div>
  );
}

export default ModifierSpect;
