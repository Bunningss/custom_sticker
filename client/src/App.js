import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

// Components
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Scroll from './Components/Scoll/Scoll';

// Pages
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Faqs from './Pages/Faqs/Faqs';
import Product from './Pages/Product/Product';
import Sticker from './Pages/Sticker/Sticker';
import Lanyard from './Pages/Lanyard/Lanyard';

function App() {
  const [ active, setActive ] = useState(false)
  return (
    <BrowserRouter>
      <Scroll/>
      <Navbar active={active} setActive={setActive}/>
      <Sidebar active={active} setActive={setActive}/>
      <Routes>
        <Route exact path='*' element={<Error/>}/>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/faqs' element={<Faqs/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/customize/sticker' element={<Sticker/>}/>
        <Route exact path='/customize/lanyard' element={<Lanyard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
