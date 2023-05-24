import React, { useState } from 'react'
import ItemSideBar from './ItemSideBar'
import { faAngleLeft, faAngleRight, faBox, faBoxArchive,faList } from '@fortawesome/free-solid-svg-icons'
import '../../styles/AdminSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SideBar = () => {
    const [show,setShow]=useState(false)
  return (
    <div className={`sideBarAdmin  ${show?'minSidbarAdmin':'fullSideBarAdmin'}`} >
        <ItemSideBar icon={faBox} title={'Dashbord'} />
        <ItemSideBar  active icon={faBoxArchive} title={'Products'} />
        <ItemSideBar icon={faList} title={'Orders'}/>
        <ItemSideBar icon={faBoxArchive} title={'Collections'}/>
        <ItemSideBar icon={faBoxArchive} title={'Users'}/>
        <ItemSideBar icon={faBoxArchive} title={'Transaction'}/>
        <ItemSideBar icon={faBoxArchive} title={'Brands'}/>
        <ItemSideBar icon={faBoxArchive} title={'Categories'}/>
        <FontAwesomeIcon id='iconToogleDashboardM'  onClick={()=>setShow(!show)} icon={ show ? faAngleRight : faAngleLeft } />
    </div>
  )
}

export default SideBar
