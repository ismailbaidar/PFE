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
function App() {
    return (
        <div className="App">
            <Navbar> </Navbar>
            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route path="/Admin/*" element={<AdminRoute />} />
                <Route path="register" element={<Register />} />
                <Route path="/product/:productId" element={<SinglePage />} />
                <Route path="*" element={<ErrorPage errorType={404} />} />
                <Route path="test" element={<Cart />}></Route>
            </Routes>
        </div>
    );
}

export default App;
