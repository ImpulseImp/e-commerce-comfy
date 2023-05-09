import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import './App.css';

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Error,
  Private,
} from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='products/:Id' element={<SingleProduct />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
// <Route index element = {}/>
// <Route path='' element={}/>
// <Route path='' element={}/>
// <Route path='' element={}/>
// <Route path='' element={}/>
