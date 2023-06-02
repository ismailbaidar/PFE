import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import AllProducts from "../pages/AllProducts";
import Checkout from "../pages/Checkout";
import Register from "../components/register/Register";
import SinglePage from "../components/Single page/SinglePage";
import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";
const MainRoute = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path="Categorie/:idCategorie"
                    element={<AllProducts />}
                />
                <Route path="Checkout" element={<Checkout />} />
                <Route path="/product/:productId" element={<SinglePage />} />

                <Route path="*" element={<Navigate to="/notFound" />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainRoute;
