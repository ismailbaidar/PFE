import {Route,Routes} from 'react-router-dom'
import MainRoute from './features/MainRoute';


function App() {
  return (
    <div className="App">
        <Route path='/*' element={<MainRoute/>}  />

    </div>
  );
}

export default App;
