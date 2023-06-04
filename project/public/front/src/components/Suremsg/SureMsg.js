import React from 'react'
import '../styles/suremsg.css'
import { MdClose } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
function SureMsg() {
  return (
    <div className='full-display'>
      <div className='suremsg'>
        <div className='msg-icon'>
            <MdClose/>
        </div>
        <div className='containe'>
            <div className='icon-close'><IoIosCloseCircleOutline/></div>
            <h1>Are you sure?</h1>
            <p>Do you really want to delete these records? This process cannot be undone.</p>
            <div className='buttons'>
                <button className='cancel-button'>Cancel</button>
                <button className='delete-button'>Delete</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SureMsg