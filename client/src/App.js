import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';

// Banner
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
