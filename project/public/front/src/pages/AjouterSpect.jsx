import React, { useState } from 'react';
import InputItem from '../components/Admin/InputItem';
import FileIntem from '../components/Admin/FileIntem';

const AjouterSpect = () => {
    const [file,setFile]=useState([])
  return (
    <div className='Addproduct' >
    <div className='HProduct'  >Ajouter Option</div>
    <div className='ContainerInputProduct' >
    <InputItem placeholder={"Option name"} type={'text'}  />
    <InputItem placeholder={"Option valeurs "} type={'text'}  />
    </div>
    <FileIntem  placeholder={'option image'} files={file}  AddFile={(e)=>setFile([URL.createObjectURL(e.target.files[0])])} />
    <div className='AjouterProduit' >Ajouter Option</div>
    </div>
  );
}

export default AjouterSpect;
