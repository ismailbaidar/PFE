import { Route, Routes } from "react-router-dom";
import MainRoute from "./features/MainRoute";
import SinglePage from "./components/Single page/SinglePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route path="/product/:productId" element={<SinglePage />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
