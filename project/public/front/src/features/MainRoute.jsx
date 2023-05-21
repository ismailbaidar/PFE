import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Route,Routes} from 'react-router-dom'
import AllProducts from '../pages/AllProducts';

const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes >
    <Route  index element={<Home/>}  />
    <Route  path='Categorie/:idCategorie' element={<AllProducts/>}  />
    </Routes>
    <Footer/>
    </>
  );
}

export default MainRoute;
