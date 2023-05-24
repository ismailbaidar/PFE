import { Route, Routes } from "react-router-dom";
import MainRoute from "./features/MainRoute";
import AdminRoute from "./features/AdminRoute";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<MainRoute />} />
                <Route path="/Admin/*" element={<AdminRoute />} />
            </Routes>
        </div>
    );
}

export default App;
