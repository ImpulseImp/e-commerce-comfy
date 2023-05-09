import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import './App.css';
import styled from 'styled-components';
import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
// <Route index element = {}/>
// <Route path='' element={}/>
// <Route path='' element={}/>
// <Route path='' element={}/>
// <Route path='' element={}/>
