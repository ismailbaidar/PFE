import { Route, Routes } from "react-router-dom";
import MainRoute from "./features/MainRoute";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/*' element={<MainRoute/>}  />
    </Routes>
    </div>
  );

}

export default App;
