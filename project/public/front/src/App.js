import { Route, Routes } from "react-router-dom";
import MainRoute from "./features/MainRoute";
import SinglePage from "./components/Single page/SinglePage";
import Register from "./components/register/Register";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<MainRoute />} />
            </Routes>
        </div>
    );
}

export default App;
