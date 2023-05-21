import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Route,Routes} from 'react-router-dom'
import AllProducts from '../pages/AllProducts';
import Checkout from '../pages/Checkout';
import Register from '../components/register/Register';
import SinglePage from '../components/Single page/SinglePage';

const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes >
    <Route  index element={<Home/>}  />
    <Route  path='Categorie/:idCategorie' element={<AllProducts/>}  />
    <Route  path='Checkout' element={<Checkout/>}  />
    <Route path="register" element={<Register />} />
    <Route path="/product/:productId" element={<SinglePage />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default MainRoute;
