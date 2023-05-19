import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes >
    <Route  index element={<Home/>}  />
    </Routes>
    <Footer/>
    </>
  );
}

export default MainRoute;
