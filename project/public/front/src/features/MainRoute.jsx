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
import Cart from "../components/cart/Cart";
import ToUpButton from "../components/Tools/ToUpButton";
import md5 from "md5";

const MainRoute = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="products" element={<AllProducts />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="Checkout" element={<Checkout />} />
                <Route path="/product/:productId" element={<SinglePage />} />
                <Route path="*" element={<Navigate to="/notFound" />} />
            </Routes>
            <Footer />
            <ToUpButton />
        </>
    );
};

export default MainRoute;
