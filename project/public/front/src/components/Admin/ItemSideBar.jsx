import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ItemSideBar = ({title,icon,active}) => {
  return (
    <div className={`itemSideBar ${active?'activeEm':""}`} >
        <FontAwesomeIcon  id='DashboardIcon' icon={icon} />
        <span className='titleDashboard' >{title}</span>
    </div>
  )
}

export default ItemSideBar
