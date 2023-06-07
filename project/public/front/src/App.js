import { Navigate, Route, Routes } from "react-router-dom";
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
function App() {
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.withCredentials = true;
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("auth_token");
        config.headers.Authorization =
            "Bearer 1|UpSPppVveWw1Ycm4cSwpmsTa08jsLxpJ8PBpc3jZ";
        return config;
    });
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route path="/Admin/*" element={<AdminRoute />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="tzst" element={<ConfirmationCode />} />
                <Route path="*" element={<Navigate to="/notFound" />} />
                <Route
                    path="notfound"
                    element={<ErrorPage errorType={404} />}
                />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="test" element={<MiniLoading />} />
                <Route path="*" element={<Navigate to="/notFound" />} />
            </Routes>
        </div>
    );
}

export default App;
