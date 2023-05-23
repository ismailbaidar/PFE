import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../components/Admin/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Admin/Search'

const AdminRoute = () => {
  return (
    <div  className='DashbordMain' >
        <SideBar  />
        <div className='WrapperAdmin'>
            <Search/>
        <Routes>
            <Route    />
        </Routes>

        </div>

    </div>
  )
}

export default AdminRoute
