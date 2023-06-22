import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainRoute from "./features/MainRoute";
import AdminRoute from "./features/AdminRoute";
import SinglePage from "./components/Single page/SinglePage";
import Register from "./components/register/Register";
import ErrorPage from "./pages/ErrorPage";
import FlashCard from "./components/Flash card/FlashCard";
import Profile from "./components/profile/Profile";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";
import ConfirmationCode from "./components/confirmationcode/ConfirmationCode";
import axios from "axios";
import MiniLoading from "./components/mini-loading/MiniLoading";
import Login from "./components/login/Login";
import SureMsg from "./components/Suremsg/SureMsg";
import SingleOrderDetails from "./components/SingleOrderDetails/SingleOrderDetails";
import { useEffect } from "react";
import PreventDirectAccess from "./components/Tools/PreventDirectAccess";
import LivraisonHome from "./components/Livraison/LivraisonHome";
import ToUpButton from "./components/Tools/ToUpButton";
import PaymentSuccess from "./components/Payment-success/PaymentSuccess";
import md5 from "md5";
import { useDispatch } from "react-redux";
import { setToken } from "./features/userSlice";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!localStorage.getItem("AUTH_TOKEN")) {
            localStorage.setItem("AUTH_TOKEN", null);
        } else if (localStorage.getItem("AUTH_TOKEN") != "null") {
            dispatch(setToken(localStorage.getItem("AUTH_TOKEN")));
        }
        if (!localStorage.getItem("browsing_history")) {
            localStorage.setItem("browsing_history", JSON.stringify([]));
        }
    }, []);
    useEffect(() => {});
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.withCredentials = true;
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("AUTH_TOKEN");

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
    const navigate = useNavigate();
    return (
        <div className="App">
            <div id="top"></div>

            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route
                    path="/confirmationCode"
                    element={<ConfirmationCode />}
                />

                <>
                    <Route
                        path="order/:id"
                        element={
                            md5("user") == localStorage.getItem("role") ? (
                                <SingleOrderDetails />
                            ) : (
                                <ErrorPage errorType={401} />
                            )
                        }
                    />
                    <Route
                        path="/profile/*"
                        element={
                            <PreventDirectAccess type="auth">
                                <Profile />
                            </PreventDirectAccess>
                        }
                    />
                    <Route
                        path="paymentSuccess"
                        element={
                            md5("user") == localStorage.getItem("role") ? (
                                <PaymentSuccess />
                            ) : (
                                <ErrorPage errorType={401} />
                            )
                        }
                    />

                    <Route
                        path="order/:id"
                        element={
                            md5("user") == localStorage.getItem("role") ? (
                                <SingleOrderDetails />
                            ) : (
                                <ErrorPage errorType={401} />
                            )
                        }
                    />
                </>
                {md5("admin") == localStorage.getItem("role") && (
                    <>
                        <Route path="/Admin/*" element={<AdminRoute />} />
                    </>
                )}
                <Route
                    path="register"
                    element={
                        <PreventDirectAccess type="login">
                            <Register />
                        </PreventDirectAccess>
                    }
                />
                <Route
                    path="login"
                    element={
                        <PreventDirectAccess type="login">
                            <Login />
                        </PreventDirectAccess>
                    }
                />

                {md5("livreur") == localStorage.getItem("role") && (
                    <Route path="livreur" element={<LivraisonHome />} />
                )}
                <Route
                    path="notfound"
                    element={<ErrorPage errorType={404} />}
                />
            </Routes>
        </div>
    );
}

export default App;
