import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Scroll from './Components/Scoll/Scoll';
import Footer from './Components/Footer/Footer';

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
import Cart from './Pages/Cart/Cart';
import My_Account from './Pages/My_Account/My_Account';
import Contact from './Pages/Contact/Contact';

function App() {
  const user = useSelector((state) => state.user);
  
  const [ active, setActive ] = useState(false)
  return (
    <BrowserRouter>
      <Scroll/>
      <Navbar active={active} setActive={setActive}/>
      <Sidebar active={active} setActive={setActive}/>
      <Routes>
        <Route exact path='*' element={<Error/>}/>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='/login' element={ !user.currentUser ? <Login/> : <My_Account/> }/>
        <Route exact path='/register' element={!user.currentUser ? <Register/> : <My_Account/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/faqs' element={<Faqs/>}/>
        <Route exact path='/product/sticker/:id' element={<Product/>}/>
        <Route exact path='/customize/sticker' element={<Sticker/>}/>
        <Route exact path='/customize/lanyard' element={<Lanyard/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
