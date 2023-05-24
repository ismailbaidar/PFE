import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ImageCard from './ImageCard'

const FileIntem = ({files,AddFile,placeholder}) => {
  return (
    <div className='fileInputProductAjouter' >
        <div className='placeholderPI' >{placeholder}</div>
        <div className='ImagesContainer' >
        {files.map(e=><ImageCard img={e} />)}
        <div className='InputFileProductAd' >
        <label htmlFor='file' ><FontAwesomeIcon id='uploadIcon' icon={faCloudArrowUp} /> Upload File</label>
        <input type='file' onChange={AddFile} id='file' />
        </div>
        </div>
    </div>
  )
}

export default FileIntem
