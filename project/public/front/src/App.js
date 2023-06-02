import { Route, Routes } from "react-router-dom";
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
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route path="/Admin/*" element={<AdminRoute />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<ErrorPage errorType={404} />} />
            </Routes>
        </div>
    );
}

export default App;
