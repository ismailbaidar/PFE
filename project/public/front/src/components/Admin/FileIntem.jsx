import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ImageCard from './ImageCard'
import IFile from './IFile'

const FileIntem = ({files,AddFile,placeholder}) => {
  return (
    <div className='fileInputProductAjouter' >
        <div className='placeholderPI' >{placeholder}</div>
        <div className='ImagesContainer' >
        {files.map(e=><ImageCard img={e} />)}
        <IFile AddFile={AddFile} />
        </div>
    </div>
  )
}

export default FileIntem
