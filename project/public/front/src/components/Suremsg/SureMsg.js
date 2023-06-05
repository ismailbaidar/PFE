import React from 'react'
import '../../styles/suremsg.css'
import { MdClose } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
function SureMsg({close,func}) {
  return (
    <div className='full-display'>
      <div className='suremsg'>
        <div className='msg-icon'>
            <MdClose   onClick={close} />
        </div>
        <div className='containe'>
            <div className='icon-close'><IoIosCloseCircleOutline/></div>
            <h1>Are you sure?</h1>
            <p>Do you really want to delete these records? This process cannot be undone.</p>
            <div className='buttons'>
                <button className='cancel-button' onClick={close} >Cancel</button>
                <button className='delete-button' onClick={func} >Delete</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SureMsg