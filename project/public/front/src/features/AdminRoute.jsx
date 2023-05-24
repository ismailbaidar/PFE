import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../components/Admin/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Search from '../components/Admin/Search'
import DashboardHome from '../pages/DashboardHome'
import AddProduct from '../pages/AddProduct'
import AddCategorie from '../pages/AddCategorie'
import AddBrand from '../pages/AddBrand'


const AdminRoute = () => {
  return (
    <div  className='DashbordMain' >
        <SideBar  />
        <div className='WrapperAdmin'>
            <Search/>
        <Routes>
            <Route path='/' element={<DashboardHome/>} />
            <Route path='/AjouterProduit' element={<AddProduct/>} />
            <Route path='/AjouterCategorie' element={<AddCategorie/>} />
            <Route path='/AjouterBrand' element={<AddBrand/>} />
            <Route    />
        </Routes>

        </div>

    </div>
  )
}

export default AdminRoute
