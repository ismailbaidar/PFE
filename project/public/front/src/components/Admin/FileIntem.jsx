import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ImageCard from './ImageCard'
import IFile from './IFile'

const FileIntem = ({files,images,AddFile,placeholder,delFiles,delImages}) => {
    const deleteImg=(index)=>{
        delImages(prev=>{
            return prev.filter((e,i)=>i!==index)
        })
    }
    const deletefile=(index)=>{
        delFiles(prev=>{
            return prev.filter((e,i)=>i!==index)
        })
    }
  return (
    <div className='fileInputProductAjouter' >
        <div className='placeholderPI' >{placeholder}</div>
        <div className='ImagesContainer' >
        {files.map((e,i)=><ImageCard  del={()=>deletefile(i)}  img={URL.createObjectURL(e) } />)}
        {images && images.map((e,i)=><ImageCard  del={()=>deleteImg(i)}  img={'http://localhost:8000/storage/images/'+e.url} />)}
        <IFile AddFile={AddFile} />
        </div>
    </div>
  )
}

export default FileIntem
