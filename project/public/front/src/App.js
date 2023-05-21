import { Route, Routes } from "react-router-dom";
import MainRoute from "./features/MainRoute";
import SinglePage from "./components/Single page/SinglePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/register/Register";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route path="register" element={<Register />} />
                <Route path="/product/:productId" element={<SinglePage />} />
            </Routes>
        </div>
    );
}

export default App;
