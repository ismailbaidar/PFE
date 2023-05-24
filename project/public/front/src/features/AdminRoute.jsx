import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../components/Admin/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Admin/Search'
import DashboardHome from '../pages/DashboardHome'
import AddProduct from '../pages/AddProduct'

const AdminRoute = () => {
  return (
    <div  className='DashbordMain' >
        <SideBar  />
        <div className='WrapperAdmin'>
            <Search/>
        <Routes>
            <Route path='/' element={<DashboardHome/>} />
            <Route path='/Ajouter' element={<AddProduct/>} />
        </Routes>

        </div>

    </div>
  )
}

export default AdminRoute
